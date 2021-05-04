import { BlogListView } from '@components/blog'
import { getAllTagsFromArticles } from '@components/blog/helpers'
import { Layout, SidebarLayout } from '@components/common'
import { Sidebar, useUI } from '@components/ui'
import { getConfig } from '@framework/api'
import getAllBlogs from '@framework/blog/get-all-blogs'
import type { GetStaticPropsContext, InferGetStaticPropsType } from 'next'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
export async function getStaticProps({
  preview,
  locale,
}: GetStaticPropsContext) {
  const config = getConfig({ locale })
  const { articles } = await getAllBlogs({ config, preview })
  return {
    props: {
      articles,
      tags: getAllTagsFromArticles(articles),
    },
  }
}

export default function Blog({
  articles,
  tags,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const router = useRouter()
  const currentPage = Number(router.query?.page || 1)
  const limit = 6
  const pageTotal = Math.ceil(articles.length / limit)
  const fromIndex = (currentPage - 1) * limit
  const ToIndex = fromIndex + limit
  const showArticles = articles.filter((_, i) => i >= fromIndex && i < ToIndex)
  const {
    displaySidebar,
    displayModal,
    closeSidebar,
    closeModal,
    modalView,
    setModalView,
  } = useUI()
  useEffect(() => {
    setModalView('BLOG')
  }, [])

  return router.isFallback ? (
    <h1>Loading...</h1> // TODO (BC) Add Skeleton Views
  ) : (
    <>
      <BlogListView
        articles={showArticles}
        tags={tags}
        pageTotal={pageTotal}
        currentPage={currentPage}
      />
      <Sidebar
        position="left"
        open={displaySidebar && modalView === 'BLOG'}
        onClose={closeSidebar}
      >
        <SidebarLayout title="JOURNAL">
          <div className="space-y-md flex flex-col">
            {[
              'ALL',

              'INSPIRING WOMEN',

              'BEHIND TESS JEAN',

              'EDITIORIALS',

              'LIFESTYLE',
            ].map((str) => (
              <a className="text-h7 hover:underline" key={str}>
                {str}
              </a>
            ))}
          </div>
        </SidebarLayout>
      </Sidebar>
    </>
  )
}

Blog.Layout = Layout
// Blog.renderNavbar = () => (
//   <NavbarRoot>
//     <Container className="flex justify-center items-center">
//       <Logo />
//     </Container>
//   </NavbarRoot>
// )
