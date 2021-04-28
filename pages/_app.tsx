import '@assets/chrome-bug.css'
import '@assets/main.css'
import { Head } from '@components/common'
import { ManagedUIContext } from '@components/ui/context'
import 'keen-slider/keen-slider.min.css'
import type { AppProps } from 'next/app'
import { FC, useEffect } from 'react'

const Noop: FC = ({ children }) => <>{children}</>

export default function MyApp({ Component, pageProps }: AppProps) {
  const Layout = (Component as any).Layout || Noop
  const renderNavbar = (Component as any).renderNavbar

  useEffect(() => {
    document.body.classList?.remove('loading')
  }, [])

  return (
    <>
      <Head />
      <ManagedUIContext>
        <Layout pageProps={pageProps} renderNavbar={renderNavbar}>
          <Component {...pageProps} />
        </Layout>
      </ManagedUIContext>
    </>
  )
}
