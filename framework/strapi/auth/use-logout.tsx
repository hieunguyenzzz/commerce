import useLogout, { UseLogout } from '@commerce/auth/use-logout'
import { LogoutHook } from '@commerce/types/logout'
import type { MutationHook } from '@commerce/utils/types'
import { CART_COOKIE, STRAPI_JWT } from '@framework/const'
import Cookies from 'js-cookie'
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
      const { mutate } = useCustomer()
      return useCallback(
        async function logout() {
          // const data = await fetch()
          Cookies.remove(STRAPI_JWT)
          Cookies.remove(CART_COOKIE)
          window.location.reload()
          return null
        },
        [fetch, mutate]
      )
    },
}
