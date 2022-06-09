import React from 'react'
import './Portfolio.css'
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { data } from "./data";

import SwiperCore,{EffectCoverflow, Pagination} from "swiper/core";

import 'swiper/css';

SwiperCore.use([EffectCoverflow, Pagination]);
const Portfolio = () => {
  return (
      <div className="portifolio-heading" id="portifolio" data-aos="zoom-in"
       data-aos-easing="ease-out-cubic"
     data-aos-duration="2000"
      >
         <h1> New Products </h1>
       <Swiper
      effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper">
            {data.map((item,key)=>(
                <SwiperSlide>
                <div className="slider-div">
                      <img src={item.image} alt={item.name}/>
                    <span>
           <p className="big-text">{item.bigText}</p>
            <p className="small-text">{item.quantity}</p>
            </span>
           <span className="span-pii">
             <p className="small-text"> {item.quality}</p>
            <p className="big-text"> {item.price}</p>
           </span>
                </div>

                </SwiperSlide>
            ))}
       </Swiper>

      </div>


  );
};

export default Portfolio;