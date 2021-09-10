
import useCart, { UseCart } from '@commerce/cart/use-cart'
import type { GetCartHook } from '@commerce/types/cart'
import { HookFetcherFn, SWRHook } from '@commerce/utils/types'
import { useMemo } from 'react'

export default useCart as UseCart<typeof handler>
export const fetcher: HookFetcherFn<GetCartHook> = async ({
  options,
  input: { cartId },
  fetch,
}) => {
  // console.log({options})
  return await fetch(options)
}

export const handler: SWRHook<GetCartHook> = {
  fetchOptions: {
    url: '/api/cart',
    method: 'GET',
  },
  fetcher,
  useHook: ({ useData }) => (input) => {
    const response = useData({
      swrOptions: { revalidateOnFocus: false, ...input?.swrOptions },
    })
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
