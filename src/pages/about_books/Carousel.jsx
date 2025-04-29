import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCards } from 'swiper/modules';
import { useNavigate } from 'react-router-dom';
import Nav from '../../components/nav/Nav';
import Translate from '../../components/button/Translate';

import "../../styles/about_books/Carousel.scss";
import 'swiper/css';
import 'swiper/css/effect-cards';

const Carousel = () => {
  const nav = useNavigate();

  return (
    <div className="carousel-container">
      <Nav />
      <Translate />
      <Swiper
        effect= {'cards'}
        grabCursor= {true}
        modules={[EffectCards]}
      >
        <SwiperSlide className='slide1' onClick={() => nav("/aboutbooks/yeosu")}></SwiperSlide>
        <SwiperSlide className='slide2' onClick={() => nav("/aboutbooks/mayof")}></SwiperSlide>
        <SwiperSlide className='slide3' onClick={() => nav("/aboutbooks/vegetarian")}></SwiperSlide>
        <SwiperSlide className='slide4' onClick={() => nav("/aboutbooks/white")}></SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Carousel;