import { NEXT_PUBLIC_STRAPI_URL } from '@framework/const'
import { Global, Product as StrapiProduct } from 'framework/strapi/schema'
import type { Product } from '../types/product'
export function normalizeProduct(
  { id, title, description, images, price, slug }: StrapiProduct,
  global?: Global
): Product {
  return {
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
  }
}
