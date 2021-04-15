import cn from 'classnames'
import React, { FC } from 'react'
import s from './Container.module.css'
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
      [s.root]: !clean,
      [s.fluid]: fluid,
    },
    className
  )
  let Component: React.ComponentType<
    React.HTMLAttributes<HTMLDivElement>
  > = el as any

  return <Component className={rootClassName}>{children}</Component>
}

export default Container
