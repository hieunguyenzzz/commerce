import { FetcherError } from '@commerce/utils/errors'
import type { Fetcher } from '@commerce/utils/types'
import { NEXT_PUBLIC_STRAPI_URL } from './const'

async function getText(res: Response) {
  try {
    return (await res.text()) || res.statusText
  } catch (error) {
    return res.statusText
  }
}

async function getError(res: Response) {
  if (res.headers.get('Content-Type')?.includes('application/json')) {
    const data = await res.json()
    return new FetcherError({ errors: data.errors, status: res.status })
  }
  return new FetcherError({ message: await getText(res), status: res.status })
}

const fetcher: Fetcher = async ({
  url = NEXT_PUBLIC_STRAPI_URL + '/graphql',
  method = 'POST',
  variables,
  query,
}) => {
  console.log('fetcher', url)
  const { locale, ...vars } = variables ?? {}
  const res = await fetch(url, {
    method,
    body: JSON.stringify({ query, variables: vars }),
    headers: {
      'Content-Type': 'application/json',
      ...(locale && {
        'Accept-Language': locale,
      }),
    },
  })

  if (res.ok) {
    const { data } = await res.json()
    return data
  }

  throw await getError(res)
}

export default fetcher
