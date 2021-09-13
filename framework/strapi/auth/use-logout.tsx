import useLogout, { UseLogout } from '@commerce/auth/use-logout'
import { LogoutHook } from '@commerce/types/logout'
import type { MutationHook } from '@commerce/utils/types'
import { useCart } from 'framework/local/cart'
import { useCallback } from 'react'
import useCustomer from '../customer/use-customer'

export default useLogout as UseLogout<typeof handler>

export const handler: MutationHook<LogoutHook> = {
  fetchOptions: {
    url: '/api/logout',
    method: 'GET',
  },
  useHook:
    ({ fetch }) =>
    () => {
      const { mutate, } = useCustomer()
      const { mutate:mutateCart,revalidate } = useCart()
      return useCallback(
        async function logout() {
          const data = await fetch()
          await mutate(null, false)
          await revalidate()
          return data
        },
        [fetch, mutate]
      )
    },
}
