import { Article } from '@commerce/types'
import { BlogListView, BlogView } from '@components/blog'
import { getAllTagsFromArticles } from '@components/blog/helpers'
import { Layout } from '@components/common'
import { getConfig } from '@framework/api'
import getAllBlogs from '@framework/blog/get-all-blogs'
import type {
  GetStaticPathsContext,
  GetStaticPropsContext,
  InferGetStaticPropsType,
} from 'next'
import { ArticleJsonLd, NextSeo } from 'next-seo'
import { useRouter } from 'next/router'
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
  const showarticles = articles.filter(
    (article) =>
      article.tags &&
      article.tags.find(
        (item) => item.toLowerCase() === String(currentTag).toLowerCase()
      )
  )
  const articleIndex = !currentTag
    ? articles.findIndex((article) => article.slug === slug)
    : -1
  const article = articles[articleIndex]
  if (router.isFallback) {
    return <h1>Loading...</h1>
  }
  if (article) {
    const sameTagsArticle = articles.filter((art) =>
      art.tags.includes(article.tags[0])
    )
    const articleIndex = sameTagsArticle.findIndex(
      (article) => article.slug === slug
    )
    return (
      <>
        <NextSeo
          title={article?.seo?.title}
          description={article?.seo?.description}
          openGraph={{
            type: 'article',
            title: article?.seo?.title,
            description: article?.seo?.description,
            article: {
              publishedTime: article.publishedAt,
              tags: article.tags,
            },
            images: article.image && [article.image],
          }}
        />
        <ArticleJsonLd
          url={article.path || '/'}
          title={article.seo?.title || 'tess-jean'}
          images={[article.image?.url || '']}
          datePublished={article.publishedAt}
          dateModified={article.publishedAt}
          authorName={['Tess Jean']}
          publisherName="Tess Jean"
          publisherLogo="/avatar.png"
          description={article.seo?.description || 'tess-jean'}
        />
        <BlogView
          article={article}
          articles={[
            sameTagsArticle[articleIndex + 1] || articles[0],
            sameTagsArticle[articleIndex + 2] || articles[1],
          ]}
        />
      </>
    )
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
