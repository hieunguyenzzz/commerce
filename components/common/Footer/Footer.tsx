import { Subscribe3 } from '@components/subscribe/Subscribe'
import { Container } from '@components/ui'
import type { Page } from '@framework/common/get-all-pages'
import getSlug from '@lib/get-slug'
import cn from 'classnames'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { FC } from 'react'
import s from './Footer.module.css'

interface Props {
  className?: string
  children?: any
  pages?: Page[]
}

const LEGAL_PAGES = ['terms-of-use', 'shipping-returns', 'privacy-policy']

const Footer: FC<Props> = ({ className, pages }) => {
  const { sitePages, legalPages } = usePages(pages)
  const rootClassName = cn(s.root, className)

  return (
    <footer className={rootClassName}>
      <Container className="py-12">
        <div className="grid grid-cols-10 text-accents-2 gap-6  transition-colors duration-150">
          <div className="space-y-3 space-y-6 col-span-full md:col-span-3">
            <a className=" font-semibold transition ease-in-out duration-150 text-xl">
              Helendo
            </a>
            <p className=" leading-loose text-accents-6 text-sm">
              69 Halsey St, Ny 10002, New York, United States
              <br />
              support.center@unero.co
            </p>
            <p className=" leading-loose text-accents-6 text-sm">
              (0091) 8547 632521
            </p>
          </div>
          <div className="col-span-5 md:col-span-2">
            <ul className="flex flex-initial flex-col md:flex-1 text-sm">
              <li className="py-3 md:py-0 md:pb-4">
                <Link href="/">
                  <a className="  text-effect-1 hover:text-accents-6 transition ease-in-out duration-150">
                    Home
                  </a>
                </Link>
              </li>
              <li className="py-3 md:py-0 md:pb-4">
                <Link href="/careers">
                  <a className="  text-effect-1 hover:text-accents-6 transition ease-in-out duration-150">
                    Careers
                  </a>
                </Link>
              </li>
              <li className="py-3 md:py-0 md:pb-4">
                <Link href="/blog">
                  <a className="  text-effect-1 hover:text-accents-6 transition ease-in-out duration-150">
                    Blog
                  </a>
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-span-5 md:col-span-2">
            <ul className="flex flex-initial flex-col md:flex-1 text-sm">
              {['all', 'clothes', 'accessories', 'shoes'].map((string) => {
                return (
                  <li key={string} className="py-3 md:py-0 md:pb-4">
                    <Link href={`/${string}`}>
                      <a className="  text-effect-1 hover:text-accents-6 transition ease-in-out duration-150">
                        {string}
                      </a>
                    </Link>
                  </li>
                )
              })}
            </ul>
          </div>
          <div className="col-span-full md:col-span-3 flex justify-center items-start md:justify-end ">
            <Subscribe3 />
          </div>
        </div>
        <div className="py-12 text-accents-2 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <ul className="flex  md:flex-1 text-sm space-x-6">
            <li className="py-3 md:py-0 ">
              <Link href="/">
                <a className="text-effect-1 hover:text-accents-6 transition ease-in-out duration-150">
                  Home
                </a>
              </Link>
            </li>
            <li className="py-3 md:py-0 ">
              <Link href="/careers">
                <a className="text-effect-1 hover:text-accents-6 transition ease-in-out duration-150">
                  Careers
                </a>
              </Link>
            </li>
            <li className="py-3 md:py-0 ">
              <Link href="/blog">
                <a className="text-effect-1 hover:text-accents-6 transition ease-in-out duration-150">
                  Blog
                </a>
              </Link>
            </li>
            <li className="py-3 md:py-0 ">
              <Link href="/contact">
                <a className="text-effect-1 hover:text-accents-6 transition ease-in-out duration-150">
                  Contact us
                </a>
              </Link>
            </li>
          </ul>
          <div>
            <span>&copy; 2020 Myteam, Inc. All rights reserved.</span>
          </div>
        </div>
      </Container>
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
