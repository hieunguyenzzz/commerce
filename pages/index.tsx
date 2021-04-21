import { getConfig } from '@framework/api'
import ComingSoon from 'components/others/ComingSoon'
// import HomeAllProductsGrid from '@components/common/HomeAllProductsGrid'
import type { GetStaticPropsContext, InferGetStaticPropsType } from 'next'
const placeholderImg = '/product-img-placeholder.svg'

export async function getStaticProps({
  preview,
  locale,
}: GetStaticPropsContext) {
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
