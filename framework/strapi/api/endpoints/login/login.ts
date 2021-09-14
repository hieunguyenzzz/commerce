import { STRAPI_JWT } from '@framework/const'
import { getAuthCookie } from '@framework/utils'
import { serialize } from 'cookie'
import type { LoginEndpoint } from '.'

const loginMutation = /* GraphQl */ `mutation loginMutation ($email:String! $password:String!) {
  login(input:{
    identifier:$email,
    password:$password
 }){
   jwt
   user{
     id
     email
     username
   }
 }
}`

const updateQuoteMutation = /* GraphQl */ `mutation updateQuoteMutation ($id:ID!, $userId: ID) {
  updateQuote(input:{where:{id:$id},data:{users_permissions_user:$userId,}}){
    quote{
      id
  customer{
    last_name
    first_name
  }
  email
  customer{
    id
    first_name
    last_name
  }
  active
  taxesIncluded
  lineItemsSubtotalPrice
  lineItems{
    id
    productId{
      id
      title
      description
      price
      slug
      images{
          url
          width
          height
        }
    }
    quantity
    name
    variantId
    path
    variant{
      id
      sku
      name
      image{
        url
        width
        height
      }
    }
  }
  subtotalPrice
  totalPrice
    }
  }
}
`
const login: LoginEndpoint['handlers']['login'] = async ({ res,req, body: { email, password }, config, commerce }) => {
  const { cookies } = req
  let cartId = cookies[config.cartCookie]
  if (!(email && password)) {
    return res.status(400).json({
      data: null,
      errors: [{ message: 'Invalid request' }],
    })
  }
  // TODO: validate the password and email
  // Passwords must be at least 7 characters and contain both alphabetic
  // and numeric characters.

  let result
  try {
    result = await config.fetch(loginMutation, {
      variables: {
        email,
        password,
      },
    })
    if(cartId){
      await config.fetch(updateQuoteMutation, {
        variables: {
          id:cartId,
          userId:result?.data?.login?.user.id,
        },
      })
    }
  } catch (error) {
    // throw new Error("Email is already taken.")
    console.error(error)
    return res.status(400).json({
      data: null,
      errors: [{ message: 'Cannot find an account that matches the provided credentials' }],
    })
  }
  res.setHeader('Set-Cookie',getAuthCookie(STRAPI_JWT, result.data.login.jwt || '') )
  return res.status(200).json({
    data: result?.data?.login,
  })
}

export default login
