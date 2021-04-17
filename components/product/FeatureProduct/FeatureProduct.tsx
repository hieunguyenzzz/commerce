import { FC } from 'react'
import cn from 'classnames'
import Link from 'next/link'
import Image, { ImageProps } from 'next/image'
import type { Product } from '@commerce/types'
import { BsArrowRight } from 'react-icons/bs'

// const placeholderImg = '/product-img-placeholder.svg'

interface Props {
  products: any
}

const FeatureProduct: FC<Props> = ({ ...props }) => {
  const { products } = props
  return (
    <>
      {products.slice(0, 3).map((item, index) => (
        <div className="pt-12 sm:pt-120 " key={index}>
          <div className="px-6 sm:px-12 w-full grid grid-cols-1 md:grid-cols-2 gap-4 mx-auto container">
            <div
              className={`${++index % 2 === 0 ? 'order-last' : ''} text-center`}
            >
              <Image
                src={item?.images[0].url}
                width={400}
                height={400}
                className="transform hover:scale-120 duration-700"
              />
            </div>

            <div className="mt-4 order-1">
              <h4 className="font-bold text-gray-500 text-sm">
                FEATURE PRODUCT
              </h4>
              <h2 className="mt-2 text-4xl fold-extrabold">{item?.name}</h2>
              <hr className="w-14 my-4 border-2 border-primary-new" />
              <p className=" pt-4">{item?.description}</p>
              <Link href={`product${item?.path}`}>
                <a
                  className="mt-4 px-4 py-2 border-2 border-black	
                flex w-8/12 sm:w-4/12 md:w-6/12 justify-center hover:bg-black hover:text-white duration-300	transform"
                >
                  Only ${item?.price?.value}
                  <BsArrowRight size={21} className="ml-2" />
                </a>
              </Link>
            </div>
          </div>
          <div
            className={`w-full h-12 flex ${
              ++index % 2 === 0 ? 'justify-end' : ''
            }`}
          >
            <Image
              src="https://live.hasthemes.com/html/7/helendo-preview/helendo/assets/images/text-bg/bg-df-1-300x49.png"
              width={250}
              height={121}
              className=""
            />
          </div>
        </div>
      ))}
    </>
  )
}

export default FeatureProduct
