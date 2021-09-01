import useSearch, { UseSearch } from '@commerce/product/use-search'
import { SearchProductsHook } from '@commerce/types/product'
import { SWRHook } from '@commerce/utils/types'
import { normalizeProduct } from '@framework/utils/normalize'
import { Global, Product } from '../schema'
const getAllSearchQuery = /* GraphQL */ `
  query getSiteInfo {
    global {
      Currency
    }
    products {
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
    collections {
      id
      title
      slug
      products {
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
  }
`

export type SearchProductsInput = {
  search?: string
  categoryId?: number
  brandId?: number
  sort?: string
  locale?: string
}

export default useSearch as UseSearch<typeof handler>

export const handler: SWRHook<SearchProductsHook> = {
  fetchOptions: {
    query: getAllSearchQuery,
  },
  async fetcher({ input, options, fetch }) {
    const { categoryId, brandId } = input
    const method = options?.method
    const variables = {}
    let products
    const data = await fetch({
      query: getAllSearchQuery,
      method: 'POST',
      variables,
    })
    if (categoryId) {
      products = data?.product
    } else {
      products = data?.product
    }
    console.log({ input, options, fetch, data, products })

    return {
      products:
        data?.products
          ?.filter(Boolean)
          .map((product: Product) =>
            normalizeProduct(product, data?.global as Global)
          ) || [],
      found: !!products?.length,
    }
  },
  useHook:
    ({ useData }) =>
    (input = {}) => {
      return useData({
        input: [
          ['search', input.search],
          ['categoryId', input.categoryId],
          ['brandId', input.brandId],
          ['sort', input.sort],
          ['locale', input.locale],
        ],
        swrOptions: {
          revalidateOnFocus: false,
          ...input.swrOptions,
        },
      })
    },
}
