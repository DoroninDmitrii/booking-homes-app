import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCube, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/effect-cube';
import 'swiper/css/pagination';
import './Galeria.css';
import dom1 from '../../img/galeria1.webp';
import dom2 from '../../img/galeria2.jpeg';
import dom3 from '../../img/galeria3.webp';

function Galeria() {
  return (
    <div className="app-container-galeria">
      <div className="galeria-text">
        <h3 className="h3-text">Галерея</h3>
        <p>ВСЕГО 2 ЧАСА ЕЗДЫ ОТ ПЕТЕРБУРГА</p>
        <p>БЕРЕГ ОЗЕРА И ЧИСТЫЙ ВОЗДУХ</p>
        <p>КОМФОРТ ГОРОДСКОГО ОТЕЛЯ НА ПРИРОДЕ</p>
        <p>ТЕПЛО ДАЖЕ В ХОЛОДНОЕ ВРЕМЯ ГОДА</p>
        <p>УЮТНЫЙ ИНТЕРЬЕР ДОМИКОВ</p>
        <p>ПРИЯТНЫЙ ПЕРСОНАЛ ЗАБОТИТСЯ КАЖДУЮ МИНУТУ</p>
      </div>
      <div className="galeria-container">

        <Swiper
          effect="cube"
          grabCursor
          cubeEffect={{
            shadow: true,
            slideShadows: true,
            shadowOffset: 20,
            shadowScale: 0.94,
          }}
          pagination
          modules={[EffectCube, Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img src={dom1} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={dom2} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={dom3} alt="" />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}

export default Galeria;
