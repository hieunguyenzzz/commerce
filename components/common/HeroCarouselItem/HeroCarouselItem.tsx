import React from 'react'
import Image, { ImageProps } from 'next/image'
import { homePageData } from './homepage'
import { BsArrowRight } from 'react-icons/bs'
import { FC } from 'react'
import SlickCarousel from '../SlickCarousel'
import Link from 'next/link'

function HeroCarouselItem() {
  return (
    <SlickCarousel settings={null}>
      {homePageData?.map((e, index) => (
        <div key={index}>
          <div
            className="w-full bg-center bg-cover	bg-no-repeat "
            style={{
              backgroundImage: `url(${e.img})`,
            }}
          >
            <div className="mx-auto sm:px-20 sm:container ">
              <div className="mx-5 sm:mx-0 flex items-center h-700">
                <div className="">
                  <h4
                    dangerouslySetInnerHTML={{ __html: e?.title }}
                    className="text-primary-new text-lg leading-6 font-bold"
                  />
                  <h1
                    dangerouslySetInnerHTML={{ __html: e?.text }}
                    className="text-6xl font-bold	"
                  />
                  <hr className="w-14 my-4 border-2 border-primary-new" />
                  <h5
                    dangerouslySetInnerHTML={{ __html: e?.desc }}
                    className="my-2"
                  />
                  <Link href={e?.link}>
                    <a className="mt-4 px-4 py-2 bg-black text-white font-bold flex w-8/12 sm:w-4/12">
                      Shop Now
                      <BsArrowRight size={22} className="ml-2" />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </SlickCarousel>
  )
}

export default HeroCarouselItem
