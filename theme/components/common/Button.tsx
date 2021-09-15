import cn from 'classnames'
import React, {
  ButtonHTMLAttributes,
  forwardRef,
  JSXElementConstructor,
  useRef,
} from 'react'
import mergeRefs from 'react-merge-refs'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  href?: string
  className?: string
  size?: 'sm' | 'md' | 'lg'
  variant?: 'primary' | 'secoundary' | 'ghost' | 'link'
  active?: boolean
  type?: 'submit' | 'reset' | 'button'
  Component?: string | JSXElementConstructor<any>
  width?: string | number
  loading?: boolean
  disabled?: boolean
}

const Button: React.FC<ButtonProps> = forwardRef(function ButtonFn(
  props,
  buttonRef
) {
  const {
    size = 'md',
    className,
    variant = 'primary',
    children,
    active,
    width,
    loading = false,
    disabled = false,
    style = {},
    Component = 'button',
    ...rest
  } = props
  const ref = useRef<typeof Component>(null)

  return (
    <Component
      aria-pressed={active}
      data-variant={variant}
      ref={mergeRefs([ref, buttonRef])}
      className={cn(
        'font-bold rounded-l-xl rounded-t-xl transition duration-200',
        variant !== 'link'
          ? {
              'bg-green-500 hover:bg-green-600 text-sm text-white':
                variant === 'primary',
              'bg-gray-50 hover:bg-gray-100 text-sm text-gray-900':
                variant === 'secoundary',
              'py-2 px-6 text-sm': size === 'sm',
              'py-2 px-6 ': size === 'md',
              'py-2 px-6 text-lg leading-loose': size === 'lg',
              'opacity-25': loading,
              'opacity-10': disabled,
            }
          : 'hover:underline text-green-500',
        className
      )}
      disabled={disabled}
      style={{
        width,
        ...style,
      }}
      {...rest}
    >
      {children}
    </Component>
  )
})

export default Button
