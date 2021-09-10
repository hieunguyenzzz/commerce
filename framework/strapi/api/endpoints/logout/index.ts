import { createEndpoint, GetAPISchema } from '@commerce/api'
import logoutEndpoint from '@commerce/api/endpoints/logout'
import { LogoutSchema } from '@commerce/types/logout'
import { StrapiAPI } from '@framework/api'
import logout from './logout'

export type LogoutAPI = GetAPISchema<StrapiAPI, LogoutSchema>

export type LogoutEndpoint = LogoutAPI['endpoint']

export const handlers: LogoutEndpoint['handlers'] = { logout }

const logoutApi = createEndpoint<LogoutAPI>({
  handler: logoutEndpoint,
  handlers,
})

export default logoutApi
