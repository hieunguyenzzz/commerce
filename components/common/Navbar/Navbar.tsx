import { UserNav } from '@components/common'
import { Menu } from '@components/icons'
import { Container, useUI } from '@components/ui'
import cn from 'classnames'
import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'
import s from './Navbar.module.css'
import NavbarRoot from './NavbarRoot'
export interface Props {
  transparent?: boolean
}
const megamenuImage = '/mega-menu.png'
const renderItem = (renderer: any, index: any) => renderer(index)
const homeMenu = [
  new Array(6).fill((index: any) => `Home v${index + 1}`).map(renderItem),
  new Array(4).fill((index: any) => `Home v${index + 7}`).map(renderItem),
]
const megamenu = [
  [
    'HEADER',
    'Header v1',
    'Header v2',
    'Header v3',
    'Header v4',
    'Header v5',
    'Header v6',
    'Header v7',
    'Header v8',
    'Header v9',
    'Header v10',
  ],
  ['FOOTER', 'Footer v1', 'Footer v2', 'Footer v3', 'Footer v4', 'Footer v5'],
  [
    'PRODUCT',
    'Product v1 – Classic',
    'Product v2 – Slider',
    'Product v3 – Zoom',
    'Product v4 – Fadein',
    'Product v5 – Simple',
  ],
  [
    'ELEMENTS',
    'Accordion',
    'Pricing Table',
    'Google Maps',
    'Message Box',
    'Progress Bars',
    'Charts',
    'Icon Box',
    'Product Tabs',
    'Products Grid',
  ],
  [
    'ELEMENTS 2',
    'Tabs',
    'Video Players',
    'Team',
    'Buttons',
    'Testimonials',
    'Social Icons',
    'Blog Posts',
  ],
]
const shopMenu = [
  [
    'SHOP PAGES',
    'Standard Shop Page',
    'Small Products',
    'Large Products',
    'Masonry',
    'Carousel',
    'Pagination',
    'Shop Sidebar',
    'Shop Infinity',
    'Shop v2',
    'Shop v3',
  ],
  [
    'PRODUCT PAGES',
    'Product v1',
    'Product v2',
    'Product V3',
    'Product v4',
    'Product v5',
    'Product V6',
    'Product v7',
  ],
  [
    'OTHER SHOP PAGES',
    'Collection',
    'LookBook',
    'Categories Page',
    'Shopping Cart',
    'Wishlist',
    'Order Tracking',
    'Checkout',
    'Checkout – 2 Columns',
  ],
]
const pagesMenu = [
  ['About', 'About Us', 'About Us v2', 'About Me'],
  ['Contact', 'Contact Us', 'Contact Us v2', 'Contact Me'],
  ['Our Team'],
  ['FAQ'],
  ['404'],
  ['Coming Soon', 'Coming Soon v1', 'Coming Soon v2'],
]
const Navbar: FC<Props> = ({ transparent }) => {
  const { openSidebar, setModalView } = useUI()
  return (
    <NavbarRoot transparent={transparent}>
      <Container className="w-full">
        <div className="flex w-full py-4 items-center align-center space-x-12">
          <div className="flex-1 lg:flex-none flex items-center">
            <div
              onClick={() => {
                setModalView('MENU')
                openSidebar()
              }}
              className={cn(s.item, 'z-10')}
            >
              <Menu />
            </div>
          </div>
          <div className="flex items-center flex-1 justify-center lg:justify-start lg:space-x-16">
            <Link href="/">
              <a className="text-2xl font-bold z-10" aria-label="Logo">
                Helendo
              </a>
            </Link>
            <div className="space-x-12 h-header-lg hidden lg:flex items-center">
              <div className="group flex items-center h-header-lg">
                <Link href="/home">
                  <a className={cn(s.link, 'z-10')}>home</a>
                </Link>
                <div className="absolute left-0 top-0 pt-header lg:pt-header-lg pointer-events-none group-hover:pointer-events-auto  w-full opacity-0 group-hover:pointevent group-hover:block group-hover:opacity-100 mt-8 group-hover:mt-0 transition-all duration-300 ease-in-out">
                  <Container className="w-full text-xs py-6 shadow-lg bg-accents-0 relative">
                    <div className="w-full mx-auto max-w-2xl grid grid-cols-7 space-x-8 ">
                      <div className="flex col-span-3 justify-end  space-x-6">
                        {homeMenu.map((item, i) => {
                          {
                            return (
                              <div
                                key={i}
                                className="leading-extra-loose  flex-1 flex flex-col items-start space-y-3"
                              >
                                {item.map((menu: any, i: any) => (
                                  <div
                                    key={i}
                                    className={cn(
                                      s.link,
                                      'text-xs tinline-block'
                                    )}
                                  >
                                    {menu as any}
                                  </div>
                                ))}
                              </div>
                            )
                          }
                        })}
                      </div>
                      <div className="col-span-4 flex justify-start gap-8">
                        <div className="flex-1 bg-accents-3 h-full relative">
                          <Image
                            layout="fill"
                            objectFit="cover"
                            src={'/mega-menu-v1-1.jpg'}
                          ></Image>
                        </div>
                        <div className="flex-1 bg-accents-3 h-full relative">
                          <Image
                            layout="fill"
                            objectFit="cover"
                            src={'/mega-menu-v1-2.jpg'}
                          ></Image>
                        </div>
                      </div>
                    </div>
                  </Container>
                </div>
              </div>
              <div className="group flex items-center h-header-lg">
                <Link href="/shop">
                  <a className={cn(s.link, 'z-10')}>shop</a>
                </Link>
                <div className="absolute left-0 top-0 pt-header lg:pt-header-lg pointer-events-none group-hover:pointer-events-auto  w-full opacity-0 group-hover:pointevent group-hover:block group-hover:opacity-100 mt-8 group-hover:mt-0 transition-all duration-300 ease-in-out">
                  <Container
                    clean
                    className="w-full text-xs flex shadow-lg bg-accents-0 relative"
                  >
                    {new Array(5).fill(shopMenu).map((menu, i) => {
                      {
                        const item = menu[i]
                        if (!item || !item.length) return null
                        const [title, ...rest] = item
                        return (
                          <Container
                            key={i}
                            className="leading-extra-loose py-6 flex-1 relative flex flex-col items-start space-y-3"
                          >
                            <Image
                              layout="fill"
                              objectFit="cover"
                              className="absolute inset-0 "
                              src={`/mega-menu-v2-${i + 1}.jpg`}
                            ></Image>
                            <div className="uppercase font-semibold text-xs z-10">
                              {title}
                            </div>
                            {rest.map((menu: any, i: any) => (
                              <div
                                key={i}
                                className={cn(
                                  s.link,
                                  'inline-block text-xs z-10'
                                )}
                              >
                                {menu as any}
                              </div>
                            ))}
                          </Container>
                        )
                      }
                    })}
                  </Container>
                </div>
              </div>
              <div className="group flex items-center h-header-lg">
                <Link href="/features">
                  <a className={cn(s.link, 'z-10')}>features</a>
                </Link>
                <div className="absolute left-0 top-0 pt-header lg:pt-header-lg pointer-events-none group-hover:pointer-events-auto  w-full opacity-0 group-hover:pointevent group-hover:block group-hover:opacity-100 mt-8 group-hover:mt-0 transition-all duration-300 ease-in-out">
                  <Container className="w-full text-xs grid grid-cols-7 gap-8 py-6 shadow-lg bg-accents-0 relative">
                    {new Array(5).fill(megamenu).map((megamenu, i) => {
                      {
                        const item = megamenu[i]
                        if (!item || !item.length) return null
                        const [title, ...rest] = item
                        return (
                          <div
                            key={i}
                            className="leading-extra-loose  flex flex-col items-start space-y-3"
                          >
                            <div className="uppercase font-semibold text-xs">
                              {title}
                            </div>
                            {rest.map((menu: any, i: any) => (
                              <div
                                key={i}
                                className={cn(s.link, 'inline-block text-xs')}
                              >
                                {menu as any}
                              </div>
                            ))}
                          </div>
                        )
                      }
                    })}
                    <div className="col-span-2 h-96"></div>
                    <div className="absolute bottom-0 right-0 w-96 h-96">
                      <Image
                        layout="intrinsic"
                        width={800}
                        height={800}
                        objectFit="cover"
                        src={megamenuImage}
                      ></Image>
                    </div>
                  </Container>
                </div>
              </div>
              <div className="group flex items-center h-header-lg relative">
                <Link href="/pages">
                  <a className={cn(s.link, 'z-10')}>pages</a>
                </Link>
                <div className="absolute top-0 left-0 pt-header lg:pt-header-lg pointer-events-none group-hover:pointer-events-auto transform -translate-x-1/2 opacity-0 group-hover:pointevent group-hover:block group-hover:opacity-100 mt-8 group-hover:mt-0 transition-all duration-300 ease-in-out">
                  <Container className="text-xs flex flex-col py-6 shadow-lg bg-accents-0 relative space-y-3">
                    {new Array(5).fill(pagesMenu).map((menu, i) => {
                      {
                        const item = menu[i]
                        if (!item || !item.length) return null
                        const [title, ...rest] = item
                        return (
                          <div
                            key={i}
                            className="leading-extra-loose flex flex-col items-start space-y-3"
                          >
                            <div className={cn(s.link, 'inline-block text-xs')}>
                              {title}
                            </div>
                            <div className="hidden">
                              {rest.map((menu: any, i: any) => (
                                <div
                                  key={i}
                                  className={cn(s.link, 'inline-block text-xs')}
                                >
                                  {menu as any}
                                </div>
                              ))}
                            </div>
                          </div>
                        )
                      }
                    })}
                  </Container>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-end flex-1 lg:flex-none space-x-8">
            <UserNav responsive />
          </div>
        </div>
      </Container>
      <div style={{ height: 'var(--safe-area-inset-bottom)' }} />
    </NavbarRoot>
  )
}

export default Navbar
