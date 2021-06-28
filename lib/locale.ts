import getConfig from 'next/config'

export const currencyList = ['NZD', 'AUD', 'VND', 'USD']
const {
  publicRuntimeConfig: { sites },
} = getConfig()
export const currencyLocalMap = {
  default: sites.international,
  NZD: sites.nz,
  AUD: sites.nz,
}
export type CurrencyCodeType = 'default' | 'NZD' | 'AUD'
export const getCurrentLocale = (currency: CurrencyCodeType) =>
  currencyLocalMap[currency] || currencyLocalMap.default
