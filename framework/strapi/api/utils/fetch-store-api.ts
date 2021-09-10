import { FetcherError } from '@commerce/utils/errors'
import { STRAPI_TOKEN } from '@framework/const'
import type { RequestInit, Response } from '@vercel/fetch'
import { StrapiConfig } from '..'
import fetch from './fetch'

const fetchStoreApi =
  <T>(getConfig: () => StrapiConfig) =>
  async (endpoint: string, options?: RequestInit): Promise<T> => {
    const config = getConfig()
    let res: Response
    res = await fetch(config.commerceUrl + endpoint, {
      ...options,
      method: 'POST',
      headers: {
        ...options?.headers,
        'Content-Type': 'application/json',
      },
    })
    const json = await res.json()
    if (json.errors) {
      throw new FetcherError({
        errors: json.errors ?? [{ message: 'Failed to fetch for Store API' }],
        status: res.status,
      })
    }

    return res.status === 204 ? null : await res.json()
  }

export default fetchStoreApi
