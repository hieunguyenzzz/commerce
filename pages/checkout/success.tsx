import { Layout } from '@components/common'
import { Button, Text } from '@components/ui'
import Link from '@components/ui/Link'
import commerce from '@lib/api/commerce'
import type { GetStaticPropsContext } from 'next'

export async function getStaticProps({
  preview,
  locale,
  locales,
}: GetStaticPropsContext) {
  const config = { locale, locales }
  const { pages } = await commerce.getAllPages({ config, preview })
  const { categories, brands } = await commerce.getSiteInfo({ config, preview })
  return {
    props: {
      pages,
      categories,
      brands,
    },
    revalidate: 200,
  }
}

export default function Success() {
  return (
    <div className="max-w-2xl mx-8 sm:mx-auto py-20 flex flex-col items-center justify-center fit">
      <Text variant="heading">Success</Text>
      <Button href="/" Component={Link}>
        Continue shopping
      </Button>
    </div>
  )
}

Success.Layout = Layout
