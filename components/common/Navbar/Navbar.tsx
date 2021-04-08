import { FC } from 'react'
import Link from 'next/link'
import { Logo, Container } from '@components/ui'
import { Searchbar, UserNav } from '@components/common'
import NavbarRoot from './NavbarRoot'
import s from './Navbar.module.css'

const Navbar: FC = () => (
  <NavbarRoot>
    <Container>
      <header className="header style2">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-4 d-flex d-lg-block justify-content-between align-items-center">
              <Link href="/">
                <a className="logo">
                  <img src="/images/logo-white.png" alt="" />
                </a>
              </Link>
              <Link href="/">
                <a className="logo-sticky">
                  <img src="/images/logo.png" alt="" />
                </a>
              </Link>
              <div className="mobile-cart-option d-lg-none">
                <a>
                  <i className="fas fa-shopping-cart"></i> 2 Item
                </a>
              </div>
              <div className="menu-bar d-lg-none">
                <i className="fas fa-bars"></i>
                <i className="d-none fas fa-times"></i>
              </div>
            </div>
            <div className="col-lg-8">
              <div className="main-menu-area">
                <div className="d-lg-none text-right px-3">
                  <button className="close-btn">
                    <i className="fas fa-times"></i>
                  </button>
                </div>
                <ul className="menu d-lg-flex justify-content-lg-end align-items-center">
                  <li>
                    <Link href="/search">
                      <a className={s.link}>All</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/search?q=clothes">
                      <a className={s.link}>Clothes</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/search?q=accessories">
                      <a className={s.link}>Accessories</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/search?q=shoes">
                      <a className={s.link}>Shoes</a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </header>
    </Container>
  </NavbarRoot>
)

export default Navbar
