import { STRAPI_JWT } from '@framework/const'
import type { CustomerEndpoint } from '.'
const loginQuery = /* GraphQl */`query{
  me{
    id
    username
    email
  }
}`
const signup: CustomerEndpoint['handlers']['getLoggedInCustomer'] = async ({
  res,
  config,
  req,
}) => {
  const { cookies } = req
  const token = cookies[STRAPI_JWT]
  // TODO: Add proper validations with something like Ajv
  if (token) {
    const { data } = await config.fetch(
      loginQuery,
      undefined,
      {
        headers: {
          "authorization": `Bearer ${token}`,
        },
      }
    )
    const { me } = data

    if (!me) {
      return res.status(400).json({
        data: null,
        errors: [{ message: 'Customer not found', code: 'not_found' }],
      })
    }

    return res.status(200).json({ data: { customer:me } })
  }


  res.status(200).json({ data: null })
}

export default signup
