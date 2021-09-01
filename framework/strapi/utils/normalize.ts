import { Product as StrapiProduct } from 'framework/strapi/schema'
import type { Product } from '../types/product'
export function normalizeProduct({
    id,
    title,
    description,
    images,
  }: StrapiProduct): Product {
    return {
      id,
      name:String(title),
      description:String(description),
      images:images?images?.map(img=>({
          url:img?.url||'',
          alt:img?.alternativeText||''
      })):[],
      variants:[],
      price:{
        value:0,
        currencyCode:'USD'
      },
      options:[]
    }
}