
import { OperationContext, OperationOptions } from '@commerce/api/operations'
import { GetAllProductsOperation } from '@commerce/types/product'
import { normalizeProduct } from '@framework/utils/normalize'
import type { Provider, StrapiConfig } from '..'
import {
  GetAllProductsQuery,
  GetAllProductsQueryVariables,
  Product
} from '../../schema'

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

export default function getAllProductsOperation({
  commerce,
}: OperationContext<Provider>) {
  async function getAllProducts<T extends GetAllProductsOperation>(opts?: {
    variables?: T['variables']
    config?: Partial<StrapiConfig>
    preview?: boolean
  }): Promise<T['data']>

  async function getAllProducts<T extends GetAllProductsOperation>(
    opts: {
      variables?: T['variables']
      config?: Partial<StrapiConfig>
      preview?: boolean
    } & OperationOptions
  ): Promise<T['data']>

  async function getAllProducts<T extends GetAllProductsOperation>({
    query = getAllProductsQuery,
    variables,
    config,
  }: {
    query?: string
    variables?: T['variables']
    config?: Partial<StrapiConfig>
    preview?: boolean
  } = {}): Promise<T['data']> {
    const { fetch, locale } = commerce.getConfig(config)

    const { data } = await fetch<
      GetAllProductsQuery,
      GetAllProductsQueryVariables
    >(
      query,
      { variables },
      {
        ...(locale && {
          headers: {
            'Accept-Language': locale,
          },
        }),
      }
    )
    return {
      products: data?.products?.filter(Boolean).map(product=>normalizeProduct(product as Product))||[],
    }
  }

  return getAllProducts
}
