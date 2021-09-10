import { GetAPISchema, createEndpoint } from '@commerce/api'
import customerEndpoint from '@commerce/api/endpoints/customer'
import { CustomerSchema } from '@commerce/types/customer'
import { StrapiAPI } from '@framework/api'
import getLoggedInCustomer from './get-logged-in-customer'

export type CustomerAPI = GetAPISchema<StrapiAPI, CustomerSchema>

export type CustomerEndpoint = CustomerAPI['endpoint']

export const handlers: CustomerEndpoint['handlers'] = { getLoggedInCustomer }

const customerApi = createEndpoint<CustomerAPI>({
  handler: customerEndpoint,
  handlers,
})

export default customerApi
