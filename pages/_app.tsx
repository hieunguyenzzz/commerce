import '@assets/chrome-bug.css'
import '@assets/main.css'
import { Head } from '@components/common'
import { ManagedDATAContext } from '@components/data/context'
import { ManagedUIContext } from '@components/ui/context'
import type { AppProps } from 'next/app'
import { FC, useEffect } from 'react'

const Noop: FC = ({ children }) => <>{children}</>
export default function MyApp({ Component, pageProps }: AppProps) {
  const Layout = (Component as any).Layout || Noop

  useEffect(() => {
    document.body.classList?.remove('loading')
  }, [])

  return (
    <>
      <Head />
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
          }}
        >
          <Layout pageProps={pageProps}>
            <Component {...pageProps} />
          </Layout>
        </ManagedDATAContext>
      </ManagedUIContext>
    </>
  )
}
