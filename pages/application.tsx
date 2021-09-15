// import ApplicationAllProductsGrid from '@components/common/ApplicationAllProductsGrid'
import type { GetStaticPropsContext, InferGetStaticPropsType } from 'next'

export async function getStaticProps({
  preview,
  locale,
  locales,
}: GetStaticPropsContext) {
  const config = { locale, locales }
  return {
    props: {},
    revalidate: 60,
  }
}

export default function Application({}: InferGetStaticPropsType<
  typeof getStaticProps
>) {
  return (
    <div>
      <section>
        <nav className="relative px-6 py-6 bg-white">
          <div className="flex items-center">
            <ul className="hidden lg:flex lg:items-center lg:w-auto lg:space-x-5">
              <li>
                <a
                  className="text-sm text-gray-400 hover:text-gray-500"
                  href="#"
                >
                  Start
                </a>
              </li>
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
              <li>
                <a className="text-sm text-green-600 font-bold" href="#">
                  About Us
                </a>
              </li>
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
              <li>
                <a
                  className="text-sm text-gray-400 hover:text-gray-500"
                  href="#"
                >
                  Services
                </a>
              </li>
            </ul>
            <div className="lg:absolute lg:top-1/2 lg:left-1/2 lg:transform lg:-translate-y-1/2 lg:-translate-x-1/2">
              <a className="text-3xl font-bold leading-none" href="#">
                <img
                  className="h-12"
                  src="atis-assets/logo/atis/atis-mono-black.svg"
                  width="auto"
                />
              </a>
            </div>
            <a
              className="hidden lg:inline-block lg:ml-auto lg:mr-3 py-2 px-6 bg-gray-50 hover:bg-gray-100 text-sm text-gray-900 font-bold rounded-l-xl rounded-t-xl transition duration-200"
              href="#"
            >
              Sign In
            </a>
            <a
              className="hidden lg:inline-block py-2 px-6 bg-green-500 hover:bg-green-600 text-sm text-white font-bold rounded-l-xl rounded-t-xl transition duration-200"
              href="#"
            >
              Sign up
            </a>
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
                  className="block px-4 py-3 mb-3 leading-loose text-xs text-center font-semibold bg-gray-50 hover:bg-gray-100 rounded-l-xl rounded-t-xl"
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
      </section>
      <section>
        <div className="skew skew-top mr-for-radius">
          <svg
            className="h-8 md:h-12 lg:h-20 w-full text-gray-50"
            viewBox="0 0 10 10"
            preserveAspectRatio="none"
          >
            <polygon fill="currentColor" points="0 0 10 10 0 10" />
          </svg>
        </div>
        <div className="skew skew-top ml-for-radius">
          <svg
            className="h-8 md:h-12 lg:h-20 w-full text-gray-50"
            viewBox="0 0 10 10"
            preserveAspectRatio="none"
          >
            <polygon fill="currentColor" points="0 10 10 0 10 10" />
          </svg>
        </div>
        <div className="py-20 bg-gray-50 radius-for-skewed">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap -mx-4">
              <div className="w-full lg:w-1/2 px-4">
                <div className="max-w-md">
                  <span className="text-green-600 font-bold">
                    Dolor sit amet consectutar
                  </span>
                  <h2 className="text-4xl lg:text-5xl font-bold font-heading">
                    Build &amp; Launch without problems
                  </h2>
                  <p className="mb-16 text-gray-500 leading-loose">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Pellentesque efficitur nisl sodales egestas lobortis.
                  </p>
                  <div className="flex flex-wrap">
                    <div className="mb-8 w-full lg:w-1/2">
                      <h4 className="text-gray-500">Total Revenue</h4>
                      <span className="text-3xl lg:text-4xl font-bold">
                        $33,261
                      </span>
                    </div>
                    <div className="mb-8 w-full lg:w-1/2">
                      <h4 className="text-gray-500">Subscribers</h4>
                      <span className="text-3xl lg:text-4xl font-bold">
                        481,095
                      </span>
                    </div>
                    <div className="mb-8 w-full lg:w-1/2">
                      <h4 className="text-gray-500">Modal Sale Rate</h4>
                      <span className="text-3xl lg:text-4xl font-bold">
                        25%
                      </span>
                    </div>
                    <div className="mb-8 w-full lg:w-1/2">
                      <h4 className="text-gray-500">Conversations</h4>
                      <span className="text-3xl lg:text-4xl font-bold">
                        643,533
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap items-center justify-center w-full lg:w-1/2 px-4">
                <button className="order-1 xl:order-0 mr-12 inline-block p-6 bg-white rounded-full shadow text-green-600 hover:text-green-400 focus:outline-none">
                  <svg
                    className="w-6 h-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 19l-7-7m0 0l7-7m-7 7h18"
                    />
                  </svg>
                </button>
                <div className="w-full xl:w-auto order-0 xl:order-1">
                  <img
                    className="mx-auto mb-8 xl:mb-0"
                    src="atis-assets/illustrations/book-detail-full.png"
                  />
                </div>
                <button className="order-2 xl:order-2 ml-12 inline-block p-6 bg-white rounded-full shadow text-green-600 hover:text-green-400 focus:outline-none">
                  <svg
                    className="w-6 h-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="skew skew-bottom mr-for-radius">
          <svg
            className="h-8 md:h-12 lg:h-20 w-full text-gray-50"
            viewBox="0 0 10 10"
            preserveAspectRatio="none"
          >
            <polygon fill="currentColor" points="0 0 10 0 0 10" />
          </svg>
        </div>
        <div className="skew skew-bottom ml-for-radius">
          <svg
            className="h-8 md:h-12 lg:h-20 w-full text-gray-50"
            viewBox="0 0 10 10"
            preserveAspectRatio="none"
          >
            <polygon fill="currentColor" points="0 0 10 0 10 10" />
          </svg>
        </div>
      </section>
      <section>
        <div className="skew skew-top mr-for-radius">
          <svg
            className="h-8 md:h-12 lg:h-20 w-full text-gray-50"
            viewBox="0 0 10 10"
            preserveAspectRatio="none"
          >
            <polygon fill="currentColor" points="0 0 10 10 0 10" />
          </svg>
        </div>
        <div className="skew skew-top ml-for-radius">
          <svg
            className="h-8 md:h-12 lg:h-20 w-full text-gray-50"
            viewBox="0 0 10 10"
            preserveAspectRatio="none"
          >
            <polygon fill="currentColor" points="0 10 10 0 10 10" />
          </svg>
        </div>
        <div className="py-20 bg-gray-50 radius-for-skewed">
          <div className="container mx-auto px-4">
            <div className="mb-16 max-w-md mx-auto text-center">
              <span className="text-green-600 font-bold">
                Dolor sit amet consectutar
              </span>
              <h2 className="text-4xl lg:text-5xl font-bold font-heading">
                Build &amp; Launch without problems
              </h2>
            </div>
            <div className="flex flex-wrap -mx-3">
              <div className="mb-6 w-full lg:w-1/2 px-3">
                <div className="p-6 flex flex-wrap bg-white shadow rounded-lg">
                  <div>
                    <span className="mb-4 lg:mb-0 mr-6 inline-block p-3 md:p-5 rounded-lg bg-green-100">
                      <svg
                        className="h-8 w-8 md:w-12 md:h-12 text-green-500"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                        />
                      </svg>
                    </span>
                  </div>
                  <div className="w-full lg:w-2/3">
                    <h3 className="mb-2 text-2xl font-bold font-heading">
                      Ut congue nec leo eget
                    </h3>
                    <p className="text-gray-500">
                      Donec ut ligula nunc. Mauris blandit vel est et facilisis.
                      Integer sapien felis, aliquet.
                    </p>
                  </div>
                </div>
              </div>
              <div className="mb-6 w-full lg:w-1/2 px-3">
                <div className="p-6 flex flex-wrap bg-white shadow rounded-lg">
                  <div>
                    <span className="mb-4 lg:mb-0 mr-6 inline-block p-3 md:p-5 rounded-lg bg-green-100">
                      <svg
                        className="h-8 w-8 md:w-12 md:h-12 text-green-500"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                      </svg>
                    </span>
                  </div>
                  <div className="w-full lg:w-2/3">
                    <h3 className="mb-2 text-2xl font-bold font-heading">
                      Lorem ipsum dolor sit amet
                    </h3>
                    <p className="text-gray-500">
                      Donec ut ligula nunc. Mauris blandit vel est et facilisis.
                      Integer sapien felis, aliquet.
                    </p>
                  </div>
                </div>
              </div>
              <div className="mb-6 lg:mb-0 w-full lg:w-1/2 px-3">
                <div className="p-6 flex flex-wrap bg-white shadow rounded-lg">
                  <div>
                    <span className="mb-4 lg:mb-0 mr-6 inline-block p-3 md:p-5 rounded bg-green-100">
                      <svg
                        className="h-8 w-8 md:w-12 md:h-12 text-green-500"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M16 4v12l-4-2-4 2V4M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                        />
                      </svg>
                    </span>
                  </div>
                  <div className="w-full lg:w-2/3">
                    <h3 className="mb-2 text-2xl font-bold font-heading">
                      Morbi sagittis ligula sit
                    </h3>
                    <p className="text-gray-500">
                      Donec ut ligula nunc. Mauris blandit vel est et facilisis.
                      Integer sapien felis, aliquet.
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-full lg:w-1/2 px-3">
                <div className="p-6 flex flex-wrap bg-white shadow rounded-lg">
                  <div>
                    <span className="mb-4 lg:mb-0 mr-6 inline-block p-3 md:p-5 rounded bg-green-100">
                      <svg
                        className="h-8 w-8 md:w-12 md:h-12 text-green-500"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z"
                          clipRule="evenodd"
                        />
                        <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z" />
                      </svg>
                    </span>
                  </div>
                  <div className="w-full lg:w-2/3">
                    <h3 className="mb-2 text-2xl font-bold font-heading">
                      Proin fringilla eleifend justo
                    </h3>
                    <p className="text-gray-500">
                      Donec ut ligula nunc. Mauris blandit vel est et facilisis.
                      Integer sapien felis, aliquet.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="skew skew-bottom mr-for-radius">
          <svg
            className="h-8 md:h-12 lg:h-20 w-full text-gray-50"
            viewBox="0 0 10 10"
            preserveAspectRatio="none"
          >
            <polygon fill="currentColor" points="0 0 10 0 0 10" />
          </svg>
        </div>
        <div className="skew skew-bottom ml-for-radius">
          <svg
            className="h-8 md:h-12 lg:h-20 w-full text-gray-50"
            viewBox="0 0 10 10"
            preserveAspectRatio="none"
          >
            <polygon fill="currentColor" points="0 0 10 0 10 10" />
          </svg>
        </div>
      </section>
    </div>
  )
}
