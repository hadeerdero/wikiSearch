import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import 'swiper/css';
import '../swiper.css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
const SwiperCarousel = ({ children, items,spaceBetween,slidesPerView }) => {
  const clonedItems = items.map((el) => {
    return <SwiperSlide>{React.cloneElement(children, { item: el, key: el.id })}</SwiperSlide>
    
  })
    return (
        <>
                  <Swiper
        modules={[Navigation]}
      spaceBetween={spaceBetween}
        slidesPerView={slidesPerView}
        navigation
      // pagination={{ clickable: true }}
     
    >
          { clonedItems}

        
 
    </Swiper>
        </>
    )
}
export default SwiperCarousel