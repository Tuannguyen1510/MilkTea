
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
      slidesPerView={1}
      // navigation
      pagination={{ clickable: true }}
      // scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
     <SwiperSlide> 
        <div className="SwiperTes ">
      <div className="SwiperTes-content">
        <h5>Testimonials</h5>
        <h2>Our customer say</h2>
        <div class="img">
        <img className="" src="./img/Quotes.png" alt="Title" />
        </div>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Leo augue nibh est nisi, ultricies. Consectetur et faucibus vivamus lorem hendrerit enim donec ut. Nec blandit vulputate varius at quis non. </p>
         <div className='user'>
         <img className="" src="./img/Ellipse 23.png" alt="Title" />
         <p>William carry</p>
         <p>Guest</p>
         </div>
      </div>
        </div>
      </SwiperSlide>
  
      <SwiperSlide>  
       <div className="SwiperTes">
       <div className="SwiperTes-content">
        <h5>Testimonials</h5>
        <h2>Our customer say</h2>
        <div class="img">
        <img className="" src="./img/Quotes.png" alt="Title" />
        </div>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Leo augue nibh est nisi, ultricies. Consectetur et faucibus vivamus lorem hendrerit enim donec ut. Nec blandit vulputate varius at quis non. </p>
         <div className='user'>
         <img className="" src="./img/Ellipse 23.png" alt="Title" />
         <p>William carry</p>
         <p>Guest</p>
         </div>
      </div>
      </div>
      </SwiperSlide>

      <SwiperSlide>  
        <div className="SwiperTes">
        <div className="SwiperTes-content">
        <h5>Testimonials</h5>
        <h2>Our customer say</h2>
        <div class="img">
        <img className="" src="./img/Quotes.png" alt="Title" />
        </div>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Leo augue nibh est nisi, ultricies. Consectetur et faucibus vivamus lorem hendrerit enim donec ut. Nec blandit vulputate varius at quis non. </p>
         <div className='user'>
         <img className="" src="./img/Ellipse 23.png" alt="Title" />
         <p>William carry</p>
         <p>Guest</p>
         </div>
      </div>
      </div>
      </SwiperSlide>

      <SwiperSlide>  
        <div className="SwiperTes">
        <div className="SwiperTes-content">
        <h5>Testimonials</h5>
        <h2>Our customer say</h2>
        <div class="img">
        <img className="" src="./img/Quotes.png" alt="Title" />
        </div>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Leo augue nibh est nisi, ultricies. Consectetur et faucibus vivamus lorem hendrerit enim donec ut. Nec blandit vulputate varius at quis non. </p>
         <div className='user'>
         <img className="" src="./img/Ellipse 23.png" alt="Title" />
         <p>William carry</p>
         <p>Guest</p>
         </div>
      </div>
      </div>
      </SwiperSlide>
    </Swiper>
  );
};