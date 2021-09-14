import { STRAPI_JWT } from '@framework/const'
import { customerQuery, loginQuery } from '@framework/utils/queries'
import type { CustomerEndpoint } from '.'

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
    const userID = result?.data?.me?.id
    if (!userID) {
      return res.status(400).json({
        data: null,
        errors: [{ message: 'Customer not found', code: 'not_found' }],
      })
    }
    const customerQueryData = await config.fetch(
      customerQuery,
      {
        variables: {
          id: userID,
        },
      },
      {
        headers: {
          authorization: `Bearer ${token}`,
        },
      }
    )
    return res.status(200).json({ data: {
      customer:customerQueryData?.data?.user
    } })
  }
  res.status(200).json({ data: null })
}

export default getLoggedInCustomer
