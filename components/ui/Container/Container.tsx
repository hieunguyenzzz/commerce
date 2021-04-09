import cn from 'classnames'
import React, { FC } from 'react'

interface Props {
  className?: string
  children?: any
  el?: HTMLElement
  clean?: boolean
  fluid?: boolean
}

const Container: FC<Props> = ({
  children,
  className,
  el = 'div',
  clean,
  fluid,
}) => {
  const rootClassName = cn(
    {
      'mx-auto w-full px-4 md:px-8 lg:px-12 xl:px-12': !clean,
      'max-w-7xl': !fluid,
    },
    className
  )
  let Component: React.ComponentType<
    React.HTMLAttributes<HTMLDivElement>
  > = el as any

  return <Component className={rootClassName}>{children}</Component>
}

export default Container
