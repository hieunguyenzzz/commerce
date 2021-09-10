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

const updateItem: CartEndpoint['handlers']['updateItem'] = async ({
  res,
  req,
  body: {  itemId, item },
  config,
}) => {
  let result: { data?: any } = {}
  const { cookies } = req
  const cartId = cookies[config.cartCookie]
  if (!cartId || !itemId || !item) {
    return res.status(400).json({
      data: null,
      errors: [{ message: 'Invalid request' }],
    })
  }
  if (cartId) {
    try {
      // console.log({item,itemId})
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
}

export default updateItem
