import { CookieSerializeOptions, serialize } from "cookie"

export function getCartCookie(name: string, cartId?: string, maxAge?: number) {
    const options: CookieSerializeOptions =
      cartId && maxAge
        ? {
            maxAge,
            expires: new Date(Date.now() + maxAge * 1000),
            secure: process.env.NODE_ENV === 'production',
            path: '/',
            sameSite: 'lax',
          }
        : { maxAge: -1, path: '/' } // Removes the cookie
  
    return serialize(name, cartId || '', options)
  }

  export function getAuthCookie(name: string, token?: string) {
    const options: CookieSerializeOptions =
    token 
        ? {
            secure: process.env.NODE_ENV === 'production',
            path: '/',
            sameSite: 'lax',
          }
        : { maxAge: -1, path: '/' } // Removes the cookie
  
    return serialize(name, token || '', options)
  }