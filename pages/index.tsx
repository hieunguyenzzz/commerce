import { Layout, Navbar } from '@components/common'
import HomeView from '@components/sections/home/HomeView'
import { getConfig } from '@framework/api'
import getAllBlogs from '@framework/blog/get-all-blogs'
import getAllCollections from '@framework/product/get-all-collections'
import Instagram from 'instagram-web-api'
// import HomeAllProductsGrid from '@components/common/HomeAllProductsGrid'
import type { GetStaticPropsContext, InferGetStaticPropsType } from 'next'
const getInstagramData = async () => {
  const client = new Instagram({
    username: 'Ln4246',
    password: 'thitluoc.mamtom',
  })

  let posts = []
  try {
    await client.login()
    // request photos for a specific instagram user
    const instagram = await client.getPhotosByUsername({
      username: '_tessjean_',
    })

    if (instagram['user']['edge_owner_to_timeline_media']['count'] > 0) {
      // if we receive timeline data back
      //  update the posts to be equal
      // to the edges that were returned from the instagram API response
      posts = instagram['user']['edge_owner_to_timeline_media']['edges']
    }
  } catch (err) {
    console.log(
      'Something went wrong while fetching content from Instagram',
      err
    )
  }

  return {
    instagramPosts: posts, // returns either [] or the edges returned from the Instagram API based on the response from the `getPhotosByUsername` API call
  }
}
export async function getStaticProps({ locale }: GetStaticPropsContext) {
  const config = getConfig({ locale })
  const { categories } = await getAllCollections({ config })
  const { articles } = await getAllBlogs({ config })
  const { instagramPosts } = await getInstagramData()

  const collection = categories.find((cate) => cate.slug === '001-softtest')
  if (!collection) {
    throw new Error(`collection not found`)
  }
  return {
    props: {
      instagramPosts,
      collection,
      articles,
    },
    revalidate: 14400,
  }
}

export default function Home(
  props: InferGetStaticPropsType<typeof getStaticProps>
) {
  // return <ComingSoon />
  return <HomeView {...props} />
}
Home.Layout = Layout
Home.renderNavbar = () => <Navbar transparent />
