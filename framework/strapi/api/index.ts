import type { CommerceAPI, CommerceAPIConfig } from '@commerce/api'
import { getCommerceApi as commerceApi } from '@commerce/api'
import { STRAPI_URL } from '@framework/const'
import getAllPages from './operations/get-all-pages'
import getAllProductPaths from './operations/get-all-product-paths'
import getAllProducts from './operations/get-all-products'
import getCustomerWishlist from './operations/get-customer-wishlist'
import getPage from './operations/get-page'
import getProduct from './operations/get-product'
import getSiteInfo from './operations/get-site-info'
import createFetcher from './utils/fetch-local'


export interface StrapiConfig extends CommerceAPIConfig {}
const config: StrapiConfig = {
  commerceUrl: STRAPI_URL,
  apiToken: '',
  cartCookie: '',
  customerCookie: '',
  cartCookieMaxAge: 2592000,
  fetch: createFetcher(() => getCommerceApi().getConfig()),
}

const operations = {
  getAllPages,
  getPage,
  getSiteInfo,
  getCustomerWishlist,
  getAllProductPaths,
  getAllProducts,
  getProduct,
}

export const provider = { config, operations }

export type Provider = typeof provider

export type StrapiAPI<P extends Provider = Provider> = CommerceAPI<P | any>

export function getCommerceApi<P extends Provider>(
  customProvider: P = provider as any
): StrapiAPI<P> {
  return commerceApi(customProvider as any)
}
