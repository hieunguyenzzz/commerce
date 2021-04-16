import {
  Facebook,
  Instagram,
  Location,
  Pinterest,
  Tiktok,
} from '@components/icons'
import { Container, Text } from '@components/ui'
import type { Page } from '@framework/common/get-all-pages'
import getSlug from '@lib/get-slug'
import cn from 'classnames'
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
      <Container className="py-11">
        <div className="w-full grid grid-cols-9 px-14  gap-6  transition-colors duration-150">
          <div className="col-span-3  space-y-11 px-10">
            <Text variant="h5">CUSTOMER CARE</Text>
            <ul className="flex flex-initial flex-col md:flex-1 text-sm space-y-4">
              {['CONTACT', 'SHIPPING', 'RETURNS', 'FAQS', 'SIZE GUIDE'].map(
                (str) => (
                  <Text variant="h7">{str}</Text>
                )
              )}
            </ul>
          </div>
          <div className="col-span-3  space-y-11 px-10">
            <Text variant="h5">OUR BRAND</Text>
            <ul className="flex flex-initial flex-col md:flex-1 text-sm space-y-4">
              {[
                'ABOUT',
                'ETHICS',
                'JOURNAL',
                'PRIVACY POLICY',
                'TERMS & CONDITIONS',
              ].map((str) => (
                <Text variant="h7">{str}</Text>
              ))}
            </ul>
          </div>
          <div className="col-span-3 space-y-6 flex flex-col  px-10">
            <div className="space-y-4">
              <Text variant="h5">CUSTOMER CARE</Text>
              <div className="space-x-6 flex text-2xl">
                <Facebook />
                <Instagram />
                <Pinterest />
                <Tiktok />
              </div>
            </div>
            <div className="space-y-4 space-y-6 ">
              <p className="  text-sm whitespace-pre-line">
                {`hello@tessjean.com 
                +84 077 277 0802`}
              </p>
              <p className=" text-sm whitespace-pre-line">
                {`Customer Care hours: 
                Monday - Friday 8:00am - 4:30pm ICT`}
              </p>
            </div>
          </div>
        </div>
      </Container>
      <Container>
        <div className="py-6  flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 border-t border-accents-3">
          <div className="flex uppercase text-xs md:flex-1 space-x-6">
            2021, ALL RIGHTS RESERVED TESSJEAN
          </div>
          <div className="flex space-x-3 text-xs">
            <Location /> <div>SAIGON, VIETNAM</div>
          </div>
        </div>
      </Container>
      <div className="h-5"></div>
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
