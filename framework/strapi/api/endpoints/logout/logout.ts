import { STRAPI_JWT } from '@framework/const'
import { serialize } from 'cookie'
import type { LogoutEndpoint } from '.'

const logout: LogoutEndpoint['handlers']['logout'] = async ({ res,config }) => {
  // Remove the cookie
  res.setHeader('Set-Cookie',[ serialize(STRAPI_JWT, '', { maxAge: -1,path: '/' }),serialize(config.cartCookie, '', { maxAge: -1,path: '/' })])
  // Only allow redirects to a relative URL
  res.status(200).json({ data: null })
}

export default logout
