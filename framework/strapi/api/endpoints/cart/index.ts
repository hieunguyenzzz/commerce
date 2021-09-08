import { createEndpoint, GetAPISchema } from '@commerce/api'
import cartEndpoint from '@commerce/api/endpoints/cart'
import { StrapiAPI } from '@framework/api'
import type { CartSchema } from '../../../types/cart'
import addItem from './add-item'
import getCart from './get-cart'
import removeItem from './remove-item'
import updateItem from './update-item'

export type CartAPI = GetAPISchema<StrapiAPI, CartSchema>

export type CartEndpoint = CartAPI['endpoint']

export const handlers: CartEndpoint['handlers'] = {
  getCart,
  addItem,
  updateItem,
  removeItem,
}

const cartApi = createEndpoint<CartAPI>({
  handler: cartEndpoint,
  handlers,
})

export default cartApi
