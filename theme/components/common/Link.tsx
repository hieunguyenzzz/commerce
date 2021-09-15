import NextLink, { LinkProps as NextLinkProps } from 'next/link'
type Props = NextLinkProps & {
  className: string
}
const Link: React.FC<Props> = ({ href, children, ...props }) => {
  return (
    <NextLink href={href}>
      <a {...props}>{children}</a>
    </NextLink>
  )
}

export default Link
