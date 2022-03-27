import { v4 as uuidv4 } from 'uuid';
import SwiperCore, {
  Navigation, Pagination, Scrollbar, A11y, Autoplay,
} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { router } from '../../utils/utils';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import './HomesCard.css';
import RatingHomes from '../RatingHomes/RatingHomes';

SwiperCore.use([Autoplay]);

export function HomesCard({ homes }) {
  return (
    <div className="allHomes_box">
      <div className="allHomes_info">
        <div className="allHomes_title">
          <h4>{homes?.name.toUpperCase()}</h4>
          <h6>
            {homes?.price}
            {' '}
            &#8381;
          </h6>
          <RatingHomes id={homes} />
        </div>
        <div className="allHomes_description">{homes?.description}</div>
      </div>

      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        slidesPerView={1}
        navigation
        autoplay={{
          delay: 3000,
        }}
        speed={3000}
        className="swiper_style"
      >
        {
          homes.ImageHouses?.map((img) => (
            <SwiperSlide key={uuidv4()} className="swiper_style" style={{ backgroundImage: `url(${process.env.REACT_APP_URL}${router.admin.imgHousePath}${img.name})` }} />
          ))
        }
      </Swiper>
    </div>
  );
}
