import { STRAPI_JWT } from '@framework/const'
import { serialize } from 'cookie'
import type { SignupEndpoint } from '.'
const signupMutation = /* GraphQl */ `mutation signupMutation ($email:String! $username:String! $password:String! ) {
    register(input:{
      email: $email,
      username:$username,
      password:$password
    }){
      jwt
      user{
        email
        username
      }
    }
  }`

const signup: SignupEndpoint['handlers']['signup'] = async ({
  res,
  body: { firstName, lastName, email, password },
  config,
  commerce,
}) => {
  // TODO: Add proper validations with something like Ajv
  if (!(firstName && lastName && email && password)) {
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
    result = await config.fetch(signupMutation, {
      variables: {
        email,
        username: email,
        password,
      },
    })
  } catch (error) {
    // throw new Error("Email is already taken.")
    return res.status(400).json({
      data: null,
      errors: [{ message: 'Email is already taken.' }],
    })
  }
  res.setHeader('Set-Cookie', serialize(STRAPI_JWT, result.data.register.jwt || '', {}))
  return res.status(200).json({
    data: result?.data?.register,
  })
}

export default signup
