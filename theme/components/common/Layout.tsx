import { useDATA } from '@components/data/context'
import { useLogout } from '@framework/auth'
import { useCustomer } from '@framework/customer'
import { useAcceptCookies } from '@lib/hooks/useAcceptCookies'
import { useRouter } from 'next/dist/client/router'
import React from 'react'
import { Container } from '.'
import logoImage from '../../profile-html-templates/atis-assets/logo/atis/atis-mono-black.svg'
import Button from './Button'
import Link from './Link'

const Layout: React.FC = ({ children }) => {
  const { acceptedCookies, onAcceptCookies } = useAcceptCookies()
  const { locale = 'en-US' } = useRouter()
  const { navigation } = useDATA()
  const logout = useLogout()
  const { data: customer } = useCustomer()
  return (
    <div>
      <header>
        <nav className="relative px-6 py-6 bg-white">
          <div className="flex items-center">
            <ul className="hidden overflow-auto lg:flex  lg:items-center lg:w-auto lg:space-x-5"></ul>
            <div className="lg:absolute lg:top-1/2 lg:left-1/2 lg:transform lg:-translate-y-1/2 lg:-translate-x-1/2">
              <Link className="text-3xl font-bold leading-none" href="/">
                <img className="h-12" src={logoImage.src} width="auto" />
              </Link>
            </div>
            {customer ? (
              <div className="hidden lg:inline-block group relative lg:ml-auto">
                <Button
                  size="sm"
                  variant="secoundary"
                  Component={Link}
                  className="lg:ml-auto lg:mr-3 inline-block "
                  href="/dashboard"
                >
                  <div className="text-xl">
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth={0}
                      viewBox="0 0 24 24"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle fill="none" cx={12} cy={7} r={3} />
                      <path d="M12 2C9.243 2 7 4.243 7 7s2.243 5 5 5 5-2.243 5-5S14.757 2 12 2zM12 10c-1.654 0-3-1.346-3-3s1.346-3 3-3 3 1.346 3 3S13.654 10 12 10zM21 21v-1c0-3.859-3.141-7-7-7h-4c-3.86 0-7 3.141-7 7v1h2v-1c0-2.757 2.243-5 5-5h4c2.757 0 5 2.243 5 5v1H21z" />
                    </svg>
                  </div>
                </Button>
                <div className="hidden absolute top-full py-3 group-hover:block bg-white shadow-xl right-0">
                  <ul className="flex flex-col">
                    <li>
                      <Link
                        className="py-2 px-6 hover:bg-gray-100 block"
                        href="/dashboard"
                      >
                        Dashboard
                      </Link>
                    </li>
                    <li>
                      <div
                        className="py-2 px-6 hover:bg-gray-100 block"
                        onClick={logout}
                      >
                        Logout
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            ) : (
              <>
                <Button
                  size="sm"
                  variant="secoundary"
                  Component={Link}
                  className="hidden lg:inline-block lg:ml-auto lg:mr-3 "
                  href="/login"
                >
                  Sign In
                </Button>
                <Button
                  size="sm"
                  Component={Link}
                  className="hidden lg:inline-block"
                  href="/signup"
                >
                  Sign up
                </Button>
              </>
            )}

            <div className="lg:hidden ml-auto">
              <button className="navbar-burger flex items-center text-green-600 p-3">
                <svg
                  className="block h-4 w-4 fill-current"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Mobile menu</title>
                  <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                </svg>
              </button>
            </div>
          </div>
        </nav>
        <div className="hidden navbar-menu relative z-50">
          <div className="navbar-backdrop fixed inset-0 bg-gray-800 opacity-25" />
          <nav className="fixed top-0 left-0 bottom-0 flex flex-col w-5/6 max-w-sm py-6 px-6 bg-white border-r overflow-y-auto">
            <div className="flex items-center mb-8">
              <a className="mr-auto text-3xl font-bold leading-none" href="#">
                <img
                  className="h-10"
                  src="atis-assets/logo/atis/atis-mono-black.svg"
                  width="auto"
                />
              </a>
              <button className="navbar-close">
                <svg
                  className="h-6 w-6 text-gray-400 cursor-pointer hover:text-gray-500"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div>
              <ul>
                <li className="mb-1">
                  <a
                    className="block p-4 text-sm font-semibold text-gray-400 hover:bg-green-50 hover:text-green-600 rounded"
                    href="#"
                  >
                    Start
                  </a>
                </li>
                <li className="mb-1">
                  <a
                    className="block p-4 text-sm font-semibold text-gray-400 hover:bg-green-50 hover:text-green-600 rounded"
                    href="#"
                  >
                    About Us
                  </a>
                </li>
                <li className="mb-1">
                  <a
                    className="block p-4 text-sm font-semibold text-gray-400 hover:bg-green-50 hover:text-green-600 rounded"
                    href="#"
                  >
                    Services
                  </a>
                </li>
              </ul>
            </div>
            <div className="mt-auto">
              <div className="pt-6">
                <a
                  className="block px-4 py-3 mb-3 leading-loose text-xs text-center font-semibold  bg-gray-50 hover:bg-gray-100 rounded-l-xl rounded-t-xl"
                  href="#"
                >
                  Sign in
                </a>
                <a
                  className="block px-4 py-3 mb-2 leading-loose text-xs text-center text-white font-semibold bg-green-600 hover:bg-green-700 rounded-l-xl rounded-t-xl"
                  href="#"
                >
                  Sign Up
                </a>
              </div>
              <p className="my-4 text-xs text-center text-gray-400">
                <span>© 2020 All rights reserved.</span>
              </p>
              <div className="text-center">
                <a className="inline-block px-1" href="#">
                  <img src="atis-assets/social/facebook.svg" />
                </a>
                <a className="inline-block px-1" href="#">
                  <img src="atis-assets/social/twitter.svg" />
                </a>
                <a className="inline-block px-1" href="#">
                  <img src="atis-assets/social/instagram.svg" />
                </a>
              </div>
            </div>
          </nav>
        </div>
      </header>
      <main className="fit flex flex-col">{children}</main>
      <footer>
        <Container>
          <ul className=" overflow-auto flex  lg:items-center lg:w-auto lg:space-x-5 py-12 justify-center">
            {navigation.map(({ title, url }, i, array) => (
              <React.Fragment key={i}>
                <li>
                  <Link
                    className="text-sm text-gray-400 hover:text-gray-500"
                    href={url}
                  >
                    {title}
                  </Link>
                </li>
                {i < array.length - 1 && (
                  <li className="text-gray-300">
                    <svg
                      className="w-4 h-4 current-fill"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                      />
                    </svg>
                  </li>
                )}
              </React.Fragment>
            ))}
          </ul>
        </Container>
      </footer>
    </div>
  )
}
export default Layout
