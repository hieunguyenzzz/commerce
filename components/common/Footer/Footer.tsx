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
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div className="row">
            <div className="col-md-6 col-lg-3">
              <div className="footer-widget pr-lg-5">
                <a href="index.html" className="footer-logo">
                  <img src="/images/footer-logo.png" alt="logo" />
                </a>
                <p>
                  Lorem ipsum dolor sit amet, adiping elit. Aenean com modo
                  ligula eget dolor.
                </p>
                <ul className="social-media-list d-flex flex-wrap">
                  <li>
                    <a href="#">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fab fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fab fa-vimeo-v"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fab fa-pinterest-p"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="footer-widget">
                <h5 className="widget-title">Company</h5>
                <div className="widget-wrapper">
                  <ul className="links">
                    <li>
                      <a href="term-condition.html">Privecy</a>
                    </li>
                    <li>
                      <a href="term-condition.html">Terms</a>
                    </li>
                    <li>
                      <a href="term-condition.html">Licencing</a>
                    </li>
                    <li>
                      <a href="term-condition.html">Support Policy</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="footer-widget">
                <h5 className="widget-title">Quick Info</h5>
                <div className="widget-wrapper">
                  <ul className="links">
                    <li>
                      <a href="term-condition.html">Privecy</a>
                    </li>
                    <li>
                      <a href="term-condition.html">Terms</a>
                    </li>
                    <li>
                      <a href="term-condition.html">Licencing</a>
                    </li>
                    <li>
                      <a href="term-condition.html">Support Policy</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="footer-widget">
                <h5 className="widget-title">Blog</h5>
                <div className="widget-wrapper">
                  <div className="small-post-list">
                    <div className="small-post-item">
                      <div className="thumb">
                        <a href="single.html">
                          <img src="/images/blog/small/01.jpg" alt="thumb" />
                        </a>
                      </div>
                      <div className="content">
                        <a href="single.html" className="title">
                          Lorem ipsum dolor sit amet, adipiscing elit{' '}
                        </a>
                        <ul className="meta-post">
                          <li>04 February, 2019</li>
                        </ul>
                      </div>
                    </div>
                    <div className="small-post-item">
                      <div className="thumb">
                        <a href="single.html">
                          <img src="/images/blog/small/02.jpg" alt="thumb" />
                        </a>
                      </div>
                      <div className="content">
                        <a href="single.html" className="title">
                          Lorem ipsum dolor sit amet, adipiscing elit{' '}
                        </a>
                        <ul className="meta-post">
                          <li>04 February, 2019</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="row align-items-center">
            <div className="col-lg-6 text-center text-lg-left">
              <p className="copyright">
                &copy; Copyrights 2020 <a href="index.html">Flux theme</a> All
                rights reserved.
              </p>
            </div>
            <div className="col-lg-6">
              <ul className="footer-menu d-flex justify-content-center justify-content-lg-end">
                <li>
                  <a href="term-condition.html">Privecy</a>
                </li>
                <li>
                  <a href="term-condition.html">Terms</a>
                </li>
                <li>
                  <a href="term-condition.html">Licencing</a>
                </li>
                <li>
                  <a href="term-condition.html">Support Policy</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )

  // return (
  //   <footer className={rootClassName}>
  //     <Container>
  //       <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 border-b border-accents-2 py-12 text-primary bg-primary transition-colors duration-150">
  //         <div className="col-span-1 lg:col-span-2">
  //           <Link href="/">
  //             <a className="flex flex-initial items-center font-bold md:mr-24">
  //               <span className="rounded-full border border-gray-700 mr-2">
  //                 <Logo />
  //               </span>
  //               <span>ACME</span>
  //             </a>
  //           </Link>
  //         </div>
  //         <div className="col-span-1 lg:col-span-2">
  //           <ul className="flex flex-initial flex-col md:flex-1">
  //             <li className="py-3 md:py-0 md:pb-4">
  //               <Link href="/">
  //                 <a className="text-primary hover:text-accents-6 transition ease-in-out duration-150">
  //                   Home
  //                 </a>
  //               </Link>
  //             </li>
  //             <li className="py-3 md:py-0 md:pb-4">
  //               <Link href="/">
  //                 <a className="text-primary hover:text-accents-6 transition ease-in-out duration-150">
  //                   Careers
  //                 </a>
  //               </Link>
  //             </li>
  //             <li className="py-3 md:py-0 md:pb-4">
  //               <Link href="/blog">
  //                 <a className="text-primary hover:text-accents-6 transition ease-in-out duration-150">
  //                   Blog
  //                 </a>
  //               </Link>
  //             </li>
  //             {sitePages.map((page) => (
  //               <li key={page.url} className="py-3 md:py-0 md:pb-4">
  //                 <Link href={page.url!}>
  //                   <a className="text-primary hover:text-accents-6 transition ease-in-out duration-150">
  //                     {page.name}
  //                   </a>
  //                 </Link>
  //               </li>
  //             ))}
  //           </ul>
  //         </div>
  //         <div className="col-span-1 lg:col-span-2">
  //           <ul className="flex flex-initial flex-col md:flex-1">
  //             {legalPages.map((page) => (
  //               <li key={page.url} className="py-3 md:py-0 md:pb-4">
  //                 <Link href={page.url!}>
  //                   <a className="text-primary hover:text-accents-6 transition ease-in-out duration-150">
  //                     {page.name}
  //                   </a>
  //                 </Link>
  //               </li>
  //             ))}
  //           </ul>
  //         </div>
  //         <div className="col-span-1 lg:col-span-6 flex items-start lg:justify-end text-primary">
  //           <div className="flex space-x-6 items-center h-10">
  //             <a
  //               aria-label="Github Repository"
  //               href="https://github.com/vercel/commerce"
  //               className={s.link}
  //             >
  //               <Github />
  //             </a>
  //             <I18nWidget />
  //           </div>
  //         </div>
  //       </div>
  //       <div className="py-12 flex flex-col md:flex-row justify-between items-center space-y-4">
  //         <div>
  //           <span>&copy; 2020 ACME, Inc. All rights reserved.</span>
  //         </div>
  //         <div className="flex items-center text-primary">
  //           <span className="text-primary">Crafted by</span>
  //           <a
  //             rel="noopener"
  //             href="https://vercel.com"
  //             aria-label="Vercel.com Link"
  //             target="_blank"
  //             className="text-primary"
  //           >
  //             <Vercel
  //               className="inline-block h-6 ml-4 text-primary"
  //               alt="Vercel.com Logo"
  //             />
  //           </a>
  //         </div>
  //       </div>
  //     </Container>
  //   </footer>
  // )
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
