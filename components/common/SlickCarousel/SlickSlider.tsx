import React from 'react'
import { FC } from 'react'
import Slider from 'react-slick'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

interface Props {
  settings: any
  children: any
}

const SlickCarousel: FC<Props> = ({ settings, children, ...props }) => {
  var defaultSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  }

  const setting = settings ? settings : defaultSettings

  return <Slider {...setting}>{children}</Slider>
}

export default SlickCarousel
