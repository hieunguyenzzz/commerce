import { NEXT_PUBLIC_STRAPI_URL } from '@framework/const'
import { Global, Product as StrapiProduct } from 'framework/strapi/schema'
import type { Product, ProductVariant } from '../types/product'
import type {Cart } from '../types/cart'
export const nomalizeCart = (quote: any): Cart => {
  console.log(quote)

  const cart: any = {
    id: '' + quote?.id,
    customerId: '0',
    email: 'no.noo.nooo.yes@gmail.com',
    currency: { code: 'USD' },
    taxesIncluded: quote?.taxesIncluded || false,
    lineItems: [],
    lineItemsSubtotalPrice: 0,
    subtotalPrice: 0,
    totalPrice: 0,
  }
  cart.lineItems = (quote?.lineItems || []).map((quoteItem: any) => ({
    id: quoteItem?.id + '',
    variantId: quoteItem?.variantId + '',
    productId: quoteItem?.productId?.id + '',
    name: quoteItem?.productId?.title + '',
    quantity: quoteItem?.quantity || 1,
    variant: {
      id: quoteItem?.productId?.id + '',
      name: quoteItem?.productId?.title + '',
      image: {
        url: NEXT_PUBLIC_STRAPI_URL + quoteItem?.productId?.images?.[0]?.url + '',
      },
      requiresShipping: true,
      price: quoteItem?.productId?.price || 0,
      listPrice: quoteItem?.productId?.price || 0,
    },
    path: quoteItem?.productId?.slug + '',
    discounts: [],
  }))
  cart.totalPrice = cart.lineItems.reduce((result = 0, value: any) => {
    console.log(result, value.quantity * value.variant.price, result + value.quantity * value.variant.price)
    return result + Number(value.quantity * value.variant.price)
  }, 0)
  cart.subtotalPrice = cart.totalPrice
  cart.lineItemsSubtotalPrice = cart.totalPrice
  console.log({ cart })
  return cart
}


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
