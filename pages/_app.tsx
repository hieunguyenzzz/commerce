import '@assets/chrome-bug.css'
import '@assets/main.css'
import { Head } from '@components/common'
import { ManagedDATAContext } from '@components/data/context'
import { ManagedUIContext } from '@components/ui/context'
import { CommerceProvider } from '@framework'
import { useAcceptCookies } from '@lib/hooks/useAcceptCookies'
import type { AppProps } from 'next/app'
import { useRouter } from 'next/dist/client/router'
import { FC, useEffect } from 'react'

const Noop: FC = ({ children }) => <>{children}</>
export default function MyApp({ Component, pageProps }: AppProps) {
  const Layout = (Component as any).Layout || Noop
  const { acceptedCookies, onAcceptCookies } = useAcceptCookies()
  const { locale = 'en-US' } = useRouter()
  useEffect(() => {
    document.body.classList?.remove('loading')
  }, [])

  return (
    <>
      <CommerceProvider locale={locale}>
        <ManagedUIContext>
          <ManagedDATAContext
            initialValues={{
              navigation: [
                {
                  title: 'home',
                  url: '/',
                },
                {
                  title: 'application',
                  url: '/application',
                },
                {
                  title: 'dashboard',
                  url: '/dashboard',
                },
                {
                  title: 'login',
                  url: '/login',
                },
                {
                  title: 'membership',
                  url: '/membership',
                },
                {
                  title: 'signup',
                  url: '/signup',
                },
              ],
              ...pageProps,
            }}
          >
            <Layout pageProps={pageProps}>
              <Component {...pageProps} />
            </Layout>
          </ManagedDATAContext>
        </ManagedUIContext>
      </CommerceProvider>
      <Head />
    </>
  )
}
