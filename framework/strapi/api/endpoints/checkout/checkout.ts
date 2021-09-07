import { Stripe } from 'stripe'
import type { CheckoutEndpoint } from '.'
import { STRIPE_SECRET_KEY } from '../../../const'
const stripe = new Stripe(STRIPE_SECRET_KEY)

const checkout: CheckoutEndpoint['handlers']['checkout'] = async ({
  req,
  res,
  config,
}) => {
  console.log('checkout')
  const { body } = req
  let checkoutUrl
  let session
  try {
    session = await stripe.checkout.sessions.create({
      customer_email: 'no.noo.nooo.yes@gmail.com',
      payment_method_types: ['card'],
      mode: 'payment',
      line_items: [
        {
			quantity:1,
          price_data:{
			currency: 'USD',
			unit_amount:200,
			product_data:{
				name:'Lua',
				description:'description'
			}
		  }
        },
      ],
      cancel_url: 'http://localhost:3000/cart',
      success_url: 'http://localhost:3000/checkout/success',
      shipping_address_collection: { allowed_countries: ['VN', 'US'] },
    })
    console.log(session)

    // res.status(200).json({ data: { sessionId: session?.id } })
	checkoutUrl=session.url
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
