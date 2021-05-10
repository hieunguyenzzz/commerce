import { convert } from 'lib/currency'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
export const useCurrency = (baseCurrency = 'USD') => {
  const { query, isReady, replace, pathname } = useRouter()
  const currency =
    query.currency ||
    (isReady && localStorage.getItem('currency')) ||
    baseCurrency

  useEffect(() => {
    isReady && localStorage.setItem('currency', currency as string)
  }, [currency, isReady])

  return {
    currency,
    convert: (amount: number) => {
      return convert(amount, baseCurrency as any, currency as any)
    },
    setCurrency: (item: any) => {
      return replace({
        pathname: pathname,
        query: {
          ...query,
          currency: item,
        },
      })
    },
  }
}
