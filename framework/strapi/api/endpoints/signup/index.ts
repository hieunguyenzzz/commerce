import { GetAPISchema, createEndpoint } from '@commerce/api'
import signupEndpoint from '@commerce/api/endpoints/signup'
import { SignupSchema } from '@commerce/types/signup'
import type {  StrapiAPI } from '../..'
import signup from './signup'

export type SignupAPI = GetAPISchema<StrapiAPI, SignupSchema>

export type SignupEndpoint = SignupAPI['endpoint']

export const handlers: SignupEndpoint['handlers'] = { signup }

const singupApi = createEndpoint<SignupAPI>({
  handler: signupEndpoint,
  handlers,
})

export default singupApi
