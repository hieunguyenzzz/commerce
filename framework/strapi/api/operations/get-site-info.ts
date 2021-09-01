import { OperationContext } from '@commerce/api/operations'
import { Category } from '@commerce/types/site'
import { GetSiteInfoQuery, GetSiteInfoQueryVariables } from '@framework/schema'
import { Provider, StrapiConfig } from '..'

export type GetSiteInfoResult<
  T extends { categories: any[]; brands: any[] } = {
    categories: Category[]
    brands: any[]
  }
> = T

const getSiteInfoQuery = /* GraphQL */ `
  query getSiteInfo {
    global {
      Currency
    }
    collections {
      id
      title
      slug
    }
  }
`
export default function getSiteInfoOperation({
  commerce,
}: OperationContext<Provider>) {
  async function getSiteInfo({
    query = getSiteInfoQuery,
    variables,
    config,
  }: {
    query?: string
    variables?: any
    config?: Partial<StrapiConfig>
    preview?: boolean
  } = {}): Promise<GetSiteInfoResult> {
    const { fetch, locale } = commerce.getConfig(config)

    const { data } = await fetch<GetSiteInfoQuery, GetSiteInfoQueryVariables>(
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
      categories: [
        ...(data?.collections || []).map((collection) => {
          const idString = String(collection?.id)
          const slugString = String(collection?.slug)
          return {
            id: idString,
            name: String(collection?.title),
            slug: slugString,
            path: '/collections/' + slugString,
          }
        }),
      ],
      brands: [],
    }
  }

  return getSiteInfo
}
