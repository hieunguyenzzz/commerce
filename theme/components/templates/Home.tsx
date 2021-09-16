// import HomeAllProductsGrid from '@components/common/HomeAllProductsGrid'
import { Container, Layout } from '@components/common'
import Button from '@components/common/Button'
import Image from '@components/common/Image'
import Link from '@components/common/Link'
import { useDATA } from '@components/data/context'

function CardList({
  subHeading = 'Dolor sit amet consectutar',
  heading = 'Featured Projects',
  url = '/projects',
}) {
  const { products = [] } = useDATA()
  return (
    <div>
      <div className="mb-16 flex flex-wrap justify-center md:justify-between items-center">
        <div className="text-center lg:text-left">
          <span className="text-green-600 font-bold">{subHeading}</span>
          <h2 className="text-4xl lg:text-5xl font-bold font-heading lg:leading-normal">
            {heading}
          </h2>
        </div>
        <Button className="hidden md:inline-block leading-loose" href={url}>
          View More Projects
        </Button>
      </div>
      <div className="flex flex-wrap -mx-4 mb-4">
        {products.map((p: any, i: number) => (
          <Card
            key={i}
            {...{
              buttonUrl: '/product/' + p.slug,
              heading: p.name,
              imageUrl: p.images?.[0]?.url,
              subHeading: `${p.price.value} ${p.price.currencyCode}`,
            }}
          />
        ))}
      </div>
      <div className="text-center">
        <a
          className="md:hidden inline-block py-2 px-6 rounded-l-xl rounded-t-xl bg-green-600 hover:bg-green-700 text-gray-50 font-bold leading-loose transition duration-200"
          href="#"
        >
          View More Projects
        </a>
      </div>
    </div>
  )
}
function Card({
  imageUrl = 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80',
  subHeading = '2021',
  heading = 'Lorem ipsum dolor sit amet consectutar',
  buttonUrl = '/',
  buttonText = 'View Case Study',
}: {
  imageUrl?: string
  subHeading?: string
  heading?: string
  buttonUrl?: string
  buttonText?: string
}) {
  return (
    <Link href={buttonUrl} className="mb-8 w-full md:w-1/2 lg:w-1/3 px-4">
      <div className="bg-white rounded hover:shadow-xl transition-all">
        <Image
          className="rounded-t object-cover h-[32rem] w-full"
          src={imageUrl}
        />
        <div className="p-6">
          <span className="text-gray-400">{subHeading}</span>
          <h3 className="mb-4 text-2xl font-bold font-heading">{heading}</h3>
          <Button variant="link" className="flex">
            <svg
              className="mr-3 w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z"
                clipRule="evenodd"
              />
            </svg>
            <span>{buttonText}</span>
          </Button>
        </div>
      </div>
    </Link>
  )
}

export default function Home() {
  return (
    <section>
      <div className="py-20 bg-gray-50 radius-for-skewed">
        <Container>
          <CardList />
        </Container>
      </div>
    </section>
  )
}
Home.Layout = Layout
