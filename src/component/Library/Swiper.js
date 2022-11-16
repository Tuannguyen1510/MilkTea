
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';

export default () => {
  return (
    <Swiper
      // install Swiper modules
      modules={[Pagination]}
      spaceBetween={30}
      slidesPerView={3}
      // navigation
      pagination={{ clickable: true }}
      // scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
     <SwiperSlide> 
         <div className="card SwiperCart">
        <img className="card-img-top" src="./img/db1.jpg" alt="Title" />
        <div className="card-body">
          <h4 className="card-title">Bulbul Hassan</h4>
          <p className="card-text">Barista</p>
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide>  
        <div className="card SwiperCart">
        <img className="card-img-top" src="./img/db2.png" alt="Title" />
        <div className="card-body">
          <h4 className="card-title">M.Mohammad Nur</h4>
          <p className="card-text">Barista</p>
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide>  
        <div className="card SwiperCart">
        <img className="card-img-top" src="./img/db3.jpg" alt="Title" />
        <div className="card-body">
          <h4 className="card-title">Team TeaMilk</h4>
          <p className="card-text">Barista</p>
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide>  
        <div className="card SwiperCart">
        <img className="card-img-top" src="./img/db4.jpg" alt="Title" />
        <div className="card-body">
          <h4 className="card-title">Team PC-Milk</h4>
          <p className="card-text">Barista</p>
        </div>
      </div>
      </SwiperSlide>
    </Swiper>
  );
};