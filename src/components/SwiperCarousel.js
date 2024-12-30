import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import 'swiper/css';
import '../swiper.css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
const SwiperCarousel = () => {
    return (
        <>
                  <Swiper
        modules={[Navigation]}
      spaceBetween={50}
        slidesPerView={3}
        navigation
      // pagination={{ clickable: true }}
     
    >
      <SwiperSlide>Slide 1</SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>
        
 
    </Swiper>
        </>
    )
}
export default SwiperCarousel