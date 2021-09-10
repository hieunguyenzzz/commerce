import { STRAPI_JWT } from '@framework/const'
import { serialize } from 'cookie'
import type { LoginEndpoint } from '.'

const invalidCredentials = /invalid credentials/i
const loginMutation = /* GraphQl */ `mutation loginMutation ($email:String! $password:String!) {
  login(input:{
    identifier:$email,
    password:$password
 }){
   jwt
   user{
     email
     username
   }
 }
}`
const login: LoginEndpoint['handlers']['login'] = async ({ res, body: { email, password }, config, commerce }) => {
  // TODO: Add proper validations with something like Ajv
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
  } catch (error) {
    // throw new Error("Email is already taken.")
    return res.status(400).json({
      data: null,
      errors: [{ message: 'Cannot find an account that matches the provided credentials' }],
    })
  }
  res.setHeader('Set-Cookie', serialize(STRAPI_JWT, result.data.login.jwt || '', {}))
  return res.status(200).json({
    data: result?.data?.login,
  })
}

export default login
