import { Bag, Heart, Search } from '@components/icons'
import { Container } from '@components/ui'
import { useUI } from '@components/ui/context'
import useCart from '@framework/cart/use-cart'
import useCustomer from '@framework/customer/use-customer'
import type { LineItem } from '@framework/types'
import cn from 'classnames'
import Link from 'next/link'
import { FC } from 'react'
import DropdownMenu from './DropdownMenu'
import s from './UserNav.module.css'

interface Props {
  className?: string
  responsive?: boolean
}

const countItem = (count: number, item: LineItem) => count + item.quantity

const UserNav: FC<Props> = ({ className, responsive }) => {
  const { data } = useCart()
  const { data: customer } = useCustomer()
  const {
    openSidebar,
    toggleSidebar,
    closeSidebarIfPresent,
    setModalView,
    openModal,
  } = useUI()
  const itemsCount = (5 || data?.lineItems.reduce(countItem, 0)) ?? 0

  return (
    <nav className={cn(s.root, className)}>
      <ul className={s.list}>
        <li className={cn(s.item, responsive && s.visibleOnLg)}>
          {customer ? (
            <DropdownMenu />
          ) : (
            <a
              onClick={() => {
                setModalView('LOGIN_VIEW')
                openModal()
              }}
              className="text-sm"
              aria-label="Wishlist"
            >
              Sign in
            </a>
          )}
        </li>
        <li className={cn(s.item, s.visibleOnLg, 'group relative ')}>
          <label>
            <div className="relative flex justify-end">
              <div className="pointer-events-none z-30">
                <Search />
              </div>
            </div>
            <div className=" absolute pointer-events-none top-0 -right-2 focus-within:w-80 focus-within:h-auto w-3 h-3 focus-within:pointer-events-auto transform opacity-0  focus-within:block focus-within:opacity-100 mt-8 focus-within:mt-0 transition-all duration-300 ease-in-out">
              <div className="h-header flex items-center">
                <input
                  autoComplete="none"
                  id="search"
                  name="search"
                  className="w-full py-2 shadow-inner border border-accents-3 px-12 focus:w-80 focus:outline-none rounded-full  bg-accents-0 transition-all duration-300 ease-in-out"
                ></input>
              </div>
              <Container className="text-xs shadow-lg bg-accents-0 flex flex-col py-6  relative space-y-3">
                <div className="text-accents-6 text-xs ">Quick links</div>
                {new Array(5)
                  .fill([
                    'OTHER SHOP PAGES',
                    'Collection',
                    'LookBook',
                    'Categories Page',
                    'Shopping Cart',
                    'Wishlist',
                    'Order Tracking',
                    'Checkout',
                    'Checkout – 2 Columns',
                  ])
                  .map((menu, i) => {
                    {
                      const item = menu[i]
                      if (!item || !item.length) return null
                      return (
                        <div
                          key={i}
                          className="leading-extra-loose flex flex-col items-start space-y-3"
                        >
                          <div
                            className={cn(
                              s.link,
                              'inline-block text-xs text-effect-1'
                            )}
                          >
                            {item}
                          </div>
                        </div>
                      )
                    }
                  })}
              </Container>
            </div>
          </label>
        </li>
        {process.env.COMMERCE_WISHLIST_ENABLED && (
          <li className={cn(s.item, responsive && s.visibleOnLg)}>
            <Link href="/wishlist">
              <a onClick={closeSidebarIfPresent} aria-label="Wishlist">
                <Heart />
              </a>
            </Link>
            <span className={s.bagCount}>0</span>
          </li>
        )}
        <li
          className={s.item}
          onClick={() => {
            setModalView('CART')
            openSidebar()
          }}
        >
          <Bag />
          {itemsCount > 0 && <span className={s.bagCount}>{itemsCount}</span>}
        </li>
      </ul>
    </nav>
  )
}

export default UserNav
