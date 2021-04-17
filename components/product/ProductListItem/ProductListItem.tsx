import React from 'react'
import ProductListItemHover from './ProductListItemHover'
import { useRouter } from 'next/router'

interface ProductListItem {
  product: any
}

const ProductListItem: React.FC<ProductListItem> = ({ product }) => {
  const router = useRouter()

  const handleImageClick = (path) => {
    router.push(`product${path}`)
  }

  const randomNumber = Math.floor(Math.random() * 3)
  return (
    <div>
      <div
        onClick={() => handleImageClick(product.path)}
        className="relative rounded flex justify-center items-center mt-6 mx-3 h-64 cursor-pointer"
        style={{
          backgroundColor: '#f9f9f9',
        }}
      >
        <div
          className="w-full h-68 bg-center bg-no-repeat bg-cover"
          style={{
            backgroundImage: `url(${product?.images[0]?.url})`,
            paddingTop: '30px',
            height: '100%',
          }}
        ></div>
        {/* // !Should check if discount or out of stock */}
        <span
          className={`absolute top-0 right-0 px-5 py-1 mt-4 mr-6  rounded-full font-bold  text-white text-sm uppercase tracking-wide 
            ${1 > randomNumber ? 'bg-sale' : 'bg-black'}
          `}
        >
          {1 > randomNumber ? '-15%' : 'Out Of Stock'}
        </span>
        <div className="absolute inset-0 opacity-0 hover:opacity-100 hover:bg-transparent	 flex hover:pointer-events-auto justify-center items-center w-full h-full transition-all ">
          <ProductListItemHover id={product?.id} variants={product?.variants} />
        </div>
      </div>
      <div className="pt-4">
        <h3 className="text-center truncate font-bold">{product?.name}</h3>
        <h3 className="text-center text-lg pt-2 text-gray-500	">
          ${product?.price.value}
        </h3>
      </div>
    </div>
  )
}

export default ProductListItem
