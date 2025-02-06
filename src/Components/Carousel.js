import React, { useRef, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import './styles.css';


// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';


//Librat 
import image1 from '../Assets/1.png';
import image2 from '../Assets/2.png';
import image3 from '../Assets/3.png';
import image4 from '../Assets/4.png';
import image5 from '../Assets/5.png';
import image6 from '../Assets/6.png';
import image7 from '../Assets/7.png';
import image8 from '../Assets/8.png';
import image9 from '../Assets/9.png';

export default function App() {
  const swiperInstance = useRef(null);

  useEffect(() => {
    if (swiperInstance.current) {
      swiperInstance.current.slideTo(4, 0); 
    }
  }, []);

  return (
    <>
      <Swiper
        onSwiper={(swiper) => {
          swiperInstance.current = swiper;
        }}
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={{ clickable: true }}
        modules={[EffectCoverflow, Pagination]} 
        className="mySwiper"
          >
         <SwiperSlide>
        <img src={image1} alt="Book Image" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={image2} alt="Book Image" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={image3} alt="Book Image" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={image4} alt="Book Image" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={image5} alt="Book Image" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={image6} alt="Book Image" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={image7} alt="Book Image" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={image8} alt="Book Image" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={image9} alt="Book Image" />
      </SwiperSlide>
      </Swiper>
    </>
  );
}
