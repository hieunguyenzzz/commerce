import { STRAPI_JWT } from '@framework/const'
import { serialize } from 'cookie'
import type { LogoutEndpoint } from '.'
import { getCartCookie } from '../cart/get-cart'

const logout: LogoutEndpoint['handlers']['logout'] = async ({ res, body: { redirectTo }, config }) => {
  // Remove the cookie
  res.setHeader('Set-Cookie', serialize(STRAPI_JWT, '', { maxAge: -1 }))


  // Only allow redirects to a relative URL
  res.status(200).json({ data: null })
}

export default logout
