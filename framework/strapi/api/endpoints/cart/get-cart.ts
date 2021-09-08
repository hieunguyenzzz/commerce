
import { nomalizeCart } from '@framework/utils/normalize'
import { CookieSerializeOptions, serialize } from 'cookie'
import type { CartEndpoint } from '.'
const createQuoteMutation = /* GraphQl */`mutation createQuote {
  createQuote{
    quote{
      id
  customer{
    last_name
    first_name
  }
  email
  customer{
    id
    first_name
    last_name
  }
  active
  taxesIncluded
  lineItemsSubtotalPrice
  lineItems{
    id
    productId{
      id
      title
      description
      price
      slug
      images{
          url
          width
          height
        }
    }
    quantity
    name
    variantId
    path
    variant{
      id
      sku
      name
      image{
        url
        width
        height
      }
    }
  }
  subtotalPrice
  totalPrice
    }
  }
}`
const getQuoteQuery = /* GraphQl */`query getQuote($id: ID!) {
  quote(id: $id){
  id
  customer{
    last_name
    first_name
  }
  email
  customer{
    id
    first_name
    last_name
  }
  active
  taxesIncluded
  lineItemsSubtotalPrice
  lineItems{
    id
    productId{
      id
      title
      slug
      description
      price
      images{
        url
        width
        height
      }
    }
    quantity
    name
    variantId
    path
    variant{
      id
      sku
      name
      image{
        url
        width
        height
      }
    }
  }
  subtotalPrice
  totalPrice
}
}`



export function getCartCookie(
  name: string,
  cartId?: string,
  maxAge?: number
) {
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

// Return current cart info
const getCart: CartEndpoint['handlers']['getCart'] = async ({
  res,
  req,
  config,
}) => {
  let result: { data?: any } = {}
  const { cookies } = req
  const cartId = cookies[config.cartCookie]
  if (cartId) {
    try {
      result = await config.fetch(
        getQuoteQuery,{
          variables:{
            id:cartId
          }
        }
      )
    } catch (error) {
      console.error(error)
    }
  }
  
  if(!cartId||!result.data?.quote?.id){
    try {
      let result = await config.fetch(
        createQuoteMutation,
      )
      if (result.data.createQuote?.quote?.id) {
        res.setHeader(
          'Set-Cookie',
          getCartCookie(config.cartCookie, result.data.createQuote?.quote?.id, config.cartCookieMaxAge)
        )
      }
    } catch (error) {
      console.error(error)
    }
  }
  res.status(200).json({
    data:nomalizeCart(result.data?.quote )
  })
}

export default getCart
