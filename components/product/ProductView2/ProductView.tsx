import type { Product } from '@commerce/types'
import { ActionButton, Gallery, Title } from '@components/common'
import { Facebook, Heart, Pinterest, Twitter } from '@components/icons'
import { ProductCard, ProductSlider2, Swatch } from '@components/product'
import { Button, Container, Text, useUI } from '@components/ui'
import Link from '@components/ui/Link'
import { useAddItem } from '@framework/cart'
import { NextSeo } from 'next-seo'
import dynamic from 'next/dynamic'
import Image from 'next/image'
import { FC, useState } from 'react'
import { Tab, TabList, TabPanel, TabsProps } from 'react-tabs'
import { getVariant, SelectedOptions } from '../helpers'
import s from './ProductView.module.css'
const Tabs = dynamic<TabsProps>(
  import('react-tabs').then((mod) => mod.Tabs),
  { ssr: false }
) // disable ssr
interface Props {
  className?: string
  children?: any
  product: Product
  relatedProducts: Product[]
}

const ProductView: FC<Props> = ({ product, relatedProducts }) => {
  const addItem = useAddItem()
  const { openSidebar, setModalView } = useUI()
  const [loading, setLoading] = useState(false)
  const [choices, setChoices] = useState<SelectedOptions>({
    size: null,
    color: null,
  })

  // Select the correct variant based on choices
  const variant = getVariant(product, choices)
  const addToCart = async () => {
    setLoading(true)
    try {
      await addItem({
        productId: String(product.id),
        variantId: String(variant ? variant.id : product.variants[0].id),
      })
      setModalView('CART')
      openSidebar()
      setLoading(false)
    } catch (err) {
      setLoading(false)
    }
  }
  const [open, setOpen] = useState<boolean>()
  const [index, setIndex] = useState<number>(0)
  const handleOpenGallery = (index: number) => {
    setOpen(true)
    setIndex(index)
  }
  return (
    <div className="fit space-y-2xl">
      <NextSeo
        title={product.name}
        description={product.description}
        openGraph={{
          type: 'website',
          title: product.name,
          description: product.description,
          images: [
            {
              url: product.images[0]?.url!,
              width: 800,
              height: 600,
              alt: product.name,
            },
          ],
        }}
      />
      <Container className=" grid gap-12 grid-cols-12 ">
        <div className="col-span-full lg:col-span-7 md:col-span-1">
          <div className="w-full relative" style={{ paddingTop: '80%' }}>
            <div className="absolute w-full h-full top-0 left-0 flex">
              <div className="w-1/6 flex flex-col z-10 ">
                {new Array(5).fill(product.images).map((arr, i) => {
                  const image = arr[i]
                  if (image) {
                    return (
                      <div key={i} className="group pr-3 pb-3">
                        <div
                          className="w-full  flex relative "
                          style={{ paddingTop: '100%' }}
                        >
                          <div
                            key={image.url}
                            className=" border border-accents-2 group-hover:border-primary group-hover:shadow-outline-normal absolute left-0 top-0 w-full h-full flex-1 fadeIn animated"
                          >
                            <Image
                              layout="responsive"
                              src={image.url!}
                              alt={image.alt || 'Product Image'}
                              width={80}
                              objectFit="cover"
                              height={80}
                              priority={i === 0}
                              quality="85"
                            />
                          </div>
                        </div>
                        <div
                          onClick={() => {
                            handleOpenGallery(i)
                          }}
                          className="hidden group-hover:block  right-0 top-0 absolute w-5/6  bg-accents-0"
                        >
                          <div
                            className="w-full"
                            style={{ paddingTop: '100%' }}
                          >
                            <div className="absolute top-0 right-0 w-full h-full flex-1 border border-gray-300">
                              <Image
                                className={s.img}
                                src={image.url!}
                                alt={image.alt || 'Product Image'}
                                width={800}
                                height={800}
                                priority={i === 0}
                                quality="85"
                                objectFit="contain"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    )
                  }
                  return <div key={i} className="flex-1" />
                })}
              </div>
              <div className="w-5/6 bg-accents-0">
                <div
                  onClick={() => {
                    handleOpenGallery(0)
                  }}
                  className="w-full flex-1 relative"
                  style={{ paddingTop: '100%' }}
                >
                  <div className="flex-1 absolute top-0 right-0 w-full h-full fadeIn animated">
                    <Image
                      className={s.img}
                      src={product.images[0]?.url!}
                      alt={product.images[0]?.alt || 'Product Image'}
                      width={800}
                      height={800}
                      quality="85"
                      objectFit="contain"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-full lg:col-span-5 md:col-span-1 space-y-6 relative">
          <div className="py-8 hidden lg:flex items-center text-xs text-accents-6">
            <div>Home</div>
            <div>
              <svg width="1em" height="1em" viewBox="2 2 10 10">
                <path d="M9.156 7l-2.5 3.125-.669-.536L8.058 7 5.987 4.411l.669-.536z"></path>
                <path fill="none" d="M2 2h10v10H2z"></path>
              </svg>
            </div>
            <div>Living room</div>
            <div>
              <svg width="1em" height="1em" viewBox="2 2 10 10">
                <path d="M9.156 7l-2.5 3.125-.669-.536L8.058 7 5.987 4.411l.669-.536z"></path>
                <path fill="none" d="M2 2h10v10H2z"></path>
              </svg>
            </div>
            <div>Chair</div>
          </div>

          <div className="space-y-sm">
            <h1 className="text-2xl">{product.name}</h1>
            <div className="break-words w-full max-w-xl text-sm">
              <Text html={product.description} />
            </div>
            <label className="flex items-baseline space-x-3">
              <div className="flex items-center mt-1">
                <svg
                  className="mx-1 w-2 h-2 fill-current text-yellow-500"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                </svg>
                <svg
                  className="mx-1 w-2 h-2 fill-current text-yellow-500"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                </svg>
                <svg
                  className="mx-1 w-2 h-2 fill-current text-yellow-500"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                </svg>
                <svg
                  className="mx-1 w-2 h-2 fill-current text-yellow-500"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                </svg>
                <svg
                  className="mx-1 w-2 h-2 fill-current text-gray-400"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                </svg>
              </div>
              <span className="text-xs  text-accents-6 font-semibold">
                5 Cusstomer reviews
              </span>
            </label>
            <div className="text-2xl">
              <span>{product.price.value}</span>{' '}
              <span>{product.price.currencyCode}</span>
            </div>
          </div>
          <div className="space-y-4">
            {product.options?.map((opt) => (
              <div className="flex items-center" key={opt.displayName}>
                <h2 className="text-accents-6 text-xs uppercase w-1/3">
                  {opt.displayName}
                </h2>
                <div className="flex flex-row flex-wrap space-y-2 space-y-reverse">
                  {opt.values.map((v, i: number) => {
                    const active = (choices as any)[
                      opt.displayName.toLowerCase()
                    ]
                    return (
                      <Swatch
                        className="flex-shrink-0"
                        key={`${opt.id}-${i}`}
                        active={v.label.toLowerCase() === active}
                        variant={opt.displayName}
                        color={v.hexColors ? v.hexColors[0] : ''}
                        label={v.label}
                        onClick={() => {
                          setChoices((choices) => {
                            return {
                              ...choices,
                              [opt.displayName.toLowerCase()]: v.label.toLowerCase(),
                            }
                          })
                        }}
                      />
                    )
                  })}
                  <div />
                </div>
              </div>
            ))}
          </div>
          <div className="flex flex-wrap lg:flex-nowrap justify-between space-y-md lg:space-y-0">
            <div className="bg-accents-1 w-full lg:w-auto border border-accents-5 flex focus-within:border-black items-stretch">
              <button className="z-10 text-accents-6 w-10 flex justify-center hover:text-primary focus:outline-none  cursor-pointer  items-center text-xl font-semibold p-3">
                -
              </button>
              <input
                type="number"
                pattern="\d*"
                defaultValue={1}
                className="flex-1 appearance-none focus:outline-none text-center px-3 bg-transparent "
              ></input>
              <button className="z-10 text-accents-6 w-10 flex justify-center hover:text-primary focus:outline-none cursor-pointer  items-center text-xl font-semibold p-3">
                +
              </button>
            </div>
            <Button
              className="order-1 px-6 text-center lg:ml-6 mt-6 lg:mt-0 w-full lg:w-0 m-0 lg:order-none lg:flex-1 flex-none truncate"
              aria-label="Add to Cart"
              type="button"
              onClick={addToCart}
              loading={loading}
              disabled={!variant && product.options.length > 0}
            >
              Add to Cart
            </Button>
            {process.env.COMMERCE_WISHLIST_ENABLED && (
              <div className="lg:hidden absolute -top-6 right-0">
                <ActionButton
                  className="flex-shrink-0 border border-black hover:border-primary"
                  tooltip={'add wishlist'}
                >
                  <Heart />
                </ActionButton>
              </div>
            )}
          </div>
          <div className="space-y-6 flex flex-wrap items-baseline space-x-3 space-x-reverse">
            <div className="flex-1 text-accents-6 text-xs uppercase">Share</div>
            <div className="flex space-x-3">
              <span className="hover-effect-1">
                <Facebook />
              </span>
              <span className="hover-effect-1">
                <Twitter />
              </span>
              <span className="hover-effect-1">
                <Pinterest />
              </span>
            </div>
          </div>
          <div className="border-b border-accents-3" />
          <div className="space-y-2 text-xs uppercase">
            <div className="flex items-baseline space-x-3">
              <div className="text-accents-6 w-1/3">SKU</div>{' '}
              <div className="flex-1">502</div>
            </div>
            <div className="flex items-baseline space-x-3">
              <div className="text-accents-6 w-1/3">Categories</div>{' '}
              <div className="flex-1">
                <Link href="/search?q=Furniture">Furniture</Link>,{' '}
                <Link href="/search?q=Table">Table</Link>
              </div>
            </div>
            <div className="flex items-baseline space-x-3">
              <div className="text-accents-6 w-1/3">Tag</div>{' '}
              <div className="flex-1">
                <Link href="/search?q=Pottery">Pottery</Link>
              </div>
            </div>
          </div>
          <div className="h-12"></div>
        </div>
      </Container>

      <Container>
        <div className="border-b border-accents-3 mb-12" />
        <Tabs className="lg:flex lg:space-x-6">
          <TabList className="flex lg:w-48 flex-shrink-0 flex-col items-start overflow-auto  space-y-3 md:items-baseline  mb-xl">
            <Tab
              key="Detail"
              className=" cursor-pointer text-effect-1"
              selectedClassName="text-effect-1_active"
            >
              Description
            </Tab>
            <Tab
              key="info"
              className=" cursor-pointer text-effect-1"
              selectedClassName="text-effect-1_active"
            >
              Addition Infomations
            </Tab>
            <Tab
              key="review"
              className=" cursor-pointer text-effect-1"
              selectedClassName="text-effect-1_active"
            >
              Reviews(3)
            </Tab>
          </TabList>
          <div className="flex-1 lg:pl-12 border-l border-accents-3">
            <TabPanel key="Detail">
              <div className="grid  gap-md grid-cols-5 items-center">
                <div className="col-span-full md:col-span-3">
                  <Text className="inline-block" variant="sectionHeading">
                    Detail
                  </Text>
                  <Text variant="body">
                    Nam libero tempore, cum soluta nobis est eligendi optio
                    cumque nihil impedit quo minus id quod maxime placeat facere
                    possimus, omnis voluptas assumenda est, omnis dolor
                    repellendus. Temporibus autem quibusdam et aut officiis
                    debitis aut rerum omnis voluptas assumenda.
                  </Text>
                </div>
                <div className="col-span-full md:col-span-2">
                  <Image
                    className={s.img}
                    src={product.images[0]?.url!}
                    alt={product.images[0]?.alt || 'Product Image'}
                    width={1050}
                    height={1050}
                    quality="85"
                    objectFit="cover"
                  />
                </div>
              </div>
              <div className="my-xl border-b border-accents-4"></div>
              <div className="grid  gap-md grid-cols-5 items-center">
                <div className="col-span-full md:col-span-3">
                  <Text className="inline-block" variant="sectionHeading">
                    Features
                  </Text>
                  <Text variant="body">
                    <ul className="list-disc list-inside">
                      <li>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit
                      </li>
                      <li>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit
                      </li>
                      <li>
                        Lorem ipsum dolor sit1amet, consectetur adipisicing elit
                      </li>
                      <li>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit
                      </li>
                    </ul>
                  </Text>
                </div>
                <div className="col-span-full md:col-span-2">
                  <Image
                    className={s.img}
                    src={product.images[1]?.url!}
                    alt={product.images[1]?.alt || 'Product Image'}
                    width={1050}
                    height={1050}
                    quality="85"
                    objectFit="cover"
                  />
                </div>
              </div>
            </TabPanel>
            <TabPanel key="info">
              <div className="grid grid-cols-2 gap-3 md:gap-6 max-w-lg">
                <div className="col-span-full md:col-span-1">
                  <span className="font-semibold">Weight</span> 1.2 kg
                </div>
                <div className="col-span-full md:col-span-1">
                  <span className="font-semibold">Dimensions</span> 12 × 2 × 1.5
                  cm
                </div>
              </div>
            </TabPanel>
            <TabPanel key="review">
              <div className="space-y-6">
                {new Array(3).fill(
                  <div className="space-y-2">
                    <div className="flex space-x-4 items-baseline">
                      <div>Chris Ames</div>
                      <div className="text-xs uppercase font-semibold flex-1 text-accents-6">
                        September 14, 2018
                      </div>
                      <div>
                        <div className="flex items-center mt-1">
                          <svg
                            className="mx-1 w-2 h-2 fill-current text-yellow-500"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                          >
                            <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                          </svg>
                          <svg
                            className="mx-1 w-2 h-2 fill-current text-yellow-500"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                          >
                            <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                          </svg>
                          <svg
                            className="mx-1 w-2 h-2 fill-current text-yellow-500"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                          >
                            <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                          </svg>
                          <svg
                            className="mx-1 w-2 h-2 fill-current text-yellow-500"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                          >
                            <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                          </svg>
                          <svg
                            className="mx-1 w-2 h-2 fill-current text-gray-400"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                          >
                            <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <p className="text-accents-6 text-sm">
                      Hanc ergo intuens debet institutum illud quasi signum
                      absolvere. Sed quid attinet de rebus tam apertis plura
                      requirere? Quam illa ardentis amores excitaret sui! Cur
                      tandem? A primo, ut opinor, animantium ortu petitur origo
                      summi boni.
                    </p>
                  </div>
                )}
                <div>
                  <Text variant="sectionHeading">Add a review</Text>
                  <Text variant="body">
                    Your email address will not be published. Required fields
                    are marked *
                  </Text>
                  <div className="grid py-6 grid-cols-2 gap-6 max-w-lg">
                    <label className="block col-span-full md:col-span-1">
                      <span className="text-gray-700">Your rating</span>
                      <div className="flex items-center mt-1">
                        <svg
                          className="mx-1 w-4 h-4 fill-current text-yellow-500"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                        >
                          <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                        </svg>
                        <svg
                          className="mx-1 w-4 h-4 fill-current text-yellow-500"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                        >
                          <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                        </svg>
                        <svg
                          className="mx-1 w-4 h-4 fill-current text-yellow-500"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                        >
                          <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                        </svg>
                        <svg
                          className="mx-1 w-4 h-4 fill-current text-yellow-500"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                        >
                          <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                        </svg>
                        <svg
                          className="mx-1 w-2 h-2 fill-current text-gray-400"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                        >
                          <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                        </svg>
                      </div>
                    </label>
                    <label className="block col-span-full">
                      <span className="text-gray-700">
                        Your review <span>*</span>
                      </span>
                      <textarea
                        className="mt-1 border border-black py-2 px-3 block w-full rounded-md  shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                        rows={4}
                      ></textarea>
                    </label>
                    <label className="block col-span-full md:col-span-1">
                      <span className="text-gray-700">
                        Your Name <span>*</span>
                      </span>
                      <input
                        type="email"
                        className="mt-1 border border-black py-2 px-3 block w-full rounded-md  shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                        placeholder="john@example.com"
                      />
                    </label>
                    <label className="bloc col-span-full md:col-span-1">
                      <span className="text-gray-700">
                        Your Email <span>*</span>
                      </span>
                      <input
                        type="email"
                        className="mt-1 border border-black py-2 px-3 block w-full rounded-md  shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                        placeholder="john@example.com"
                      />
                    </label>
                    <div className="block col-span-full mb-6">
                      <Button variant="slim">Submit</Button>
                    </div>
                  </div>
                </div>
              </div>
            </TabPanel>
          </div>
        </Tabs>
      </Container>
      <Container className="py-6 lg:py-12 space-y-6 lg:space-y-10">
        <Title small center>
          Related products
        </Title>
        <ProductSlider2>
          {relatedProducts.map((product, i) => {
            return (
              <ProductCard
                key={i}
                label={product.label as any}
                product={product}
              />
            )
          })}
        </ProductSlider2>
      </Container>
      {open && (
        <Gallery
          images={product.images}
          onClose={() => setOpen(false)}
          index={index}
        />
      )}
    </div>
  )
}

export default ProductView
