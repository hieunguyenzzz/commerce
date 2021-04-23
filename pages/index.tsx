import { getConfig } from '@framework/api'
import ComingSoon from 'components/others/ComingSoon'
// import HomeAllProductsGrid from '@components/common/HomeAllProductsGrid'
import type { GetStaticPropsContext, InferGetStaticPropsType } from 'next'

export async function getStaticProps({ locale }: GetStaticPropsContext) {
  const config = getConfig({ locale })
  return {
    props: {},
    revalidate: 14400,
  }
}

export default function Home({}: InferGetStaticPropsType<
  typeof getStaticProps
>) {
  return null
}

Home.Layout = ComingSoon
