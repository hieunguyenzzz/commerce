import type { Product } from '@commerce/types'
import Image, { ImageProps } from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

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

const Label: FC<LabelProps> = ({ variant = 'default', text }) => {
  if (variant === 'out-of-stock')
    return (
      <div className="text-xs py-1 px-4 bg-black text-white absolute top-4 right-4">
        {text}
      </div>
    )
  if (variant === 'new')
    return (
      <div className="text-xs flex items-center  justify-center w-8 h-8 rounded-full bg-yellow-600 text-white absolute top-4 right-4">
        {text}
      </div>
    )
  if (variant === 'discount')
    return (
      <div className="text-xs flex items-center justify-center w-8 h-8 rounded-full  text-white absolute top-4 right-4">
        {text}
      </div>
    )
  if (variant === 'default')
    return (
      <div className="text-xs py-1 px-4 bg-black text-white absolute top-4 right-4">
        {text}
      </div>
    )
  return null
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
  const sizes = product.options.flatMap((opt) =>
    opt.displayName.toLowerCase() === 'size'
      ? opt.values.map((value) => value.label)
      : []
  )
  return (
    <div {...props}>
      <div className="group w-full h-full flex flex-col hover:bg-white transition-all duration-600 ease-in-out">
        <div className="flex relative items-center w-full bg-gray-100">
          <div style={{ paddingTop: (358 / 253) * 100 + '%' }} />
          <Image
            layout="fill"
            objectFit="cover"
            quality="85"
            src={product.images[0].url || placeholderImg}
            alt={product.name || 'Product Image'}
          />
          {label && <Label {...label} />}
        </div>
        <div className="relative group-hover:bg-white py-4 transform transition-all duration-300 ease-in-out">
          <div className="w-full text-left bg-white flex-wrap justify-between text-xs flex opacity-0 group-hover:opacity-100 translate-y-0 transform group-hover:-translate-y-full absolute left-0 top-0 transition-all duration-300 ease-in-out p-2 py-2">
            {sizes.map((size) => (
              <div className="text-xs lg:text-base px-3" children={size} />
            ))}
          </div>
          <div className="space-y-1">
            <Link href={`/product/${product.slug}`}>
              <h2 className="header-2 uppercase">{product.name}</h2>
            </Link>
            <div className="text-sm mt-1 ">
              <span>{product.price.value}</span>{' '}
              <span>{product.price.currencyCode}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductCard
