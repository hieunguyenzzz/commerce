import usePrice from '@commerce/product/use-price'
import type { Product } from '@commerce/types'
import { Breadcrumb, Gallery } from '@components/common'
import { SizeGuide } from '@components/icons'
import AdsSignupView from '@components/others/AdsSignup'
import { ProductCard, ProductSlider2, Swatch } from '@components/product'
import { Button, Container, Text, useUI } from '@components/ui'
import { useAddItem } from '@framework/cart'
import { NextSeo } from 'next-seo'
import dynamic from 'next/dynamic'
import Image from 'next/image'
import { FC, useState } from 'react'
import { TabsProps } from 'react-tabs'
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
const ProductImages = ({
  product,
  width,
  height,
}: {
  product: Product
  width: number
  height: number
}) => {
  const [open, setOpen] = useState<boolean>()
  const [index, setIndex] = useState<number>(0)
  const handleOpenGallery = (index: number) => {
    setOpen(true)
    setIndex(index)
  }
  let ratio = height / width
  const paddingTop = `${ratio * 100}%`
  return (
    <div className="w-full relative">
      {open && (
        <Gallery
          images={product.images}
          onClose={() => setOpen(false)}
          index={index}
        />
      )}
      <div className="w-full h-full top-0 left-0 flex">
        <div className="w-1/6 flex flex-col z-10">
          {new Array(5).fill(product.images).map((arr, i) => {
            const image = arr[i]
            if (image) {
              return (
                <div
                  key={i}
                  className="group pr-responsive-md pb-responsive-md lg:pr-5 lg:pb-5"
                >
                  <div className="w-full  flex relative border group-hover:border-black group-hover:shadow-outline-normal ">
                    <div
                      style={{
                        paddingTop,
                      }}
                    />
                    <div className="absolute inset-0">
                      <Image
                        layout="fill"
                        className="border border-accents-2 fadeIn animated"
                        src={image.url!}
                        sizes="(max-width: 400px) 100px, 100px"
                        alt={image.alt || 'Product Image'}
                        objectFit="cover"
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
                      style={{
                        paddingTop,
                      }}
                    >
                      <div className="absolute top-0 right-0 w-full h-full flex-1">
                        <Image
                          layout="responsive"
                          className={s.img}
                          src={image.url!}
                          alt={image.alt || 'Product Image'}
                          width={width}
                          height={height}
                          priority={i === 0}
                          quality="85"
                          objectFit="cover"
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
            style={{ paddingTop }}
          >
            <div className="flex-1 absolute top-0 right-0 w-full h-full fadeIn animated">
              <Image
                layout="responsive"
                className={s.img}
                src={product.images[0]?.url!}
                alt={product.images[0]?.alt || 'Product Image'}
                width={width}
                height={height}
                quality="85"
                objectFit="cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
const ProductView: FC<Props> = ({ product, relatedProducts }) => {
  const addItem = useAddItem()
  const { openSidebar, setModalView } = useUI()
  const [loading, setLoading] = useState(false)
  const [choices, setChoices] = useState<SelectedOptions>({
    size: null,
    color: null,
  })

  const { price } = usePrice({
    amount: product.price.value,
    baseAmount: 1,
    currencyCode: product.price.currencyCode || '$',
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

  return (
    <>
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
      <Container className="pt-md mb-6">
        <Breadcrumb>SHOP/ All/ {product.name}</Breadcrumb>
      </Container>
      <div className="fit  space-y-2xl">
        <Container
          small
          className="grid gap-12 lg:gap-5 grid-cols-1 lg:grid-cols-12 "
        >
          <div className="lg:col-span-7 md:col-span-1">
            <ProductImages product={product} width={510} height={880} />
          </div>
          <div className="lg:col-span-5 md:col-span-1 space-y-5.5 relative">
            <div className="space-y-1">
              <Text variant="h5">{product.name}</Text>
              <div className="uppercase">
                {/* <span>{product.price.value}</span>{' '}
                <span>{product.price.currencyCode}</span> */}
                {price} {product.price.currencyCode}
              </div>
            </div>
            <div className="break-words w-full max-w-xl">
              <Text html={product.description} />
            </div>
            <div className="space-y-4">
              {product.options?.map((opt) => {
                const label = opt.displayName.toLowerCase()
                return (
                  <div>
                    <div className="flex items-baseline" key={opt.displayName}>
                      <h2 className="w-1/3 text-lg font-bold capitalize">
                        {label}
                      </h2>
                      <div className="flex items-baseline flex-row flex-wrap space-y-2 space-y-reverse">
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
                    {opt.displayName === 'SIZE' && (
                      <div className="space-x-xs flex items-center mt-1">
                        <span className="text-lg">
                          <SizeGuide />
                        </span>
                        <span className="text-xxs">SIZE GUIDE</span>
                      </div>
                    )}
                  </div>
                )
              })}
            </div>
            <div className="flex flex-col md:flex-row lg:flex-nowrap justify-between space-y-md lg:space-y-0">
              <Button
                className="order-1 px-6 text-center mt-6 lg:mt-0 w-full lg:w-0 m-0 lg:order-none flex-1  truncate"
                aria-label="Add to Cart"
                type="button"
                onClick={addToCart}
                loading={loading}
                disabled={!variant && product.options.length > 0}
              >
                Add to Cart
              </Button>
            </div>

            <div className="space-y-md  mt-responsive-lg lg:mt-2xl">
              <div className="h-3"></div>
              {[`Details`, `Size & Fit`, `Fabric`, `Shipping & Returns`].map(
                (str) => (
                  <div className="w-full">
                    <div className="font-bold border-b border-black w-full">
                      <div className="py-1 text-h5 text-effect-1 capitalize">
                        {str}
                      </div>
                    </div>
                  </div>
                )
              )}
            </div>
            <div className="h-12"></div>
          </div>
        </Container>
        <Container small className="py-6 lg:py-12 space-y-6 lg:space-y-10">
          <Text variant="h4" className="text-center">
            YOU MAY ALSO LIKE
          </Text>
          <div className="-m-2">
            <ProductSlider2>
              {relatedProducts.map((product, i) => {
                return (
                  <div className="p-2">
                    <ProductCard
                      key={i}
                      label={product.label as any}
                      product={product}
                    />
                  </div>
                )
              })}
            </ProductSlider2>
          </div>
        </Container>
      </div>
      <Container small>
        <div className="h-24"></div>
        <AdsSignupView />
        <div className="h-24"></div>
      </Container>
    </>
  )
}

export default ProductView
