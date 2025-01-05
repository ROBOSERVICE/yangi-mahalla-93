import img1 from "./assets/firstPageSlides/1.png";
import img2 from './assets/firstPageSlides/2.png';
import img3 from './assets/firstPageSlides/3.png';
import img4 from './assets/firstPageSlides/4.png';
import img5 from './assets/firstPageSlides/5.png';
import img6 from './assets/firstPageSlides/6.png';
import img7 from './assets/firstPageSlides/7.png';
import img8 from './assets/firstPageSlides/8.png';
import img9 from './assets/firstPageSlides/9.png';
import img10 from './assets/firstPageSlides/10.png';

import img12 from './assets/firstPageSlides/12.png';
import img13 from './assets/firstPageSlides/13.png';
import img14 from './assets/firstPageSlides/14.png';
// import img15 from './assets/firstPageSlides/15.png';
import img16 from './assets/firstPageSlides/16.png';
import img17 from './assets/firstPageSlides/17.png';
import img18 from './assets/firstPageSlides/18.png';
import img19 from './assets/firstPageSlides/19.png';
import img20 from './assets/firstPageSlides/20.png';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import './index.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Button } from 'antd';
import { MdOutlineKeyboardDoubleArrowRight } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const App = () => {
   const images = [
      img1,
      img2,
      img3,
      img4,
      img5,
      img6,
      img7,
      img8,
      img9,
      img10,
    
      img12,
      img16
      ,
      img14,
      // img15,
      img13,
      img17,
      img18,
      img19,
      img20,
   ];
   const navigate = useNavigate();
   const [currentSlide, setCurrentSlide] = useState(0);
   return (
      <div className=" select-none  puff-in-center relative min-w-[1910px] min-h-[1080px] w-full h-full ">
         <Button
            type="primary"
            size="large"
            className=" select-none absolute top-10 right-[100px] rounded-xl z-10"
            onClick={() => navigate('/apartment-section')}
         >
            <MdOutlineKeyboardDoubleArrowRight className=" select-none text-[46px]" />
         </Button>
         <Swiper
            onSlideChange={(swiper) => setCurrentSlide(swiper.realIndex)}
            className=" select-none max-w-[1920px] max-h-[1080px] w-full h-full"
            autoplay={{
               delay: 5000,
               disableOnInteraction: false,
            }}
            modules={[Autoplay, Navigation, Pagination]}
            spaceBetween={50}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            mousewheel={{ invert: false }}
            keyboard={{ enabled: true }}
         >
            {images.map((image, index) => (
               <SwiperSlide key={index}>
                  <img
                     src={image}
                     alt=""
                     loading="lazy"
                     className={`${
                        index == currentSlide ? 'kenburns-top' : ''
                     }  `}
                  />
               </SwiperSlide>
            ))}
         </Swiper>
      </div>
   );
};

export default App;
