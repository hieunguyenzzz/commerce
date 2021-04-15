import { Breadcrumb, Layout } from '@components/common'
import { Button, Container, Text } from '@components/ui'
import { getConfig } from '@framework/api'
import getAllBlogs from '@framework/blog/get-all-blogs'
import type { GetStaticPropsContext } from 'next'
import Image from 'next/image'

export async function getStaticProps({
  preview,
  locale,
}: GetStaticPropsContext) {
  const config = getConfig({ locale })
  const { articles } = await getAllBlogs({ config, preview })
  return {
    props: { articles },
  }
}

export default function Blog() {
  return (
    <div>
      <Container className="pt-md mb-6">
        <Breadcrumb>JOURNAL/ ALL</Breadcrumb>
      </Container>
      <Container className="flex flex-col items-center">
        <Text className="text-center mx-auto" variant="h4">
          JOURNAL/ ALL
        </Text>
        <div className="mx-auto mt-xl flex justify-center space-x-4xl">
          {[
            'ALL',
            'INSPIRING WOMEN',
            'BEHIND TESS JEAN',
            'EDITIORIALS',
            'LIFESTYLE',
          ].map((str, i) => {
            return (
              <Text className={i === 0 ? 'text-primary' : ''} variant="h7">
                {str}
              </Text>
            )
          })}
        </div>
        <div className="h-16" />
        <div className="lg:grid grid-cols-2 gap-x-5 gap-y-10 w-full">
          {new Array(6).fill(true).map((_, i) => (
            <div>
              <Image
                layout="responsive"
                src={`/blog-${i + 1}.png`}
                width={630}
                height={369}
              ></Image>
              <div className="p-5 space-y-2 text-center">
                <Text variant="h7">title</Text>
                <Text variant="subtitle">Date</Text>
              </div>
            </div>
          ))}
        </div>
        <div className="h-16" />
        <div className="mx-auto max-w-full flex justify-center border-b border-accents-3">
          {new Array(5).fill(true).map((_, i) => (
            <div
              className={`py-xs px-7 relative text-lg -mb-px text-effect-1 ${
                i === 0 ? 'text-effect-1_active' : ''
              }`}
            >
              {i}
            </div>
          ))}
        </div>
        <div className="h-40"></div>
        <div className="max-w-prose flex flex-col items-center text-center space-y-5">
          <Text variant="h3">10% OFF YOUR FIRST ORDER</Text>
          <div className="text-lg whitespace-pre-line">
            Sign up to receive 10% your first order and be the first to hear
            about latest news and offers.
          </div>
          <Button>sign up</Button>
        </div>
        <div className="h-40"></div>
      </Container>
    </div>
  )
}

Blog.Layout = Layout
