import React from 'react'

import './Work.css'

import Profile from "../../img/profile5.png";
import SecondProfile from "../../img/profile6.png";
import ThirdProfile from "../../img/profile7.png";
import FourProfile from "../../img/makelip.png";
import FifthProfile from "../../img/lipstick.png";

import {motion} from 'framer-motion'

function Work() {

  return (
    <div className="work">
         <div className="color"
          data-aos="zoom-out-up"
          data-aos-easing="ease-out-cubic"
     data-aos-duration="2000"
          >
           <h1>Skincare Routine<span><br/> Glow&nbsp;Your&nbsp;Skin <br/>With Us</span></h1>
            <p>
                Focusing on good skincare boosts your level of confidence, and you start to <br/>love your mirror reflection.
                As skin cells die and are reborn every day,<br/> So it's never too late to start with good skin care with us.
            </p>
            <button className="button w-button"> Schedule a Section</button>
            <div className="blur s-blur1" style={{ background: "rgb(252,237,242)" }}></div>
        </div>
        {/* RIGHT SIDE */}
        <div className='w-right'>
            <div
            // initial={{ rotate: 45 }}
            // whileInview={{ rotate: 0 }}
            // animate={{ rotate: 360 }}
            // viewport={{margin: '-40px'}}
            // transition={{duration: 3.5, type: 'spring'}}
            data-aos="example-anim3"
            data-aos-duration="2000"
            className='w-mainCircle'>
                <div className="w-secCircle">
                    <img src={Profile} alt=""/>
                </div>
                 <div className="w-secCircle">
                    <img src={SecondProfile} alt=""/>
                </div>
                 <div className="w-secCircle">
                    <img src={ThirdProfile} alt=""/>
                </div>
                <div className="w-secCircle">
                    <img src={FourProfile} alt=""/>
                </div>
                 <div className="w-secCircle">
                    <img src={FifthProfile} alt=""/>
                </div>
            </div>
            {/* background Circles */}
            <div
            data-aos="fade-up"
            data-aos-duration="3000"
             className="w-backCircle pinkCircle"></div>
            <div
            data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500"
            className="w-backCircle brownCircle"></div>
        </div>
    </div>
  );
};

export default Work