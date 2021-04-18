import {Layout} from "@components/common";
import {GetStaticPathsContext, GetStaticPropsContext} from "next";
import {useRouter} from 'next/router'
import getAllBlogs from "@framework/blog/get-all-blogs";

export async function getStaticPaths({locales}: GetStaticPathsContext) {

  const {articles} = await getAllBlogs()

  return {
    paths: articles.map(({handle}) => {
      return `/blog/${handle}`;
    }),
    fallback: false
  }
}

export async function getStaticProps({params, locale, preview,}: GetStaticPropsContext<{ slug: string }>) {

  const {articles} = await getAllBlogs()

  return {
    props: {
      // article: articles.reduce((accumulator, currentValue) => {
      //   if (currentValue.handle == params?.slug) {
      //     return currentValue
      //   }
      // })
    },
    revalidate: 200,
  }
}


export default function Slug() {
  const router = useRouter()
  return router.isFallback ? (
    <h1>Loading...</h1> // TODO (BC) Add Skeleton Views
  ) : (
    <span>blog detail page</span>
  )
}

Slug.Layout = Layout
