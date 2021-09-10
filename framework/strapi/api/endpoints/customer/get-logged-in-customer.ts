import { STRAPI_JWT } from '@framework/const'
import { debugParams } from '@lib/debug'
import type { CustomerEndpoint } from '.'
const loginQuery = /* GraphQl */ `query{
  me{
    id
    username
    email
  }
}`
const getLoggedInCustomer: CustomerEndpoint['handlers']['getLoggedInCustomer'] = async ({ res, config, req }) => {
  const { cookies } = req
  const token = cookies[STRAPI_JWT]
  // TODO: Add proper validations with something like Ajv
  console.log({ token })
  if (token) {
    const result = await config.fetch(loginQuery, undefined, {
      headers: {
        authorization: `Bearer ${token}`,
      },
    })
    console.log({ result })
    const customer = result?.data?.me
    if (!customer) {
      return res.status(400).json({
        data: null,
        errors: [{ message: 'Customer not found', code: 'not_found' }],
      })
    }
    return res.status(200).json({ data: { customer } })
  }
  res.status(200).json({ data: null })
}

export default getLoggedInCustomer
