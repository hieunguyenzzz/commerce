// import DashboardAllProductsGrid from '@components/common/DashboardAllProductsGrid'
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

export default function Dashboard({}: InferGetStaticPropsType<
  typeof getStaticProps
>) {
  return (
    <div>
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
          <div className="border-b">
            <div className="mb-16 max-w-xl mx-auto px-4 text-center">
              <span className="text-green-600 font-bold">
                Hello, Hieu Nguyen
              </span>
              <h2 className="text-4xl lg:text-5xl font-bold font-heading">
                Dashboard
              </h2>
            </div>
            <div className="max-w-3xl mx-auto">
              <div className="flex flex-wrap px-4 text-center lg:-mx-4 lg:space-x-4 text-base lg:text-xl">
                <button className="px-4 py-4 w-full md:w-1/2 lg:w-auto font-bold text-green-600 border-b-2 border-green-600">
                  Account Information
                </button>
                <button className="px-4 py-4 w-full md:w-1/2 lg:w-auto font-bold text-gray-400 hover:text-green-600 border-b-2 border-transparent hover:border-green-600 transition duration-150">
                  Orders
                </button>
                <button className="px-4 py-4 w-full md:w-1/2 lg:w-auto font-bold text-gray-400 hover:text-green-600 border-b-2 border-transparent hover:border-green-600 transition duration-150">
                  Returns
                </button>
                <button className="px-4 py-4 w-full md:w-1/2 lg:w-auto font-bold text-gray-400 hover:text-green-600 border-b-2 border-transparent hover:border-green-600 transition duration-150">
                  Refunds
                </button>
              </div>
            </div>
          </div>
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <div className="w-full max-w-sm mx-auto">
                <p>account information goes here </p>
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
