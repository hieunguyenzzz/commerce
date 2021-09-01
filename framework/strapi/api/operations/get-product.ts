import type { OperationContext } from '@commerce/api/operations'
import { GetProductOperation } from '@commerce/types/product'
import { Product } from '@framework/schema'
import { normalizeProduct } from '@framework/utils/normalize'
import { StrapiConfig } from '..'

const getProductQuery = /* GraphQL */ `
  query getProduct($slug: String) {
    global {
      Currency
    }
    products(where: { slug: $slug }) {
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
export default function getProductOperation({
  commerce,
}: OperationContext<any>) {
  async function getProduct<T extends GetProductOperation>({
    query = getProductQuery,
    variables,
    config,
  }: {
    query?: string
    variables?: T['variables']
    config?: Partial<StrapiConfig>
    preview?: boolean
  } = {}): Promise<Product | {} | any> {
    const { fetch, locale } = commerce.getConfig(config)
    const { data } = await fetch(
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
    console.log(
      'variables',
      JSON.stringify({
        product: data?.products?.[0],
      })
    )

    return {
      product: normalizeProduct(data?.products?.[0] as Product, data?.global),
    }
  }

  return getProduct
}
