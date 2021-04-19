import { BlogListView, BlogView } from '@components/blog'
import { getAllTagsFromArticles } from '@components/blog/helpers'
import { Layout } from '@components/common'
import { getConfig } from '@framework/api'
import getAllBlogs from '@framework/blog/get-all-blogs'
import { Article } from '@framework/schema'
import type {
  GetStaticPathsContext,
  GetStaticPropsContext,
  InferGetStaticPropsType,
} from 'next'
import { useRouter } from 'next/router'
const placeholderImg = '/product-img-placeholder.svg'
export async function getStaticProps({
  params,
  preview,
  locale,
}: GetStaticPropsContext) {
  const slug = (params?.slug || 'ALL') as string
  const config = getConfig({ locale })
  const { articles } = await getAllBlogs({ config, preview })
  const tags = getAllTagsFromArticles(articles)

  return {
    props: {
      articles,
      slug,
      tags,
    },
  }
}
export async function getStaticPaths({ locales }: GetStaticPathsContext) {
  return {
    paths: [],
    fallback: 'blocking',
  }
}
interface WhatBlog {
  currentTag?: string
  articles: Article[]
  tags?: string[]
}
function WhatBlog({ currentTag, articles, tags }: WhatBlog) {
  const router = useRouter()
  const currentPage = Number(router.query?.page || 1)
  const limit = 6
  const pageTotal = Math.ceil(articles.length / limit)
  const fromIndex = (currentPage - 1) * limit
  const ToIndex = fromIndex + limit
  const showArticles = articles.filter((_, i) => i >= fromIndex && i < ToIndex)
  return (
    <BlogListView
      articles={showArticles}
      tags={tags}
      currentTag={currentTag}
      pageTotal={pageTotal}
      currentPage={currentPage}
    />
  )
}
export default function Blog({
  slug,
  articles,
  tags,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const router = useRouter()
  const currentTag =
    tags.find((item) => item.toLowerCase() === slug.toLowerCase()) || null
  const showarticles = currentTag
    ? currentTag === 'ALL'
      ? articles
      : articles.filter(
          (article) =>
            article.tags &&
            article.tags.find(
              (item) => item.toLowerCase() === String(currentTag).toLowerCase()
            )
        )
    : []
  const article = !currentTag
    ? articles.find((article) => article.id === slug) || null
    : null
  if (router.isFallback) {
    return <h1>Loading...</h1>
  }
  if (article) {
    return <BlogView />
  }
  return (
    <WhatBlog
      articles={showarticles}
      tags={tags}
      currentTag={currentTag ? currentTag : undefined}
    />
  )
}

Blog.Layout = Layout
