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
			unit_amount:160,
			product_data:{
				name:'T-Shirt',
				images:["https://cdn11.bigcommerce.com/s-qfzerv205w/products/117/images/534/Men-TShirt-Black-Front__70046.1603748348.220.290.png?c=1"]
			}
		  }
        },
		{
			quantity:1,
          	price_data:{
			currency: 'USD',
			unit_amount:249,
			product_data:{
				name:'Lightweight Jacket',
				images:["https://cdn11.bigcommerce.com/s-qfzerv205w/products/116/images/512/Men-Jacket-Front-Black__15466.1603283963.220.290.png?c=1"]
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
