import { STRAPI_JWT } from '@framework/const'
import { nomalizeCart } from '@framework/utils/normalize'
import { debugParams } from '@lib/debug'
import { CookieSerializeOptions, serialize } from 'cookie'
import type { CartEndpoint } from '.'
const loginQuery = /* GraphQl */ `query{
  me{
    id
    username
    email
  }
}`
const customerQuery = /* GraphQl */ `query($id:ID!){
  user(id:$id){
    id
    username
    email
    first_name
    last_name
    quotes(limit:1) {
    	id
    }
    
  }
}`
const createQuoteMutation = /* GraphQl */ `mutation createQuote ($userId: ID) {
  createQuote(input:{data:{users_permissions_user:$userId}}){
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
const getQuoteQuery = /* GraphQl */ `query getQuote($id: ID!, $userId: ID) {
  quotes(where: { id: $id, users_permissions_user: $userId }) {
    id
    customer {
      last_name
      first_name
    }
    email
    customer {
      id
      first_name
      last_name
    }
    active
    taxesIncluded
    lineItemsSubtotalPrice
    lineItems {
      id
      productId {
        id
        title
        description
        price
        images {
          url
          width
          height
        }
      }
      quantity
      name
      variantId
      path
      variant {
        id
        sku
        name
        image {
          url
          width
          height
        }
      }
    }
    users_permissions_user {
      id
      email
    }
    subtotalPrice
    totalPrice
  }
}`

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

// Return current cart info
const getCart: CartEndpoint['handlers']['getCart'] = async ({ res, req, config }) => {
  let result: { data?: any } = {}
  let cart 
  const { cookies } = req
  debugParams({cookies})
  let userId
  let cartId = cookies[config.cartCookie]
  const token = cookies[STRAPI_JWT]
  if (token) {
    try {
      const result = await config.fetch(loginQuery, undefined, {
        headers: {
          authorization: `Bearer ${token}`,
        },
      })
      debugParams({ result })
      userId = result?.data?.me.id
      const customerQueryData = await config.fetch(
        customerQuery,
        {
          variables: {
            id: userId,
          },
        },
        {
          headers: {
            authorization: `Bearer ${token}`,
          },
        }
      )
      cartId = customerQueryData?.data?.user?.quotes?.[0].id
    } catch (error) {
      console.error({ result })
    }
  }
  if (cartId) {
    try {
      result = await config.fetch(getQuoteQuery, {
        variables: {
          id: cartId,
          userId
        },
      })
    } catch (error) {
      console.error(error)
    }
  }
  debugParams({cartId,result})
  if (!cartId || !result.data?.quotes?.[0]) {
    try {
      let result = await config.fetch(createQuoteMutation,{
        variables:{
          userId:userId
        }
      })
      if (result.data.createQuote?.quote?.id) {
        res.setHeader(
          'Set-Cookie',
          getCartCookie(config.cartCookie, result.data.createQuote?.quote?.id, config.cartCookieMaxAge)
        )
      }
    } catch (error) {
      console.error(error)
    }
  }else{
    res.setHeader(
      'Set-Cookie',
      getCartCookie(config.cartCookie, cartId, config.cartCookieMaxAge)
    )
  }

  res.status(200).json({
    data: nomalizeCart(result.data?.quotes?.[0]),
  })
}

export default getCart
