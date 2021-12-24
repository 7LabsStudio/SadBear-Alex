import React from 'react';
import "./TeamSlider.scss"

import SwiperCore, { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/swiper-react.cjs.js';
import 'swiper/swiper.scss'
import "swiper/components/pagination/pagination.scss"

SwiperCore.use([Pagination]);

export const TeamSlider = ({ children }) => {

  const pagination = {
    "clickable": true,
  }


  return (
    <Swiper className="team-slider"
      pagination={pagination}
      spaceBetween={100}
    >
      {children.map((item, index) => [
        <SwiperSlide key={index}>{item}</SwiperSlide>
      ])}
    </Swiper>
  )
}
export default TeamSlider

