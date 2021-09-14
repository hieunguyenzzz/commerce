import { UsersPermissionsUser } from '@framework/schema'
import { nomalizeCart } from '@framework/utils/normalize'
import { getQuoteQuery, loginQuery } from '@framework/utils/queries'
import { Stripe } from 'stripe'
import type { CheckoutEndpoint } from '.'
import { CART_COOKIE, NEXT_PUBLIC_HOST_URL, STRAPI_JWT, STRIPE_SECRET_KEY } from '../../../const'

/* tslint:disable-next-line */
const stripe = new Stripe(STRIPE_SECRET_KEY || '', {} as Stripe.StripeConfig)

const checkout: CheckoutEndpoint['handlers']['checkout'] = async ({ req, res, config, ...rest }) => {
  // console.log('checkout')
  let result: { data?: any } = {}
  let email
  let userId
  const { cookies,query } = req
  console.log({cookies,query})
  const token = cookies[STRAPI_JWT]
  const cartId =query?.cartId|| cookies[CART_COOKIE]
  if (token) {
    const result = await config.fetch(loginQuery, undefined, {
      headers: {
        authorization: `Bearer ${token}`,
      },
    })
    email=result?.data?.me?.email
    userId=result?.data?.me?.id
  }
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
  let cart = nomalizeCart(result.data?.quotes?.[0])
  let checkoutUrl
  let session
  // debugParams({token,cookies})

  console.log({cookies,result,cart,cartId})
  try {
    session = await stripe.checkout.sessions.create(
      {
        customer_email: email||cart.email||'guest@gmail.com',
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
        cancel_url: NEXT_PUBLIC_HOST_URL + '/cart?cartId='+cartId,
        success_url: NEXT_PUBLIC_HOST_URL + '/checkout/success?cartId='+cartId,
        shipping_address_collection: { allowed_countries: ['VN', 'US'] },
      }
    )
    console.log({session})

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
