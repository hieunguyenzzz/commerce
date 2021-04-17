import React from 'react'
import Countdown from 'react-countdown'
import Link from 'next/link'
import { BsArrowRight } from 'react-icons/bs'

interface ProductOfferProps {}

const ProductOffer: React.FC<ProductOfferProps> = ({}) => {
  // Waiting for data
  // This background need to be dynamic

  const Background =
    'https://live.hasthemes.com/html/7/helendo-preview/helendo/assets/images/bg/h1-countdown.jpg'

  const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      return <span>Offer ended!</span>
    } else {
      return (
        <div className="flex my-14">
          <div className="flex-col text-center">
            <div className="text-2xl md:text-6xl mb-2 md:mb-4">{days}</div>
            <span>DAYS</span>
          </div>
          <span className="text-4xl md:text-6xl px-2 md:px-5">:</span>
          <div className="flex-col text-center">
            <div className="text-2xl md:text-6xl mb-2 md:mb-4">{hours} </div>
            <span>HOURS</span>
          </div>
          <span className="text-4xl md:text-6xl px-2 md:px-5 ">:</span>
          <div className="flex-col text-center">
            <div className="text-2xl md:text-6xl mb-2 md:mb-4">{minutes}</div>
            <span>MINTS</span>
          </div>
          <span className="text-4xl md:text-6xl px-2 md:px-5">:</span>
          <div className="flex-col text-center">
            <div className="text-2xl md:text-6xl mb-2 md:mb-4">{seconds}</div>
            <span>SECS</span>
          </div>
        </div>
      )
    }
  }

  return (
    <div className="px-2 my-2 md:my-24 md:container-xl">
      <div
        className="py-36 bg-center bg-cover	bg-no-repeat"
        style={{
          backgroundImage: `url(${Background})`,
        }}
      >
        <div className="px-8 w-full md:w-full md:pr-12 md:container mx-auto">
          <div className="w-full md:w-2/5">
            <h2 className="font-bold text-4xl">
              Deco Collection <span className="text-red"> 50% OFF</span>
            </h2>
            <hr className="w-20 my-4 border-2 border-primary-new mb-6" />
            <p>
              The standard chunk of Lorem Ipsum used since the 1500s is
              reproduced for those. Sections 1.10.32 and 1.10.33 from “de
              Finibus Bonorum et Malorum
            </p>
            <div>
              <Countdown date={Date.now() + 10000000000} renderer={renderer} />
            </div>
          </div>

          <Link href={'/search'}>
            <a className="mt-4 px-4 py-2 bg-black text-white font-bold flex w-8/12 sm:w-6/12 md:w-3/12">
              Shop Now
              <BsArrowRight size={22} className="ml-2" />
            </a>
          </Link>
        </div>
      </div>
    </div>
  )
}
export default ProductOffer
