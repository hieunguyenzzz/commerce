import { createEndpoint, GetAPISchema } from '@commerce/api'
import checkoutEndpoint from '@commerce/api/endpoints/checkout'
import type { StrapiAPI } from '../..'
import checkout from './checkout'

export type CheckoutAPI = GetAPISchema<StrapiAPI, any>

export type CheckoutEndpoint = CheckoutAPI['endpoint']

export const handlers: CheckoutEndpoint['handlers'] = { checkout }

const checkoutApi = createEndpoint<CheckoutAPI>({
  handler: checkoutEndpoint,
  handlers,
})

export default checkoutApi
