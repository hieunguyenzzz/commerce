import type { Collection, Product } from '@commerce/types'
import { getProductLink, placeholderImg } from '@components/product/helpers'
import classNames from 'classnames'
import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'
import s from './CollectionView.module.css'
interface Props {
  children?: any
  collection: Collection
  categories: Collection[]
  products: Product[]
}

const CollectionView: FC<Props> = ({ collection, categories, products }) => {
  return (
    <>
      <div className={classNames(s.root, 'collection')}>
        <style>
          {`
              .collection{
                text-align:center;
              }
              .collection iframe{
                width: 100vw;
                height: 48.8vw;
              }
              .collection p{
                max-width:64ch;
                margin:auto;
                padding-left:1.2rem;
                padding-right:1.2rem
              }
              .collection h1{
                font-size:24px;
                padding:25px;
              }
              .collection .description{
                font-size:14px;
              }
              .collection .credit{
                font-size:12px
              }
          `}
        </style>
        <div
          dangerouslySetInnerHTML={{ __html: collection.descriptionHtml }}
        ></div>
      </div>
      <div>
        {new Array(7).fill(products).map((products, i) => {
          const product = products[i]
          return (
            <Link href={getProductLink(product.slug)} key={i}>
              <a className="pl-[16px] md:px-[8px] block">
                <div className="flex relative items-center w-full bg-gray-100">
                  <div style={{ paddingTop: (223 / 157) * 100 + '%' }} />
                  <Image
                    layout="fill"
                    objectFit="cover"
                    quality="85"
                    sizes="(max-width: 400px) 200px ,500px"
                    src={product.images[0].url || placeholderImg}
                    alt={product.name || 'Product Image'}
                  />
                </div>
              </a>
            </Link>
          )
        })}
      </div>
    </>
  )
}

export default CollectionView
