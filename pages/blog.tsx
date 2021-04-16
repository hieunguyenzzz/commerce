import BlogListView from '@components/blog/BlogListView'
import { Layout } from '@components/common'
import { getConfig } from '@framework/api'
import getAllBlogs from '@framework/blog/get-all-blogs'
import type { GetStaticPropsContext, InferGetStaticPropsType } from 'next'
import { useRouter } from 'next/router'
const placeholderImg = '/product-img-placeholder.svg'
export async function getStaticProps({
  preview,
  locale,
}: GetStaticPropsContext) {
  const config = getConfig({ locale })
  const { articles } = await getAllBlogs({ config, preview })
  return {
    props: {
      articles,
      tags: [
        'ALL',
        'INSPIRING WOMEN',
        'BEHIND TESS JEAN',
        'EDITIORIALS',
        'LIFESTYLE',
      ],
    },
  }
}

export default function Blog({
  articles,
  tags,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const router = useRouter()
  const currentPage = Number(router.query?.page || 1)
  const limit = 4
  const pageTotal = Math.ceil(articles.length / limit)
  const fromIndex = (currentPage - 1) * limit
  const ToIndex = fromIndex + limit
  const showArticles = articles.filter((_, i) => i >= fromIndex && i < ToIndex)
  return router.isFallback ? (
    <h1>Loading...</h1> // TODO (BC) Add Skeleton Views
  ) : (
    <BlogListView
      articles={showArticles}
      tags={tags}
      pageTotal={pageTotal}
      currentPage={currentPage}
    />
  )
}

Blog.Layout = Layout
