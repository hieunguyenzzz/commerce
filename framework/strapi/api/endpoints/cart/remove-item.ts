<<<<<<< HEAD
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
=======
import type { CartEndpoint } from '.'

const removeItem: CartEndpoint['handlers']['removeItem'] = async ({
  res,
  body: { cartId, itemId },
  config,
}) => {
>>>>>>> 1f5c670e9483a0337d9868cd78aefdd8b4861edd
  if (!cartId || !itemId) {
    return res.status(400).json({
      data: null,
      errors: [{ message: 'Invalid request' }],
    })
  }
<<<<<<< HEAD
  if (cartId) {
    try {
      console.log({ itemId })
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
=======

  // const result = await config.storeApiFetch<{ data: any } | null>(
  //   `/v3/carts/${cartId}/items/${itemId}?include=line_items.physical_items.options`,
  //   { method: 'DELETE' }
  // )
  // const data = result?.data ?? null

  // res.setHeader(
  //   'Set-Cookie',
  //   data
  //     ? // Update the cart cookie
  //       getCartCookie(config.cartCookie, cartId, config.cartCookieMaxAge)
  //     : // Remove the cart cookie if the cart was removed (empty items)
  //       getCartCookie(config.cartCookie)
  // )
  // res.status(200).json({ data: data && normalizeCart(data) })
>>>>>>> 1f5c670e9483a0337d9868cd78aefdd8b4861edd
}

export default removeItem
