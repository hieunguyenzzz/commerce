import { nomalizeCart } from '@framework/utils/normalize'
import type { CartEndpoint } from '.'

const deleteQuoteItemMutation = /* GraphQl */ `mutation deleteQuoteItem($id: ID!) {
  deleteQuoteItem(input: { where: { id: $id } }) {
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

const removeItem: CartEndpoint['handlers']['removeItem'] = async ({ res, req, body: { itemId }, config }) => {
  let result: { data?: any } = {}
  const { cookies } = req
  const cartId = cookies[config.cartCookie]
  if (!cartId || !itemId) {
    return res.status(400).json({
      data: null,
      errors: [{ message: 'Invalid request' }],
    })
  }
  if (cartId) {
    try {
      result = await config.fetch(deleteQuoteItemMutation, {
        variables: {
          id: itemId,
        },
      })
    } catch (error) {
      console.error(error)
    }
  }
  res.status(200).json({ data: nomalizeCart(result.data?.deleteQuoteItem?.quoteItem?.quote) })
}

export default removeItem
