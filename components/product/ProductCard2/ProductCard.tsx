import type { Product } from '@commerce/types'
import classNames from 'classnames'
import Image, { ImageProps } from 'next/image'
import Link from 'next/link'
import { FC } from 'react'
import { getSizeRange } from '../helpers'

const placeholderImg = '/product-img-placeholder.svg'

interface LabelProps {
  variant?: 'default' | 'out-of-stock' | 'discount' | 'new'
  text: string
  position?: string
}
interface Props {
  className?: string
  product: Product
  variant?: 'slim' | 'simple'
  size?: 'small' | 'large'
  label?: LabelProps
  imgProps?: Omit<ImageProps, 'src'>
}

const ProductCard: FC<Props> = ({
  className,
  product,
  variant,
  imgProps,
  label,
  size,
  ...props
}) => {
  return (
    <Link href={`/product/${product.slug}`} {...props}>
      <a className="group w-full h-full flex flex-col hover:bg-white transition-all duration-600 ease-in-out">
        <div className="flex relative items-center w-full bg-gray-100">
          <div style={{ paddingTop: (358 / 253) * 100 + '%' }} />
          <Image
            layout="fill"
            objectFit="cover"
            quality="85"
            src={product.images[0].url || placeholderImg}
            alt={product.name || 'Product Image'}
          />
        </div>
        <div className="relative group-hover:bg-white py-4 transform transition-all duration-300 ease-in-out">
          <div className="w-full bg-white pointer-events-none  text-center justify-center text-xs flex opacity-0 group-hover:opacity-100 translate-y-0 transform group-hover:-translate-y-full absolute left-0 top-0 transition-all duration-300 ease-in-out p-2">
            {getSizeRange(product).map(({ label, available }) => (
              <div
                className={classNames(
                  'text-xs lg:text-base px-1 flex-1',
                  !available && 'text-accents-4'
                )}
                children={label}
              />
            ))}
          </div>
          <div className="space-y-1">
            <h2 className="header-2 uppercase">{product.name}</h2>
            <div className="text-sm mt-1 ">
              <span>{product.price.value}</span>{' '}
              <span>{product.price.currencyCode}</span>
            </div>
          </div>
        </div>
      </a>
    </Link>
  )
}

export default ProductCard
