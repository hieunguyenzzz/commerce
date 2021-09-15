// import ApplicationAllProductsGrid from '@components/common/ApplicationAllProductsGrid'
import { Layout } from '@components/common'
import detailImage from '../../profile-html-templates/atis-assets/illustrations/book-detail-full.png'
export default function Application() {
  return (
    <>
      <section>
        <div className="py-20 bg-gray-50 radius-for-skewed">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap -mx-4">
              <div className="w-full lg:w-1/2 px-4">
                <div className="max-w-md">
                  <span className="text-green-600 font-bold">
                    Dolor sit amet consectutar
                  </span>
                  <h2 className="text-4xl lg:text-5xl font-bold font-heading lg:leading-normal">
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
                  <img className="mx-auto mb-8 xl:mb-0" src={detailImage.src} />
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
      </section>
      <section>
        <div className="py-20 bg-gray-50 radius-for-skewed">
          <div className="container mx-auto px-4">
            <div className="mb-16 max-w-md mx-auto text-center">
              <span className="text-green-600 font-bold">
                Dolor sit amet consectutar
              </span>
              <h2 className="text-4xl lg:text-5xl font-bold font-heading lg:leading-normal">
                Build &amp; Launch without problems
              </h2>
            </div>
            <div className="flex flex-wrap -mx-3">
              <div className="mb-6 w-full lg:w-1/2 px-3">
                <div className="p-6 flex flex-wrap bg-white shadow rounded-lg">
                  <div>
                    <span className="mb-4 lg:mb-0 mr-6 inline-block p-3 md:p-5 rounded-lg bg-green-100">
                      <svg
                        className="h-8 w-8 md:w-12 md:h-12 text-green"
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
      </section>
    </>
  )
}
Application.Layout = Layout