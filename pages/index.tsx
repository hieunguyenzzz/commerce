import { Layout, Navbar, Title } from '@components/common'
import { Facebook, Twitter } from '@components/icons'
import { ProductCard, ProductCard2, ProductSlider2 } from '@components/product'
import ProductSlider from '@components/product/ProductSlider'
import Article from '@components/sections/home/Article'
import HeroSlider from '@components/sections/home/HeroSlider'
import Subscribe from '@components/subscribe/Subscribe'
import { Button, Container, Modal } from '@components/ui'
import { getConfig } from '@framework/api'
import getAllPages from '@framework/common/get-all-pages'
import getSiteInfo from '@framework/common/get-site-info'
import getAllProducts from '@framework/product/get-all-products'
import classNames from 'classnames'
// import HomeAllProductsGrid from '@components/common/HomeAllProductsGrid'
import type { GetStaticPropsContext, InferGetStaticPropsType } from 'next'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
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
          : i === 1
          ? {
              label: {
                position: 'top right',
                text: 'Out Of Stock',
                variant: 'new',
              },
            }
          : i === 2
          ? {
              label: {
                position: 'top right',
                text: 'discount',
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
const featuredImages = [
  { src: '/Living-Room-400x560.jpg', width: '400', height: '560' },
  { src: '/Kitchen-1-400x400.jpg', width: '400', height: '400' },
  { src: '/Bedroom-440x440.jpg', width: '440', height: '440' },
  { src: '/Bathroom-580x400.jpg', width: '580', height: '400' },
  { src: '/Accessories-400x560.jpg', width: '400', height: '560' },
]
const featuredSubImages = [
  null,
  { src: '/Kitchen-2-200x200.jpg', width: 200, height: 200 },
  null,
  null,
  null,
]
const featured = [
  ['Living Room', 'Find Your Favorite', 'Explore Now'],
  ['Kitchen', 'Your Future Favorites', 'Shop Now'],
  ['Bedroom', 'Comfort is A Place Called Home', 'Explore Now'],
  ['Bathroom', 'All New, Picked Just For You', 'See Our News'],
  ['Accessories', 'Great Design Accessible For All', 'Explore Now'],
].map(([label, title, actionText], i) => ({
  label,
  image: featuredImages[i],
  subImage: featuredSubImages[i],
  title,
  actionText,
  column: i < 2 ? 'left' : 'right',
}))
const AdsBannerModal = () => {
  const [open, setOpen] = useState(false)
  useEffect(() => {
    setTimeout &&
      setTimeout(() => {
        setOpen(true)
      }, 2000)
  }, [])
  if (!open) return null
  return (
    <Modal
      open={open}
      onClose={() => {
        setOpen(false)
      }}
    >
      <div className="w-full h-full absolute inset-0 ">
        <Image layout="fill" src="/2.jpg" objectFit="cover" />
      </div>
      <div className="w-screen max-w-full " />
      <div style={{ width: 600 }} className="max-w-full p-8 isolate mx-auto">
        <h3 className="text-center text-4xl lg:text-4xl md:font-bold">
          Get 10% Off & Free Delivery
        </h3>
        <p className="pt-6 pb-12 text-center lg:text-xl">
          For All New Email Subscribers
        </p>
        <div className="flex flex-col md:flex-row w-full">
          <input
            type="email"
            placeholder="Your email address"
            className="w-full flex-1 md:py-4 py-2 px-5 border-black block bg-accents-0 border rounded-none hover:shadow-inner focus:shadow-inner"
          ></input>
          <div className="h-3 md:hidden" />
          <Button className="block w-full  md:w-auto" variant="slim">
            Subscribe
          </Button>
        </div>
      </div>
    </Modal>
  )
}
export default function Home({
  hero,
  bestSelling,
  blogs,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const renderFeaturedItem = (
    { label, title, actionText, column, image, subImage }: any,
    i: number
  ) => {
    const hasSubImage = Boolean(subImage && subImage.src)
    return (
      <Container key={i + 1}>
        <div
          className={classNames('w-full relative max-w-lg', {
            'mr-auto': column === 'left',
            'ml-auto': column === 'right',
          })}
        >
          {hasSubImage && <div className="h-4 md:h-12" />}
          <div
            className={classNames(
              'flex px-4 items-center justify-center w-full flex-shrink-0 flex-col relative',
              {
                ' md:pr-12': column === 'left',
                ' md:pl-12': column === 'right',
              }
            )}
          >
            <div className="w-full h-full relative">
              <Image
                className="bg-accents-2 "
                layout="responsive"
                objectFit="cover"
                quality="100"
                {...image}
              />
            </div>
            <div className="w-full flex flex-col justify-center space-y-2 mt-6">
              <div className="text-xl md:text-2xl">{title}</div>
              <div>
                <Button variant="link" className="md:text-lg">
                  {actionText}
                </Button>
              </div>
            </div>
            {column === 'left' && (
              <div className="absolute text-sm md:text-lg top-0 leading-6 -left-3 transform -rotate-90 -translate-x-full origin-top-right">
                {label}
              </div>
            )}
            {column === 'right' && (
              <div className="absolute text-sm md:text-lg top-0 leading-6 right-4 transform -rotate-90 origin-top-right">
                {label}
              </div>
            )}
          </div>
          {hasSubImage && (
            <div className="absolute top-0 right-0 w-36 h-36">
              <Image
                layout="responsive"
                objectFit="cover"
                quality="85"
                {...subImage}
              />
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
        <div className="absolute inset-0 pointer-events-none hidden md:block">
          <Container className=" h-full">
            <div className="w-full h-full relative">
              <div className="pointer-events-auto flex flex-col h-full absolute left-full top-0">
                <div className="flex-1"></div>
                <div className="flex-1 flex justify-center items-center space-y-4 flex-col text-sm">
                  <span className="hover-effect-1 rounded-full">
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
                  <span className="hover-effect-1 rounded-full">
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
                  <span className="hover-effect-1 rounded-full">
                    <Facebook />
                  </span>
                  <span className="hover-effect-1 rounded-full">
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
                      style={
                        {
                          '--tw-translate-y': '-250%',
                          lineHeight: '32px',
                          bottom: '-20px',
                        } as any
                      }
                      className="absolute left-0 transform rotate-90 origin-bottom-left"
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
      <Container
        clean
        className="mx-auto max-w-7xl grid grid-cols-1 sm:grid-cols-2 gap-12 md:gap-0 "
      >
        <div className="w-full col-span-1 space-y-12 md:space-y-16">
          {featured
            .filter((item: any, i) => item.column === 'left')
            .map(renderFeaturedItem)}
          <Container className="relative py-12">
            <div className="absolute inset-0">
              <Image
                layout="fill"
                objectFit="contain"
                src="/newsletter.png"
              ></Image>
            </div>
            <div className="flex px-4 items-center justify-center w-full flex-shrink-0 flex-col relative max-w-sm mx-auto">
              <Subscribe />
            </div>
          </Container>
        </div>
        <div className="w-full col-span-1 space-y-12 md:space-y-16">
          {featured
            .filter((item: any, i) => item.column === 'right')
            .map(renderFeaturedItem)}
        </div>
      </Container>
      <div style={{ backgroundColor: '#daeaf2' }}>
        <Container className="py-12 space-y-6 md:space-y-10 ">
          <div className="flex space-x-3 justify-between items-baseline">
            <h2 className="text-xl capitalize">Top picks for your</h2>
            <div className="text-xs uppercase">see all products</div>
          </div>
          <ProductSlider2>
            {bestSelling.map((product, i) => {
              return (
                <ProductCard2
                  key={i}
                  label={product.label as any}
                  product={product}
                />
              )
            })}
          </ProductSlider2>
        </Container>
      </div>
      <Container className="py-8 lg:py-12 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="col-span-1 group relative">
          <Image
            className="group-hover:scale-110 transform transition-transform duration-1000 ease-in-out"
            width={640}
            height={400}
            layout="responsive"
            src={'/Campaign-1.jpg'}
          ></Image>
          <div className="absolute inset-0 p-6 space-y-6">
            <div className="text-xl lg:text-3xl font-semibold max-w-sm">
              Welcome friends and invite good times.
            </div>
            <div>
              <Button className="text-xl" variant="link">
                Shop This Room
              </Button>
            </div>
          </div>
        </div>
        <div className="col-span-1 group relative">
          <Image
            className="group-hover:scale-110 transform transition-transform duration-1000 ease-in-out"
            width={640}
            height={400}
            layout="responsive"
            src={'/Campaign-2.jpg'}
          ></Image>
          <div className="absolute inset-0 p-6 space-y-6">
            <div className="text-xl lg:text-3xl font-semibold max-w-sm">
              A minimalistic design featuring masculine
            </div>
            <div>
              <Button className="text-xl" variant="link">
                Shop Now
              </Button>
            </div>
          </div>
        </div>
      </Container>
      <Container className="py-6 md:py-12 space-y-6 md:space-y-10">
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
      <Container className="py-6 md:py-12 space-y-6 md:space-y-10">
        <Title small center>
          Our Blog
        </Title>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:flex-row gap-4 mt-6">
          {blogs.map((article, i) => {
            return <Article key={i} article={article} tags={article?.tags} />
          })}
        </div>
      </Container>
      <AdsBannerModal />
    </div>
  )
}

Home.Layout = Layout
Home.renderNavbar = () => <Navbar transparent />
