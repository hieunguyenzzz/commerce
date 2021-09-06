import useCart, { UseCart } from '@commerce/cart/use-cart'
import { SWRHook } from '@commerce/utils/types'
import { useMemo } from 'react'
export default useCart as UseCart<typeof handler>

export const handler: SWRHook<any> = {
  fetchOptions: {
    query: '',
  },
  async fetcher({ input: { cartId: checkoutId }, options, fetch }) {
    let checkout
    if (checkoutId) {
      const data = await fetch({
        ...options,
        variables: {
          checkoutId: checkoutId,
        },
      })
      checkout = data.node
    }

    if (checkout?.completedAt || !checkoutId) {
      // checkout = await checkoutCreate(fetch)
    }

    return {
      id: '5245ba32-61c5-468d-80b0-d8a42b8cfe33',
      customerId: '0',
      email: '',
      createdAt: '2021-09-02T02:09:56+00:00',
      currency: { code: 'USD' },
      taxesIncluded: false,
      lineItems: [
        {
          id: '2eec3139-85cc-4029-8c15-5d8dbfb058dd',
          variantId: '383',
          productId: '117',
          name: 'T-Shirt',
          quantity: 1,
          variant: {
            id: '383',
            sku: '5F6D80F2EB67C_11047-BL-M',
            name: 'T-Shirt',
            image: {
              url: 'https://cdn11.bigcommerce.com/s-qfzerv205w/products/117/images/534/Men-TShirt-Black-Front__70046.1603748348.220.290.png?c=1',
            },
            requiresShipping: true,
            price: 160.12,
            listPrice: 160.12,
          },
          path: 'jacket',
          discounts: [],
        },
        {
          id: 'ecea284e-8205-41ed-8350-c4d5626b211c',
          variantId: '395',
          productId: '116',
          name: 'Lightweight Jacket',
          quantity: 1,
          variant: {
            id: '395',
            sku: '5F6D80A544056_9908-BL-SM',
            name: 'Lightweight Jacket',
            image: {
              url: 'https://cdn11.bigcommerce.com/s-qfzerv205w/products/116/images/512/Men-Jacket-Front-Black__15466.1603283963.220.290.png?c=1',
            },
            requiresShipping: true,
            price: 249.99,
            listPrice: 249.99,
          },
          path: 'lightweight-jacket',
          discounts: [],
        },
      ],
      lineItemsSubtotalPrice: 410.11,
      subtotalPrice: 410.11,
      totalPrice: 410.11,
    }
  },
  useHook:
    ({ useData }) =>
    (input) => {
      const response = useData({
        swrOptions: { revalidateOnFocus: false, ...input?.swrOptions },
      })
      console.log({ response })
      return useMemo(
        () =>
          Object.create(response, {
            isEmpty: {
              get() {
                return (response.data?.lineItems.length ?? 0) <= 0
              },
              enumerable: true,
            },
          }),
        [response]
      )
    },
}
