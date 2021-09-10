import type { GraphQLFetcher } from '@commerce/api'
import { FetcherError } from '@commerce/utils/errors'
import { StrapiConfig } from '..'
import fetch from './fetch'

const fetchGraphqlApi: (getConfig: () => StrapiConfig) => GraphQLFetcher =
  (getConfig) =>
  async (query: string, { variables, preview } = {}, fetchOptions) => {
    const config = getConfig()
    const res = await fetch(config.commerceUrl + '/graphql', {
      ...fetchOptions,
      method: 'POST',
      headers: {
        ...fetchOptions?.headers,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query,
        variables,
      }),
    })
    const json = await res.json()
    if (json.errors) {
      throw new FetcherError({
        errors: json.errors ?? [{ message: 'Failed to fetch for API' }],
        status: res.status,
      })
    }

    return { data: json.data, res }
  }

export default fetchGraphqlApi
