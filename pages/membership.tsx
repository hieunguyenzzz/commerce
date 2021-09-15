// import HomeAllProductsGrid from '@components/common/HomeAllProductsGrid'
import Membership from '@components/templates/Membership'
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

export default Membership
