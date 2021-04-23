import { Container } from '@components/ui'
import classNames from 'classnames'
import Image from 'next/image'
import React from 'react'
import s from './Layout.module.css'
const Layout: React.FC = ({ children }) => (
  <div
    className={classNames(
      s.root,
      'grid grid-cols-1 lg:grid-cols-2 h-full w-full  justify-center items-center fit'
    )}
    data-testid="Layout"
  >
    <div className="h-full flex flex-1">
      <Container>{children}</Container>
    </div>
    <div className="hidden lg:block w-full relative h-full bg-accents-1">
      <Image layout="fill" src="/signIn.png" objectFit="cover" />
    </div>
  </div>
)
export default Layout
