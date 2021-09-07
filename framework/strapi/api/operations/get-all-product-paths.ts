import { OperationContext, OperationOptions } from '@commerce/api/operations'
import { GetAllProductsOperation } from '@commerce/types/product'
import { normalizeProduct } from '@framework/utils/normalize'
import type { Provider, StrapiConfig } from '..'
import {
  GetAllProductsQuery,
  GetAllProductsQueryVariables,
  Global,
  Product
} from '../../schema'

const getAllProductPathsQuery = /* GraphQL */ `
  query getAllProductPaths($first: Int = 0, $start: Int = 0) {
    global {
      Currency
    }
    products(start: $start, limit: $first) {
      id
      title
      description
      price
      slug
      images {
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

export default function getAllProductPathsOperation({
  commerce,
}: OperationContext<Provider>) {
  async function getAllProductPaths<T extends GetAllProductsOperation>(opts?: {
    variables?: T['variables']
    config?: Partial<StrapiConfig>
    preview?: boolean
  }): Promise<T['data']>

  async function getAllProductPaths<T extends GetAllProductsOperation>(
    opts: {
      variables?: T['variables']
      config?: Partial<StrapiConfig>
      preview?: boolean
    } & OperationOptions
  ): Promise<T['data']>

  async function getAllProductPaths<T extends GetAllProductsOperation>({
    query = getAllProductPathsQuery,
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
      products:
        (data?.products
          ?.filter(Boolean)
          .map((product) =>
            normalizeProduct(product as Product, data?.global as Global)
          ) || []).map(product=>({path:product.slug})) as any,
    }
  }

  return getAllProductPaths
}
