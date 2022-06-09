import React from 'react'
import './Intro.css'
import '../FloatingDiv/FloatingDiv'

import vector1 from '../../img/vector1.png';
import vector2 from '../../img/vector2.png';
import bg from '../../img/Port-bg.png';
import FloatingDiv from '../FloatingDiv/FloatingDiv';

import Insta from '@iconscout/react-unicons/icons/uil-instagram'
import Twitter from '@iconscout/react-unicons/icons/uil-twitter'
import Github from '@iconscout/react-unicons/icons/uil-github'
import {motion} from 'framer-motion'

function Intro() {

  const transition = {duration : 2, type: 'spring'}

  return (
    <section className="intro" >
        <div className="i-left"
        data-aos="fade-right"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000"
        >
            <div className="i-name">
               <h1>The Best <span>Makeup&nbsp;products</span> For Your Skin.</h1>
               <p>Enjoy classic yet pocket friendly prices from<span>Iclassic</span></p>
            </div>
            <button className="btn-6 i-button btn-6g">
                 <span>get one</span>
            </button>
            <div className="i-icons">
                    <Insta color=' #251910' size='5rem'/>
                    <Twitter color=' #251910' size='5rem'/>
                    <Github color=' #251910' size='5rem'/>
            </div>
        </div>
        <div className="i-right" data-aos="fade-left"
         data-aos-easing="ease-out-cubic"
     data-aos-duration="2000"
        >
            <img src={ vector1 } alt="#" />
            <img src={ vector2 } alt="#" />
            <div className="img">
              <img src={ bg } alt="#" className='content-img'/>
            </div>

      {/* blur divs */}
      <div className="blur" style={{ background: "var(--blur)"}}></div>
      <div className="blur" style={{background: '#A7633C', top: '17rem', width: '21rem', height:'11rem', left:'-9rem' }}>
      </div>
      </div>
    </section>
  );
};

export default Intro