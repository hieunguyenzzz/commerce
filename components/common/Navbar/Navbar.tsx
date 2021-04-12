import { UserNav } from '@components/common'
import {
  Cross,
  Facebook,
  Instagram,
  Menu,
  Pinterest,
  Twitter,
} from '@components/icons'
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
  const smallNav = (
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
      </div>
      <div className="flex justify-end flex-1 lg:flex-none space-x-8">
        <UserNav responsive />
      </div>
    </div>
  )
  const largeNav = (
    <div className="flex w-full py-4 items-center align-center space-x-12">
      <div
        tabIndex={-1}
        className="group flex-1 lg:flex-none flex items-center z-50"
      >
        <div className={cn(s.item, 'z-10 group-focus:hidden')}>
          <Menu />
        </div>

        <a href="#" className={cn(s.item, 'z-10 hidden  group-focus:block')}>
          <Cross />
        </a>
        <div className="shadow-lg bg-accents-0 absolute left-0 top-0 pt-header h-screen lg:pt-header-lg pointer-events-none group-focus:pointer-events-auto  w-full opacity-0  group-focus:block group-focus:opacity-100  transition-all duration-700 ease-in-out">
          <div className="absolute inset-0 flex">
            <div className="w-1/2 h-full flex flex-col">
              <div className="h-header"></div>
              <Container className="flex-1  py-12 relative flex flex-col">
                <Container className="flex-1 flex flex-col absolute bottom-0 left-0 items-start py-12 space-y-2 text-sm">
                  <span className="hover-effect-1 p-2 text-accents-5 hover:text-primary hover:border-primary border border-accents-2 rounded-full">
                    <Pinterest />
                  </span>
                  <span className="hover-effect-1 p-2 text-accents-5 hover:text-primary hover:border-primary border border-accents-2 rounded-full">
                    <Instagram />
                  </span>
                  <span className="hover-effect-1 p-2 text-accents-5 hover:text-primary hover:border-primary border border-accents-2 rounded-full">
                    <Facebook />
                  </span>
                  <span className="hover-effect-1 p-2 text-accents-5 hover:text-primary hover:border-primary border border-accents-2 rounded-full">
                    <Twitter />
                  </span>
                </Container>
                <ul className="pl-24 pr-12 space-y-8  w-1/2 flex flex-col flex-1">
                  {[
                    'Home',
                    'Shop',
                    'Features',
                    'Pages',
                    'Portfolio',
                    'Journal',
                  ].map((str) => (
                    <li key={str} className="group-foo  text-effect-2">
                      <Link href={'/' + str}>
                        <a className="z-20 text-2xl font-light transition ease-in-out duration-150 isolate">
                          {str}
                        </a>
                      </Link>
                      <ul
                        style={{ paddingLeft: '50%' }}
                        className="py-12 space-y-4 z-10 isolate absolute left-0 top-0 pointer-events-none group-foo-hover:pointer-events-auto  w-full opacity-0  group-foo-hover:block group-foo-hover:opacity-100 transform -translate-x-6 group-foo-hover:translate-x-0 transition-all duration-300 ease-in-out"
                      >
                        {new Array(5).fill(str).map((str, i) => {
                          return (
                            <li key={i}>
                              <Link href={'/' + str + '_' + i}>
                                <a className="text-effect-1 py-1 transition ease-in-out duration-150">
                                  {str + ' v' + i}
                                </a>
                              </Link>
                            </li>
                          )
                        })}
                      </ul>
                    </li>
                  ))}
                </ul>
                <div className="flex space-x-6 pl-24 pr-12 justify-start isolate">
                  <div className="space-x-3 flex items-baseline">
                    <label className="text-sm text-accents-6">Currency </label>
                    <div className="px-3 relative group-foo flex ">
                      <div className="flex items-center py-2 border-b border-accents-3 ">
                        <div>USD</div>
                        <div className="flex ml-3">
                          <span className="text-base">
                            <svg width="1em" height="1em" viewBox="0 0 14 14">
                              <path d="M7 10.773L1.531 6.398l.938-1.171L7 8.851l4.531-3.624.938 1.171z"></path>
                              <path fill="none" d="M0 0h14v14H0z"></path>
                            </svg>
                          </span>
                        </div>
                      </div>
                      <div className="w-8"></div>
                      <div className="flex flex-col absolute shadow-lg rounded w-full pointer-events-none group-foo-hover:pointer-events-auto opacity-0 group-foo-hover:opacity-100 transition-opacity duration-300 ease-in-out right-0 bottom-0 bg-accents-0 flex-flex-col">
                        <span className="py-2 px-3 hover:bg-accents-1">
                          EUR
                        </span>
                        <span className="py-2 px-3 hover:bg-accents-1">
                          USD
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="space-x-3 flex items-baseline">
                    <label className="text-sm text-accents-6">Language </label>
                    <div className="px-3 relative group-foo flex ">
                      <div className="flex items-center py-2 border-b border-accents-3 ">
                        <div>English</div>
                        <div className="flex ml-3">
                          <span className="text-base">
                            <svg width="1em" height="1em" viewBox="0 0 14 14">
                              <path d="M7 10.773L1.531 6.398l.938-1.171L7 8.851l4.531-3.624.938 1.171z"></path>
                              <path fill="none" d="M0 0h14v14H0z"></path>
                            </svg>
                          </span>
                        </div>
                      </div>
                      <div className="w-8"></div>
                      <div className="flex flex-col absolute shadow-lg rounded w-full pointer-events-none group-foo-hover:pointer-events-auto opacity-0 group-foo-hover:opacity-100 transition-opacity duration-300 ease-in-out right-0 bottom-0 bg-accents-0 flex-flex-col">
                        <span className="py-2 px-3 hover:bg-accents-1">
                          Italiano
                        </span>
                        <span className="py-2 px-3 hover:bg-accents-1">
                          Français
                        </span>
                        <span className="py-2 px-3 hover:bg-accents-1">
                          English
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </Container>
            </div>
            <div className="w-1/2 h-full relative">
              <div className="absolute inset-0 hidden group-focus:block bg-accents-1">
                <Image
                  layout="fill"
                  src="/fullscreen-menu-image.jpg"
                  objectFit="cover"
                />
              </div>
            </div>
            <div className="absolute top-0 left-0 w-full h-header flex items-center justify-center pointer-events-none">
              <Link href="/">
                <a
                  className="text-2xl font-bold z-10 pointer-events-auto"
                  aria-label="Logo"
                >
                  Helendo
                </a>
              </Link>
            </div>
          </div>
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
            <div className="shadow-lg bg-accents-0 absolute left-0 top-0 pt-header lg:pt-header-lg pointer-events-none group-hover:pointer-events-auto  w-full opacity-0  group-hover:block group-hover:opacity-100 mt-8 group-hover:mt-0 transition-all duration-300 ease-in-out">
              <Container className="w-full text-xs py-6  relative">
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
                                className={cn(s.link, 'text-xs tinline-block')}
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
            <div className="shadow-lg bg-accents-0 absolute left-0 top-0 pt-header lg:pt-header-lg pointer-events-none group-hover:pointer-events-auto  w-full opacity-0  group-hover:block group-hover:opacity-100 mt-8 group-hover:mt-0 transition-all duration-300 ease-in-out">
              <Container fluid clean className="w-full text-xs flex relative">
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
                            className={cn(s.link, 'inline-block text-xs z-10')}
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
            <div className="shadow-lg bg-accents-0 absolute left-0 top-0 pt-header lg:pt-header-lg pointer-events-none group-hover:pointer-events-auto  w-full opacity-0  group-hover:block group-hover:opacity-100 mt-8 group-hover:mt-0 transition-all duration-300 ease-in-out">
              <Container className="w-full text-xs grid grid-cols-7 gap-8 py-6 relative">
                <div className="absolute bottom-0 right-0 w-96 h-96">
                  <Image
                    layout="intrinsic"
                    width={800}
                    height={800}
                    objectFit="cover"
                    src={megamenuImage}
                  ></Image>
                </div>
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
              </Container>
            </div>
          </div>
          <div className="group flex items-center h-header-lg relative">
            <Link href="/pages">
              <a className={cn(s.link, 'z-10')}>pages</a>
            </Link>
            <div className=" absolute top-0 left-0 pt-header lg:pt-header-lg pointer-events-none group-hover:pointer-events-auto transform -translate-x-1/2 opacity-0  group-hover:block group-hover:opacity-100 mt-8 group-hover:mt-0 transition-all duration-300 ease-in-out">
              <Container className="text-xs shadow-lg bg-accents-0 flex flex-col py-6  relative space-y-3">
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
  )

  return (
    <NavbarRoot transparent={transparent}>
      <Container fluid className="w-full lg:hidden">
        {smallNav}
      </Container>
      <Container fluid className="w-full hidden lg:block">
        {largeNav}
      </Container>
    </NavbarRoot>
  )
}

export default Navbar
