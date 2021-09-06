import { NEXT_PUBLIC_STRAPI_URL } from '@framework/const'
import { Global, Product as StrapiProduct } from 'framework/strapi/schema'
import type { Product, ProductVariant } from '../types/product'



export function normalizeProduct(
  { id, title, description, images, price, slug ,variants}: StrapiProduct,
  global?: Global
): Product {
  const product ={
    id,
    name: String(title),
    description: String(description),
    images: images
      ? images?.map((img) => ({
          url: NEXT_PUBLIC_STRAPI_URL + img?.url,
          alt: img?.alternativeText || '',
        }))
      : [],
    variants: [],
    slug: String(slug),
    price: {
      value: Number(price),
      currencyCode: String(global?.Currency),
    },
    options: [],
  } as Product
  product.options=variants?.option?.map(option=>{
    return {
      id:product.id+'_'+option?.label,
      displayName:option?.label,
      values:option?.variant?.map(v=>({
        label:v?.title,
        url:v?.swatch_image
      }))||[]
    }
  })||[] as any
  if(product.options.length){
    product.variants = product.options.flatMap(o=>{
      return o.values.map(({label})=>({
        id:o.id+'_'+label,
        options:product.options
      }))
    }) as ProductVariant[]
  }else{
    product.variants = [
      {
        id:product.id,
        options:[]
      }
    ]
  }
  
  return product
}
