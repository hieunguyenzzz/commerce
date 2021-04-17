import { Layout } from '@components/common'
import { Grid, Marquee, Hero } from '@components/ui'
import { ProductCard } from '@components/product'
// import HomeAllProductsGrid from '@components/common/HomeAllProductsGrid'
import type { GetStaticPropsContext, InferGetStaticPropsType } from 'next'

import { getConfig } from '@framework/api'
import getAllProducts from '@framework/product/get-all-products'
import getSiteInfo from '@framework/common/get-site-info'
import getAllPages from '@framework/common/get-all-pages'
import getAllBlogs from '@framework/blog/get-all-blogs'

// * New
import HeroCarouselItem from '@components/common/HeroCarouselItem'
import FeatureProduct from '@components/product/FeatureProduct'
import ProductBestSell from '@components/product/ProductBestSell'
import ProductOffer from '@components/product/ProductOffer'
import Blog from '@components/common/Blog'
import Newsletter from '@components/common/Newsletter'
// TODO:

export async function getStaticProps({
  preview,
  locale,
}: GetStaticPropsContext) {
  const config = getConfig({ locale })

  const { products } = await getAllProducts({
    variables: { first: 12 },
    config,
    preview,
  })

  const { categories, brands } = await getSiteInfo({ config, preview })
  const { pages } = await getAllPages({ config, preview })
  const { articles } = await getAllBlogs({ config, preview })

  return {
    props: {
      products,
      categories,
      brands,
      pages,
      articles,
    },
    revalidate: 14400,
  }
}

export default function Home({
  products,
  brands,
  categories,
  articles,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      {/* HOME */}
      <HeroCarouselItem />
      {/* FEATURE PRODUCT */}
      <FeatureProduct products={products} />
      {/* BEST SELLING */}
      <ProductBestSell products={products} />
      {/* PRODUCT OFFER */}
      <ProductOffer />
      {/* BLOG */}
      <Blog articles={articles} />
      {/* NEW LETTERS */}
      <Newsletter />
      {/* {products.slice(0, 3).map((product, i) => (
          <ProductCard
            key={product.id}
            product={product}
            imgProps={{
              width: i === 0 ? 1080 : 540,
              height: i === 0 ? 1080 : 540,
            }}
          />
        ))} */}

      {/* <Marquee variant="secondary">
        {products.slice(0, 3).map((product, i) => (
          <ProductCard
            key={product.id}
            product={product}
            variant="slim"
            imgProps={{
              width: 320,
              height: 320,
            }}
          />
        ))}
      </Marquee> */}

      {/* <Hero
        headline="Release Details: The Yeezy BOOST 350 V2 ‘Natural'"
        description="
        The Yeezy BOOST 350 V2 lineup continues to grow. We recently had the
        ‘Carbon’ iteration, and now release details have been locked in for
        this ‘Natural’ joint. Revealed by Yeezy Mafia earlier this year, the
        shoe was originally called ‘Abez’, which translated to ‘Tin’ in
        Hebrew. It’s now undergone a name change, and will be referred to as
        ‘Natural’."
      />
      <Grid layout="B">
        {products.slice(0, 3).map((product, i) => (
          <ProductCard
            key={product.id}
            product={product}
            imgProps={{
              width: i === 0 ? 1080 : 540,
              height: i === 0 ? 1080 : 540,
            }}
          />
        ))}
      </Grid>
      <Marquee>
        {products.slice(0, 3).map((product, i) => (
          <ProductCard
            key={product.id}
            product={product}
            variant="slim"
            imgProps={{
              width: 320,
              height: 320,
            }}
          />
        ))}
      </Marquee> */}
      {/* <HomeAllProductsGrid
        newestProducts={products}
        categories={categories}
        brands={brands}
      /> */}
    </>
  )
}

Home.Layout = Layout
