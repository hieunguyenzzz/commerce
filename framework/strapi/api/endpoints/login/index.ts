import { GetAPISchema, createEndpoint } from '@commerce/api'
import loginEndpoint from '@commerce/api/endpoints/login'
import type {  StrapiAPI } from '../..'
import login from './login'

export type LoginAPI = GetAPISchema<StrapiAPI, any>

export type LoginEndpoint = LoginAPI['endpoint']

export const handlers: LoginEndpoint['handlers'] = { login }

const loginApi = createEndpoint<LoginAPI>({
  handler: loginEndpoint,
  handlers,
})

export default loginApi
