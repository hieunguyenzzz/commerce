import React from 'react'
import ProductListItem from '../ProductListItem/ProductListItem'
import SlickCarousel from '@components/common/SlickCarousel'

interface ProductBestSellProps {
  products: any
}

const settings = {
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  initialSlide: 0,
  infinite: true,

  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
}

const ProductBestSell: React.FC<ProductBestSellProps> = ({ products }) => {
  return (
    <>
      <div className="pb-5">
        <h1 className="text-5xl font-bold text-center">Best Selling</h1>
        <hr className="w-20 my-4 border-2 border-primary-new text-center mx-auto" />
      </div>
      <div className="md:container mx-auto px-12">
        <SlickCarousel settings={settings}>
          {products.slice(0, 8).map((product, index) => (
            <ProductListItem product={product} key={index} />
          ))}
        </SlickCarousel>
      </div>
    </>
  )
}

export default ProductBestSell
