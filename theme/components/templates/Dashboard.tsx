// import DashboardAllProductsGrid from '@components/common/DashboardAllProductsGrid'
import { Layout } from '@components/common'

export default function Dashboard() {
  return (
    <section className="flex-1 felx flex-col bg-gray-50 ">
      <div className="py-20  radius-for-skewed flex-1">
        <div className="border-b">
          <div className="mb-16 max-w-xl mx-auto px-4 text-center">
            <span className="text-green-600 font-bold">Hello, Hieu Nguyen</span>
            <h2 className="text-4xl lg:text-5xl font-bold font-heading lg:leading-normal">
              Dashboard
            </h2>
          </div>
          <div className="max-w-3xl mx-auto">
            <div className="flex flex-wrap px-4 text-center lg:-mx-4 lg:space-x-4 text-base lg:text-xl justify-center">
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
            <div className="w-full max-w-sm mx-auto flex py-12 justify-center">
              <p>account information goes here </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
Dashboard.Layout = Layout
