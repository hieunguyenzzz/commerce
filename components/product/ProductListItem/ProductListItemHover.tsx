import React, { useState } from 'react'
import { Bag } from '@components/icons'
import { BsPlusCircle } from 'react-icons/bs'
import ReactTooltip from 'react-tooltip'
import WishlistButton from '@components/wishlist/WishlistButton'
import { useAddItem } from '@framework/cart'

interface ProductListItemHoverProps {
  id: any
  variants: any
}

const ProductListItemHover: React.FC<ProductListItemHoverProps> = ({
  id,
  variants,
}) => {
  const addItem = useAddItem()
  // Select the correct variant based on choices
  const [loading, setLoading] = useState(false)

  const addToCart = async () => {
    console.log('waiting ')
    setLoading(true)
    try {
      await addItem({
        productId: String(id),
        variantId: String(variants[0].id),
      })

      setLoading(false)
    } catch (err) {
      setLoading(false)
    }
  }
  return (
    <div className="flex justify-around z-40">
      <button
        onClick={addToCart}
        type="button"
        className="bg-white hover:text-primary-new	rounded-full px-3 py-3 flex items-center transition-all focus:outline-none"
      >
        <Bag className="h-6 w-6" alt="icon heart" data-tip="Add To Card" />{' '}
      </button>
      <div className="bg-white hover:text-primary-new	 rounded-full px-3 py-3 flex items-center transition-all ml-3 focus:outline-none">
        {process.env.COMMERCE_WISHLIST_ENABLED && (
          <WishlistButton
            productId={id}
            variant={variants[0] as any}
            data-tip="Browse Wishlist"
          />
        )}
      </div>
      <ReactTooltip />
    </div>
  )
}

export default ProductListItemHover
