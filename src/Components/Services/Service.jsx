import React from 'react'
import './Service.css'
import Card from "../Card/Card";

import Lipstick from "../../img/lipstick.png";
import Makelip from "../../img/makelip.png";
import Makeup  from "../../img/makeup.png";
import {motion} from 'framer-motion'


function Service() {
    const transition = {duration : 1, type: 'spring'}
  return (
    <div className="services" id='Services'>
        {/* left side */}
        <div className="awesome"
        data-aos="fade-down"
         data-aos-easing="ease-out-cubic"
     data-aos-duration="2000"
        >
            <span> Iclassic Products</span>
            <span> What We Produce</span>
            <p><span>
                Lorem ispum is simplay dummt text of printing
                <br />
                Ispum this is not what you think it is kind of
            </span></p>
            <button className="button s-button"> Veiw Products</button>
            <div className="blur s-blur1" style={{ background: "rgb(252,237,242)" }}></div>
        </div>

        {/* right side */}
        <div className="cards">
            <motion.div className='card-one'
            whileInView={{left: '20rem'}}
            initial={{left: '23%'}}
            transition={transition}
            >
                <Card
                emoji = {Lipstick}
                heading = {'Lipstick'}
                detail = {"Longlasting, Monsturizer, Lipbalm, Adobe"}
                />
            </motion.div>
              {/* second card */}
            <motion.div className='card-two'
            whileInView={{left: '2.5rem'}}
            initial={{left: '20%'}}
            transition={transition}>
                <Card className="card-content"
                    emoji={Makelip}
                    heading={'Mini Pro Kits'}
                    detail={"Fluph, Supersoft, Blends well"}
                />
            </motion.div>
            {/* 3rd card */}
            <motion.div className='card-three'
            whileInView={{left: '37rem'}}
            initial={{right: '23%'}}
            transition={transition} >
                <Card
                    emoji={Makeup}
                    heading={'Super Pro Kits'}
                    detail={"Fluph, Supersoft, Blends well"}
                />
            </motion.div>
            <div className="blur s-blur2" style={{ background: "rgb(252,237,242)" }}></div>
        </div>
    </div>
  )
}

export default Service