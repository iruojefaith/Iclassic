import React from 'react';
import './Testimonial.css';
import {Swiper, SwiperSlide} from 'swiper/react'
import profilePic1 from "../../img/profile1.jpg";
import profilePic2 from "../../img/profile2.jpg";
import profilePic3 from "../../img/profile3.jpg";
import profilePic4 from "../../img/Port8.jpg";

import { Pagination } from "swiper";
import 'swiper/css/pagination';
import 'swiper/css';

function Testimonial() {
   const clients = [
       {
           img: profilePic1,
           review:
           "id mattis lectus. Mauris convallis magna velullamcorper commodo. Aliquam erat volutpat. Mauris bibendum nunc vel ante imperdiet, sit amet ornare ipsum varius. In mattis orci augue, a lacinia urna volutpat vitae. Lorem ipsum dolor sit amet,consectetur adipiscing elit.",
       },
       {
           img: profilePic2,
           review:
           "id mattis lectus. Mauris convallis magna velullamcorper commodo. Aliquam erat volutpat. Mauris bibendum nunc vel ante imperdiet, sit amet ornare ipsum varius. In mattis orci augue, a lacinia urna volutpat vitae. Lorem ipsum dolor sit amet,consectetur adipiscing elit.",
       },
       {
           img: profilePic3,
           review:
           "id mattis lectus. Mauris convallis magna velullamcorper commodo. Aliquam erat volutpat. Mauris bibendum nunc vel ante imperdiet, sit amet ornare ipsum varius. In mattis orci augue, a lacinia urna volutpat vitae. Lorem ipsum dolor sit amet,consectetur adipiscing elit.",
       },{
           img: profilePic4,
           review:
           "id mattis lectus. Mauris convallis magna velullamcorper commodo. Aliquam erat volutpat. Mauris bibendum nunc vel ante imperdiet, sit amet ornare ipsum varius. In mattis orci augue, a lacinia urna volutpat vitae. Lorem ipsum dolor sit amet,consectetur adipiscing elit.",
       }
   ]
  return (
    <div className="t-wrapper"
    data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000"
    >
        <div className="t-heading">
            <span>Clients reviews on </span>
            <span> &nbsp; &nbsp; Our Products </span>
        </div>

  {/* Slider */}

        <Swiper
        modules={[Pagination] }
        slidesPerview={1}
        pagination={{ clickable: true }}

        >

            {clients.map((client, index) => {
                return(
                    <SwiperSlide key={index}>
                    <div className="testimonial">
                         <img src={client.img} alt=""/>
                        <span>{client.review}</span>
                    </div>
                    </SwiperSlide>
                );
            })}
        </Swiper>
    </div>
  );
};


export default Testimonial