import { FC } from 'react'
import cn from 'classnames'
import Link from 'next/link'
import { useRouter } from 'next/router'
import type { Page } from '@framework/common/get-all-pages'
import getSlug from '@lib/get-slug'
import { Github, Vercel } from '@components/icons'
import { Logo, Container } from '@components/ui'
import { I18nWidget } from '@components/common'
import s from './Footer.module.css'
import {
  IoLocationSharp,
  IoCallSharp,
  IoLogoFacebook,
  IoLogoTwitter,
} from 'react-icons/io5'

interface Props {
  className?: string
  children?: any
  pages?: Page[]
}

const LEGAL_PAGES = ['terms-of-use', 'shipping-returns', 'privacy-policy']

const Footer: FC<Props> = ({ className, pages }) => {
  const { sitePages, legalPages } = usePages(pages)

  const rootClassName = cn(className)

  return (
    <footer className={rootClassName}>
      <div className="px-14 bg-grey-lighter p-8 mx-auto md:container mx-auto">
        <div className="flex flex-wrap mb-4">
          <div className="sm:w-1/4 md:w-2/5  lg:w-1/4 h-auto">
            <div className="font-bold mb-2 text-lg">Address</div>
            <ul className="list-reset leading-normal">
              <li className="flex items-center	py-3">
                <IoLocationSharp style={{ marginRight: '7px' }} /> Helendo,
                Chicago, USA 2018
              </li>
              <li className="flex items-center pb-3">
                <IoCallSharp style={{ marginRight: '7px' }} /> +846677028028
              </li>
              <li className="flex">
                <div>
                  <button className="pr-4">
                    <IoLogoFacebook size={21} />
                  </button>
                  <button>
                    <IoLogoTwitter size={21} />
                  </button>
                </div>
              </li>
            </ul>
          </div>
          <div className="sm:w-1/4 md:w-2/6 lg:w-1/4 h-auto sm:mt-0 mt-8">
            <div className="mb-2 font-bold mb-2 text-lg">
              Help & Information
            </div>
            <ul className="list-reset leading-normal">
              <li className="py-3">Help & Contact Us</li>
              <li className="pb-3">Returns & Refunds</li>
              <li className="pb-3">Online Stores</li>
              <li className="">Terms & Conditions</li>
            </ul>
          </div>
          <div className="sm:w-1/4 w-2/4 h-auto sm:mt-0 mt-8">
            <div className="mb-2 font-bold mb-2 text-lg">About Us</div>
            <ul className="list-reset leading-normal">
              <li className="py-3">About Us</li>
              <li className="pb-3">What We Do</li>
              <li className="pb-3">FAQ Page</li>
              <li className="pb-3">Contact Us</li>
            </ul>
          </div>
          <div className="sm:w-2/4 md:w-2/4 lg:w-1/4 sm:mt-0 mt-8 h-auto">
            <div className="font-bold mb-2 text-lg mb-2">Newsletter</div>
            <div className="mt-4 flex">
              <input
                type="text"
                className="p-2 px-4 border-b-2 border-grey-light round text-grey-dark text-sm h-auto"
                placeholder="Your email address"
              />
              <button className="bg-orange text-white rounded-sm h-auto text-xs p-3">
                Subscribe
              </button>
            </div>

            <div className="hidden md:block mt-5 flex flex-wrap">
              <button className="pr-4">Term & Condition</button>
              <button className="pr-4">Policy</button>
              <button className="">Map</button>
            </div>
          </div>
        </div>
        <div className="block sm:flex ">
          <div className="mt-5 flex flex-wrap">
            <button className="pr-4">Term & Condition</button>
            <button className="pr-4">Policy</button>
            <button className="">Map</button>
          </div>
          <div className="mt-5 mx-auto">
            <h1 className="font-bold text-4xl">Halendo</h1>
          </div>
          <div className="flex mt-5 items-center">
            <h6>Follow Us On Social </h6>
            <div className="px-4">
              <button className="pr-4">
                <IoLogoFacebook size={21} />
              </button>
              <button>
                <IoLogoTwitter size={21} />
              </button>
            </div>
          </div>
        </div>
        <div className="text-center py-2 md:pt-12">
          © 2020 Helendo. All Rights Reserved.
        </div>
      </div>
      {/* <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 border-b border-accents-2 py-12 text-primary bg-primary transition-colors duration-150">
          <div className="col-span-1 lg:col-span-2">
            <Link href="/">
              <a className="flex flex-initial items-center font-bold md:mr-24">
                <span className="rounded-full border border-gray-700 mr-2">
                  <Logo />
                </span>
                <span>ACME</span>
              </a>
            </Link>
          </div>
          <div className="col-span-1 lg:col-span-2">
            <ul className="flex flex-initial flex-col md:flex-1">
              <li className="py-3 md:py-0 md:pb-4">
                <Link href="/">
                  <a className="text-primary hover:text-accents-6 transition ease-in-out duration-150">
                    Home
                  </a>
                </Link>
              </li>
              <li className="py-3 md:py-0 md:pb-4">
                <Link href="/">
                  <a className="text-primary hover:text-accents-6 transition ease-in-out duration-150">
                    Careers
                  </a>
                </Link>
              </li>
              <li className="py-3 md:py-0 md:pb-4">
                <Link href="/blog">
                  <a className="text-primary hover:text-accents-6 transition ease-in-out duration-150">
                    Blog
                  </a>
                </Link>
              </li>
              {sitePages.map((page) => (
                <li key={page.url} className="py-3 md:py-0 md:pb-4">
                  <Link href={page.url!}>
                    <a className="text-primary hover:text-accents-6 transition ease-in-out duration-150">
                      {page.name}
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="col-span-1 lg:col-span-2">
            <ul className="flex flex-initial flex-col md:flex-1">
              {legalPages.map((page) => (
                <li key={page.url} className="py-3 md:py-0 md:pb-4">
                  <Link href={page.url!}>
                    <a className="text-primary hover:text-accents-6 transition ease-in-out duration-150">
                      {page.name}
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="col-span-1 lg:col-span-6 flex items-start lg:justify-end text-primary">
            <div className="flex space-x-6 items-center h-10">
              <a
                aria-label="Github Repository"
                href="https://github.com/vercel/commerce"
                className={s.link}
              >
                <Github />
              </a>
              <I18nWidget />
            </div>
          </div>
        </div>
        <div className="py-12 flex flex-col md:flex-row justify-between items-center space-y-4">
          <div>
            <span>&copy; 2020 ACME, Inc. All rights reserved.</span>
          </div>
          <div className="flex items-center text-primary">
            <span className="text-primary">Crafted by</span>
            <a
              rel="noopener"
              href="https://vercel.com"
              aria-label="Vercel.com Link"
              target="_blank"
              className="text-primary"
            >
              <Vercel
                className="inline-block h-6 ml-4 text-primary"
                alt="Vercel.com Logo"
              />
            </a>
          </div>
        </div>
      </Container> */}
    </footer>
  )
}

function usePages(pages?: Page[]) {
  const { locale } = useRouter()
  const sitePages: Page[] = []
  const legalPages: Page[] = []

  if (pages) {
    pages.forEach((page) => {
      const slug = page.url && getSlug(page.url)

      if (!slug) return
      if (locale && !slug.startsWith(`${locale}/`)) return

      if (isLegalPage(slug, locale)) {
        legalPages.push(page)
      } else {
        sitePages.push(page)
      }
    })
  }

  return {
    sitePages: sitePages.sort(bySortOrder),
    legalPages: legalPages.sort(bySortOrder),
  }
}

const isLegalPage = (slug: string, locale?: string) =>
  locale
    ? LEGAL_PAGES.some((p) => `${locale}/${p}` === slug)
    : LEGAL_PAGES.includes(slug)

// Sort pages by the sort order assigned in the BC dashboard
function bySortOrder(a: Page, b: Page) {
  return (a.sort_order ?? 0) - (b.sort_order ?? 0)
}

export default Footer
