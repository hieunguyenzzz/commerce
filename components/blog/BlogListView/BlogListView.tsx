import { Breadcrumb } from '@components/common'
import AdsSignupView from '@components/others/AdsSignup'
import { Container, Text } from '@components/ui'
import { Article } from '@framework/schema'
import classNames from 'classnames'
import { NextSeo } from 'next-seo'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import { getLink } from '../helpers'
import s from './BlogListView.module.css'

function formatdate(
  dateStr: string,
  locale = 'en-US',
  format: 'default' | 'long' | 'short' = 'default'
) {
  let options
  switch (format) {
    case 'long':
      options = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      }
      break
    case 'default':
    case 'short':
    default:
      break
  }
  return new Date(dateStr).toLocaleDateString(locale, options as any)
}

interface Props {
  articles: Article[]
  tags?: string[]
  currentTag?: string
  title?: string
  pageTotal?: number
  currentPage?: number
}
const BlogListView: React.FC<Props> = ({
  title = 'JOURNAL',
  articles,
  currentTag,
  pageTotal,
  currentPage = 1,
  tags = [
    'ALL',
    'INSPIRING WOMEN',
    'BEHIND TESS JEAN',
    'EDITIORIALS',
    'LIFESTYLE',
  ],
}: any) => {
  const { locale } = useRouter()
  return (
    <div className={s.root} data-testid="BlogListView">
      <NextSeo
        title={title || currentTag}
        openGraph={{
          type: 'website',
          title: title || currentTag,
        }}
      />
      <Container className="pt-md mb-6">
        <Breadcrumb>
          {title}/ {currentTag}
        </Breadcrumb>
      </Container>
      <Container className="flex flex-col items-center">
        <Text className="text-center mx-auto" variant="h4">
          {title}
        </Text>
        <div className="mx-auto mt-xl flex flex-wrap justify-center items-baseline space-y-sm">
          <Link href={`/blog`}>
            <a
              className={classNames('mx-xl text-effect-1 text-h7 uppercase', {
                'text-primary': !currentTag,
              })}
            >
              all
            </a>
          </Link>
          {tags.map((str: any, i: number) => {
            return (
              <Link key={i} href={`/blog/${str.toLowerCase()}`}>
                <a
                  className={classNames(
                    'mx-xl text-effect-1 text-h7 uppercase',
                    {
                      'text-primary':
                        currentTag &&
                        str.toLowerCase() === currentTag.toLowerCase(),
                    }
                  )}
                >
                  {str}
                </a>
              </Link>
            )
          })}
        </div>
        <div className="h-16" />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-5 gap-y-10 w-full">
          {articles.map((article: any, i: number) => (
            <Link key={article.handle} href={getLink(article.handle)}>
              <div>
                <Image
                  className="bg-accents-1"
                  layout="responsive"
                  src={article.image?.originalSrc}
                  width={630}
                  height={369}
                ></Image>
                <div className="p-5 space-y-1 text-center">
                  <h2 className="header-1 uppercase">
                    {(article as any).name as any}
                  </h2>
                  <Text variant="subtitle">
                    {formatdate(article.publishedAt, locale, 'long')}
                  </Text>
                </div>
              </div>
            </Link>
          ))}
        </div>
        <div className="h-16" />
        <div className="mx-auto max-w-full flex justify-center border-b border-accents-3 ">
          {!!pageTotal &&
            pageTotal > 1 &&
            new Array(pageTotal).fill(pageTotal).map((_, i) => {
              const page = i + 1
              return (
                <Link
                  key={i}
                  href={{
                    pathname: `/blog/${currentTag ? currentTag : ''}`,
                    query: { page },
                  }}
                >
                  <a
                    className={`py-xs px-7 relative text-lg -mb-px text-effect-1 ${
                      page === currentPage ? 'text-effect-1_active' : ''
                    }`}
                  >
                    {page}
                  </a>
                </Link>
              )
            })}
        </div>
        <div className="h-40"></div>
        <AdsSignupView />
        <div className="h-40"></div>
      </Container>
    </div>
  )
}
export default BlogListView
