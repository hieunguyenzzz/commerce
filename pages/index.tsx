// import HomeAllProductsGrid from '@components/common/HomeAllProductsGrid'
import Home from '@components/templates/Home'
import type { GetStaticPropsContext } from 'next'

export async function getStaticProps({
  preview,
  locale,
  locales,
}: GetStaticPropsContext) {
  const config = { locale, locales }
  return {
    props: {},
    revalidate: 60,
  }
}

export default Home
