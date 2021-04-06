import { Layout, Navbar, Title } from '@components/common'
import { Facebook, Twitter } from '@components/icons'
import { ProductCard } from '@components/product'
import ProductSlider from '@components/product/ProductSlider'
import Article from '@components/sections/home/Article'
import HeroSlider from '@components/sections/home/HeroSlider'
import Subscribe from '@components/subscribe/Subscribe'
import { Button, Container } from '@components/ui'
import { getConfig } from '@framework/api'
import getAllPages from '@framework/common/get-all-pages'
import getSiteInfo from '@framework/common/get-site-info'
import getAllProducts from '@framework/product/get-all-products'
// import HomeAllProductsGrid from '@components/common/HomeAllProductsGrid'
import type { GetStaticPropsContext, InferGetStaticPropsType } from 'next'
import Image from 'next/image'
import React from 'react'
import { renderToString } from 'react-dom/server'

const placeholderImg = '/product-img-placeholder.svg'

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

  return {
    props: {
      products,
      hero: [
        {
          title: 'Create Your Own',
          subTitle: 'New Arrivals',
          description: null,
          buttonText: 'See Our News',
          path: '#',
          imageUrl: '/home-default-1.jpg',
        },
        {
          title: 'Stools with Style',
          subTitle: 'Kitchen',
          description: null,
          buttonText: 'Explore Now',
          path: '#',
          imageUrl: '/home-default-2.jpg',
        },
        {
          title: 'New Arrivals',
          subTitle: 'Living room',
          description: null,
          buttonText: 'Explore Now',
          path: '#',
          imageUrl: '/home-default-3.jpg',
        },
      ],
      categories,
      featured: [products[0], products[1], products[2]],
      blogs: [products[0], products[1], products[2]].map((p) => ({
        ...p,
        tags: [
          {
            path: '/search?q=' + 'October 15, 2020',
            title: 'October 15, 2020',
          },
          { path: '/search?q=' + 'Hastheme', title: 'Hastheme' },
          { path: '/search?q=' + 'Chair', title: 'Chair' },
        ],
      })),
      brands,
      bestSelling: products.map((p, i) => ({
        ...p,
        ...(i === 0
          ? {
              label: {
                position: 'top right',
                text: 'Out Of Stock',
                variant: 'out-of-stock',
              },
            }
          : i === 3
          ? {
              label: {
                position: 'top right',
                text: '-14%',
                variant: 'discount',
              },
            }
          : {}),
      })),
      countdown: {
        title: renderToString(
          <>
            Deco Collection <span className="text-red">50% OFF</span>
          </>
        ),
        content: `The standard chunk of Lorem Ipsum used since the 1500s is
    reproduced for those. Sections 1.10.32 and 1.10.33 from “de
    Finibus Bonorum et Malorum`,
        date: 'Jan 5, 2022 15:37:25',
        path: '#',
      },
      pages,
    },
    revalidate: 14400,
  }
}
const featured = [
  ['Living Room', 'Find Your Favorite', 'Explore Now'],
  ['Kitchen', 'Your Future Favorites', 'Shop Now'],
  ['Bedroom', 'Comfort is A Place Called Home', 'Explore Now'],
  ['Bathroom', 'All New, Picked Just For You', 'See Our News'],
  ['Accessories', 'Great Design Accessible For All', 'Explore Now'],
].map(([label, title, actionText], i) => ({
  label,
  title,
  actionText,
  column: i < 2 ? 'left' : 'right',
}))
export default function Home({
  hero,
  products,
  bestSelling,
  blogs,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const renderFeaturedItem = (
    { label, title, actionText, column }: any,
    i: number
  ) => {
    const image = products[i].images[0].url || placeholderImg
    return (
      <Container key={i + 1} className="relative">
        <div className="flex px-4 items-center justify-center w-full flex-shrink-0 flex-col relative">
          <Image
            className="w-full bg-accents-2"
            width={600}
            height={800}
            objectFit="cover"
            quality="85"
            src={image}
            alt={title || 'Product Image'}
          />
          <div className="w-full flex flex-col justify-center space-y-2 mt-6">
            <div className="text-xl">{title}</div>
            <div>
              <Button variant="link">{actionText}</Button>
            </div>
          </div>
          {column === 'left' && (
            <div className="absolute text-sm top-0 leading-6 -left-2 transform -rotate-90 -translate-x-full origin-top-right">
              {label}
            </div>
          )}
          {column === 'right' && (
            <div className="absolute text-sm top-0 leading-6 right-4 transform -rotate-90 origin-top-right">
              {label}
            </div>
          )}
        </div>
      </Container>
    )
  }
  return (
    <div className="w-full space-y-12">
      <div className="relative w-full overflow-hidden">
        <HeroSlider list={hero}></HeroSlider>
        <div className="absolute inset-0 pointer-events-none hidden lg:block">
          <Container className=" h-full">
            <div className="w-full h-full relative">
              <div className="pointer-events-auto flex flex-col h-full absolute left-full top-0">
                <div className="flex-1"></div>
                <div className="flex-1 flex justify-center items-center space-y-4 flex-col text-sm">
                  <span>
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth={0}
                      viewBox="0 0 384 512"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M204 6.5C101.4 6.5 0 74.9 0 185.6 0 256 39.6 296 63.6 296c9.9 0 15.6-27.6 15.6-35.4 0-9.3-23.7-29.1-23.7-67.8 0-80.4 61.2-137.4 140.4-137.4 68.1 0 118.5 38.7 118.5 109.8 0 53.1-21.3 152.7-90.3 152.7-24.9 0-46.2-18-46.2-43.8 0-37.8 26.4-74.4 26.4-113.4 0-66.2-93.9-54.2-93.9 25.8 0 16.8 2.1 35.4 9.6 50.7-13.8 59.4-42 147.9-42 209.1 0 18.9 2.7 37.5 4.5 56.4 3.4 3.8 1.7 3.4 6.9 1.5 50.4-69 48.6-82.5 71.4-172.8 12.3 23.4 44.1 36 69.3 36 106.2 0 153.9-103.5 153.9-196.8C384 71.3 298.2 6.5 204 6.5z" />
                    </svg>
                  </span>
                  <span>
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth={0}
                      viewBox="0 0 448 512"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                    </svg>
                  </span>
                  <span>
                    <Facebook />
                  </span>
                  <span>
                    <Twitter />
                  </span>
                </div>
                <div
                  onClick={() => {
                    window.scrollTo({
                      top: window.innerHeight,
                      behavior: 'smooth',
                    })
                  }}
                  className="flex-1 flex flex-col justify-items-end py-12 cursor-pointer"
                >
                  <div className="relative flex-1">
                    <div
                      style={{ '--tw-translate-y': '-250%' } as any}
                      className="absolute bottom-0 left-0 transform rotate-90 origin-bottom-left"
                    >
                      srolldown
                    </div>
                  </div>

                  <span className="text-xl mt-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      x="0px"
                      y="0px"
                      width="32px"
                      height="32px"
                      viewBox="0 0 32 32"
                      enableBackground="new 0 0 32 32"
                      xmlSpace="preserve"
                    >
                      {' '}
                      <g>
                        {' '}
                        <rect fill="none" width={32} height={32} />{' '}
                        <path d="M17,18V4h-2v14H9l7,10l7-10H17z M15.96,24.512L12.841,20H19h0.079L15.96,24.512z" />{' '}
                      </g>{' '}
                    </svg>
                  </span>
                </div>
              </div>
            </div>
          </Container>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-0">
        <div className="w-full col-span-1 space-y-12">
          {featured.map(renderFeaturedItem).filter((item, i) => i < 2)}
          <Container className="relative">
            <div className="absolute inset-0">
              <Image
                layout="fill"
                objectFit="cover"
                src="/newsletter.png"
              ></Image>
            </div>
            <div className="flex px-4 items-center justify-center w-full flex-shrink-0 flex-col relative">
              <Subscribe />
            </div>
          </Container>
        </div>
        <div className="w-full col-span-1 space-y-12">
          {featured.map(renderFeaturedItem).filter((item, i) => i >= 2)}
        </div>
      </div>
      <Container className="py-6 lg:py-12 space-y-6 lg:space-y-10">
        <Title small center>
          Best selling
        </Title>
        <ProductSlider>
          {bestSelling.map((product, i) => {
            return (
              <ProductCard
                key={i}
                label={product.label as any}
                product={product}
              />
            )
          })}
        </ProductSlider>
      </Container>
      <Container className="py-6 lg:py-12 space-y-6 lg:space-y-10">
        <Title small center>
          Our Blog
        </Title>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:flex-row gap-4 mt-6">
          {blogs.map((article, i) => {
            return <Article key={i} article={article} tags={article?.tags} />
          })}
        </div>
      </Container>
      <Container>
        <Subscribe />
      </Container>
    </div>
  )
}

Home.Layout = Layout
Home.renderNavbar = () => <Navbar transparent />
