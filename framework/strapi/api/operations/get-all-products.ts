import type { OperationContext } from '@commerce/api/operations'
import { GetAllProductsOperation } from '@commerce/types/product'
import { Product as StrapiProduct } from 'framework/strapi/schema'
import type { StrapiConfig } from '../index'

const getAllProductsQuery = /* GraphQL */ `
  query getAllProducts($first: Int = 0 $start: Int=0){
    products(start:$start limit:$first){ 
      id
      title
      description
      images{
        width
        height
        url
        previewUrl
        formats
        alternativeText
        caption
      }
    }
  }

`

export function normalizeProduct({
  id,
  title: name,
  description,
  images,
}: StrapiProduct): Product {
  return {
    id,
    name,
    description,
    
  }
}
export default function getAllProductsOperation({
  commerce,
}: OperationContext<any>) {
  async function getAllProducts<T extends GetAllProductsOperation>({
    query = getAllProductsQuery,
    variables,
    config,
  }: {
    query?: string
    variables?: T['variables']
    config?: Partial<StrapiConfig>
    preview?: boolean
  } = {}): Promise<{ products: T['data'] }> {
    const { fetch, locale } = commerce.getConfig(config)

    const { data } = await fetch(
      query,
      { variables  },
      {
        ...(locale && {
          headers: {
            'Accept-Language': locale,
          },
        }),
      }
    )
    return {
        products: data.products.map(normalizeProduct),
    }
  }
  return getAllProducts
}
