import { Check } from '@components/icons'
import Button, { ButtonProps } from '@components/ui/Button'
import { isDark } from '@lib/colors'
import cn from 'classnames'
import { FC } from 'react'
import s from './Swatch.module.css'
interface Props {
  active?: boolean
  children?: any
  className?: string
  label?: string
  variant?: 'size' | 'color' | string
  color?: string
}
const sizeLabelMap = {
  small: 's',
  medium: 'm',
  large: 'l',
}
const fixSizeLabel = (sizeStr: string) => {
  return (sizeLabelMap as any)[sizeStr] || sizeStr
}
const Swatch: FC<Omit<ButtonProps, 'variant'> & Props> = ({
  className,
  color = '',
  label,
  variant = 'size',
  active,
  ...props
}) => {
  variant = variant?.toLowerCase()
  label = label?.toLowerCase()

  const rootClassName = cn(
    s.root,
    {
      [s.active]: active,
      [s.size]: variant === 'size',
      [s.color]: color,
      [s.dark]: color ? isDark(color) : false,
    },
    className
  )
  const title = `${variant} ${label}`
  return (
    <Button
      title={title}
      className={rootClassName}
      style={color ? { backgroundColor: color } : {}}
      aria-label={'Variant Swatch - ' + title}
      {...props}
    >
      {variant === 'color' &&
        (active ? (
          <span className={s.icon}>
            <Check />
          </span>
        ) : (
          <span className={cn(s.icon, 'invisible')}>null</span>
        ))}
      {variant === 'size' && label ? fixSizeLabel(label) : null}
    </Button>
  )
}

export default Swatch
