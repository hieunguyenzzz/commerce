// import DashboardAllProductsGrid from '@components/common/DashboardAllProductsGrid'
import Dashboard from '@components/templates/Dashboard'
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

export default Dashboard
