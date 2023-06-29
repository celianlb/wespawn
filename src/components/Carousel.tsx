import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Image from 'next/image';

import { Autoplay } from 'swiper';

const Carousel = () => {
  return (
    <Swiper
      loop={true}
      slidesPerView={2}
      autoplay={{
        delay: 1000,
      }}
      breakpoints={{
        630: {
          slidesPerView: 3,
          spaceBetween: 40,
        },
        768: {
          slidesPerView: 4,
          spaceBetween: 40,
        },
      }}
      modules={[Autoplay]}
      className="mySwiper justify-between"
    >
      <SwiperSlide>
        <Image src="/img/partenaires/zevent.svg" width={125} height={75} alt="Z-Event" />
      </SwiperSlide>
      <SwiperSlide>
        <Image src="/img/partenaires/digitalcampus.svg" width={125} height={75} alt="Digital Campus" />
      </SwiperSlide>
      <SwiperSlide>
        <Image src="/img/partenaires/espot.svg" width={125} height={75} alt="espot" />
      </SwiperSlide>
      <SwiperSlide>
        <Image src="/img/partenaires/zqsd.svg" width={125} height={75} alt="zqsd" />
      </SwiperSlide>
    </Swiper>
  );
};

export default Carousel;





