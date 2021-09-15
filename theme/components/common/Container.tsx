import { FC } from 'react'

const Container: FC = ({ children }) => {
  return <div className="container px-4 max-w-6xl">{children}</div>
}

export default Container
