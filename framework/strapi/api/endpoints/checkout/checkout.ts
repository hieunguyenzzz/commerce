import { UsersPermissionsUser } from '@framework/schema'
import { nomalizeCart } from '@framework/utils/normalize'
import { Stripe } from 'stripe'
import type { CheckoutEndpoint } from '.'
import { NEXT_PUBLIC_HOST_URL, STRAPI_JWT, STRIPE_SECRET_KEY } from '../../../const'

const loginQuery = /* GraphQl */ `query{
  me{
    id
    username
    email
  }
}`
const getQuoteQuery = /* GraphQl */ `query getQuote($id: ID!) {
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
  users_permissions_user{
    id
    email
  }
  subtotalPrice
  totalPrice
}
}`
/* tslint:disable-next-line */
const stripe = new Stripe(STRIPE_SECRET_KEY || '', {} as Stripe.StripeConfig)

const checkout: CheckoutEndpoint['handlers']['checkout'] = async ({ req, res, config, ...rest }) => {
  // console.log('checkout')
  let result: { data?: any } = {}
  let email
  const { cookies } = req
  // debugParams({cookies})
  const token = cookies[STRAPI_JWT]
  const cartId = cookies[config.cartCookie]
  if (cartId) {
    try {
      result = await config.fetch(getQuoteQuery, {
        variables: {
          id: cartId,
        },
      })
    } catch (error) {
      console.error(error)
    }
  }
  let cart = nomalizeCart(result.data?.quote)
  let checkoutUrl
  let session
  // debugParams({token,cookies})
  if (token) {
    const result = await config.fetch(loginQuery, undefined, {
      headers: {
        authorization: `Bearer ${token}`,
      },
    })
    console.log({ result })
    email=result?.data?.me?.email
  }
  try {
    session = await stripe.checkout.sessions.create(
      {
        customer_email: cart.email||'guest@gmail.com',
        payment_method_types: ['card'],
        mode: 'payment',
        line_items: [
          ...cart.lineItems.map((lineItem) => ({
            quantity: lineItem.quantity,
            price_data: {
              currency: cart.currency.code,
              unit_amount: lineItem.variant.price,
              product_data: {
                name: lineItem.name,
                images: [lineItem.variant.image?.url + ''],
              },
            },
          })),
        ],
        cancel_url: NEXT_PUBLIC_HOST_URL + '/cart',
        success_url: NEXT_PUBLIC_HOST_URL + '/checkout/success',
        shipping_address_collection: { allowed_countries: ['VN', 'US'] },
      }
    )
    // console.log(session)

    // res.status(200).json({ data: { sessionId: session?.id } })
    checkoutUrl = session.url
  } catch (error) {
    console.error(error)
  }

  if (checkoutUrl) {
    res.redirect(checkoutUrl)
  } else {
    res.redirect('/cart')
  }
}

export default checkout
