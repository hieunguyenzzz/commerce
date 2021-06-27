import { convert } from 'lib/currency'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

export const currencyList = ['NZD', 'AUD', 'VND', 'USD']
export const currencyLocalMap = {
  default: {
    locale: 'en-US',
    host: process.env.HOST || '',
  },
  NZD: {
    locale: 'en-NZ',
    host: process.env.HOST_NZ || '/en-NZ',
  },
}
export const useCurrency = (baseCurrency = 'USD') => {
  const {
    query,
    isReady,
    replace,
    pathname,
    asPath,
    push,
    locale,
  } = useRouter()
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
    setCurrency: (item: "NZD"|"default") => {
      const selectLocale = currencyLocalMap[item] || currencyLocalMap.default
      if (locale !== selectLocale.locale) {
        if (window.confirm('wanaa change')) {
          console.log({ selectLocale })
          return push(asPath, asPath, {
            locale: selectLocale.locale,
          })
        }
      }

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
