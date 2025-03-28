// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';

import './BannerCard.css';

// import required modules
import { EffectCards } from 'swiper/modules';

const BannerCard = () => {
  return (
    <div className='banner'>
        <Swiper
        effect={'cards'}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper"
      >
        <SwiperSlide><img src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1391546498i/18892998.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1720446357i/209439446._SX300_.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1738170651i/199347538.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1736414856i/217206125._SX300_.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1709902335i/203578918.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1607462569i/53152636._SX300_.jpg" alt="" /></SwiperSlide>
      </Swiper>
    </div>
  )
}

export default BannerCard