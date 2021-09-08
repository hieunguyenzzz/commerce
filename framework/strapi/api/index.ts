import type { CommerceAPI, CommerceAPIConfig } from '@commerce/api'
import { getCommerceApi as commerceApi } from '@commerce/api'
import { STRAPI_URL } from '@framework/const'
import type { RequestInit } from '@vercel/fetch'
import getAllPages from './operations/get-all-pages'
import getAllProductPaths from './operations/get-all-product-paths'
import getAllProducts from './operations/get-all-products'
import getCustomerWishlist from './operations/get-customer-wishlist'
import getPage from './operations/get-page'
import getProduct from './operations/get-product'
import getSiteInfo from './operations/get-site-info'
import createFetcher from './utils/fetch-local'
import createFetcherStore from './utils/fetch-store-api'


if (!STRAPI_URL) {
  throw new Error(
    `The environment variable STRAPI_URL is missing and it's required to access your store`
  )
}


export interface StrapiConfig extends CommerceAPIConfig {
  fetchStore<T>(endpoint: string, options?: RequestInit): Promise<T>
}
const config: StrapiConfig = {
  commerceUrl: STRAPI_URL,
  apiToken: '',
  cartCookie: 'cartCookie',
  customerCookie: '',
  cartCookieMaxAge: 2592000,
  fetch: createFetcher(() => getCommerceApi().getConfig()),
  fetchStore: createFetcherStore(() => getCommerceApi().getConfig()),
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
