export const currencyList = ['NZD', 'AUD', 'VND', 'USD']
export const currencyLocalMap = {
  default: {
    locale: 'en-US',
    name: 'International',
    host: process.env.HOST_EN || '',
  },
  NZD: {
    locale: 'en-NZ',
    name: 'New Zealand',
    host: process.env.HOST_NZ || '/en-NZ',
  },
}
export const getCurrentLocale = (currency: 'default' | 'NZD') =>
  currencyLocalMap[currency] || currencyLocalMap.default
