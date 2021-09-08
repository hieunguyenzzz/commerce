import { nomalizeCart } from '@framework/utils/normalize'
import type { CartEndpoint } from '.'
const createQuoteItemMutation = /* GraphQl */`mutation createQuoteItem($productId : ID! $id :ID) {
  createQuoteItem(input: { data: { quantity: 1, productId: $productId, quote:  $id  } }) {
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
      lineItems {
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

const addItem: CartEndpoint['handlers']['addItem'] = async ({
  res,
  req,
  body: { item },
  config,
}) => {
  console.log({item})
  if (!item) {
    return res.status(400).json({
      data: null,
      errors: [{ message: 'Missing item' }],
    })
  }
  if (!item.quantity) item.quantity = 1
  
  let result: { data?: any } = {}
  const { cookies } = req
  const cartId = cookies[config.cartCookie]
  if (cartId) {
    try {
      result = await config.fetch(
        createQuoteItemMutation,{
          variables:{
            id:cartId,
            productId:item.productId
          }
        }
      )
    } catch (error) {
      console.error(error)
    }
  }
  res.status(200).json({ data:nomalizeCart(result?.data?.createQuoteItem?.quoteItem?.quote) })
}

export default addItem
