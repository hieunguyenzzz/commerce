<<<<<<< HEAD
import { NEXT_PUBLIC_STRAPI_URL } from '@framework/const'
import { UpdateQuoteItemMutation } from '@framework/schema'
import { Cart } from '@framework/types/cart'
import { nomalizeCart } from '@framework/utils/normalize'
import type { CartEndpoint } from '.'

const updateQuoteItemMutation = /* GraphQl */`mutation updateQuoteItem($id: ID!, $quantity: Int) {
  updateQuoteItem(
    input: { where: { id: $id }, data: { quantity: $quantity } }
  ) {
    quoteItem {
      id
      quote {
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
        lineItems(limit: 10000) {
          id
          productId {
            id
            title
            description
            slug
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
        subtotalPrice
        totalPrice
      }
    }
  }
}`
const nomalize = (res:UpdateQuoteItemMutation): Cart =>{
  console.log(res)
  const quote =  res.updateQuoteItem?.quoteItem?.quote
  const cart:any =  {
    id:''+ quote?.id,
    customerId: '0',
    email: 'no.noo.nooo.yes@gmail.com',
    currency: { code: 'USD' },
    taxesIncluded: quote?.taxesIncluded||false,
    lineItems:[],
    lineItemsSubtotalPrice: 0,
    subtotalPrice: 0,
    totalPrice: 0,
  }
  cart.lineItems = (quote?.lineItems||[]).map(quoteItem=>({
    id: quoteItem?.id+'',
    variantId: quoteItem?.variantId+'',
    productId: quoteItem?.productId?.id+'',
    name: quoteItem?.productId?.title+'',
    quantity: quoteItem?.quantity||1,
    variant: {
      id:  quoteItem?.productId?.id+'',
      name: quoteItem?.productId?.title+'',
      image: {
        url: NEXT_PUBLIC_STRAPI_URL+ quoteItem?.productId?.images?.[0]?.url+'',
      },
      requiresShipping: true,
      price: quoteItem?.productId?.price||0,
      listPrice: quoteItem?.productId?.price||0,
    },
    path:  quoteItem?.productId?.slug+'',
    discounts: [],
  }))
  cart.totalPrice = cart.lineItems.reduce((result=0,value:any)=>{
    console.log( result,value.quantity*value.variant.price, result+value.quantity*value.variant.price)
    return result+Number(value.quantity*value.variant.price)
  },0)
  cart.subtotalPrice=cart.totalPrice
  cart.lineItemsSubtotalPrice=cart.totalPrice
  console.log({cart})
  return cart
}
const updateItem: CartEndpoint['handlers']['updateItem'] = async ({
  res,
  req,
  body: {  itemId, item },
  config,
}) => {
  let result: { data?: any } = {}
  const { cookies } = req
  const cartId = cookies[config.cartCookie]
=======
import type { CartEndpoint } from '.'

const updateItem: CartEndpoint['handlers']['updateItem'] = async ({
  res,
  body: { cartId, itemId, item },
  config,
}) => {
>>>>>>> 1f5c670e9483a0337d9868cd78aefdd8b4861edd
  if (!cartId || !itemId || !item) {
    return res.status(400).json({
      data: null,
      errors: [{ message: 'Invalid request' }],
    })
  }
<<<<<<< HEAD
  if (cartId) {
    try {
      console.log({item,itemId})
      result = await config.fetch(
        updateQuoteItemMutation,{
          variables:{
            id:itemId,
            quantity:item.quantity
          }
        }
      )
    } catch (error) {
      console.error(error)
    }
  }
  res.status(200).json({ data:nomalizeCart(result.data?.updateQuoteItem?.quoteItem?.quote) })
=======

  // const { data } = await config.storeApiFetch(
  //   `/v3/carts/${cartId}/items/${itemId}?include=line_items.physical_items.options`,
  //   {
  //     method: 'PUT',
  //     body: JSON.stringify({
  //       line_item: parseCartItem(item),
  //     }),
  //   }
  // )

  // // Update the cart cookie
  // res.setHeader(
  //   'Set-Cookie',
  //   getCartCookie(config.cartCookie, cartId, config.cartCookieMaxAge)
  // )
  // res.status(200).json({ data: normalizeCart(data) })
>>>>>>> 1f5c670e9483a0337d9868cd78aefdd8b4861edd
}

export default updateItem
