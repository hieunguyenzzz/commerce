// import HomeAllProductsGrid from '@components/common/HomeAllProductsGrid'
import Home from '@components/templates/Home'
import commerce from '@lib/api/commerce'
import type { GetStaticPropsContext } from 'next'

export async function getStaticProps({
  preview,
  locale,
  locales,
}: GetStaticPropsContext) {
  const config = { locale, locales }
  const { products } = await commerce.getAllProducts({
    variables: { first: 99 },
    config,
    preview,
    ...({ featured: true } as any),
  })
  return {
    props: {
      products,
    },
    revalidate: 60,
  }
}

export default Home
