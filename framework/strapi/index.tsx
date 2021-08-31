import {
  CommerceConfig,
  CommerceProvider as CoreCommerceProvider,
  useCommerce as useCoreCommerce,
} from '@commerce'
import * as React from 'react'
import { ReactNode } from 'react'
import { localProvider } from './provider'

export const StrapiConfig: CommerceConfig = {
  locale: 'en-us',
  cartCookie: 'session',
}

export function CommerceProvider({
  children,
  ...config
}: {
  children?: ReactNode
  locale: string
} & Partial<CommerceConfig>) {
  return (
    <CoreCommerceProvider
      provider={localProvider}
      config={{ ...StrapiConfig, ...config }}
    >
      {children}
    </CoreCommerceProvider>
  )
}

export const useCommerce = () => useCoreCommerce()
