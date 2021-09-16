import { useCustomer } from '@framework/customer'
import { useRouter } from 'next/dist/client/router'
import React, { useEffect } from 'react'

const AuthWrap: React.FC<{}> = ({ children }) => {
  const { data: customer } = useCustomer()
  const { replace } = useRouter()
  useEffect(() => {
    if (customer) {
      replace('/dashboard')
    }
  }, [customer, replace])
  return <>{children}</>
}
export default AuthWrap
