import React from 'react'
import './Experience.css'


function Experience() {
  return (
    <div className="experience"
    data-aos="fade-up"
         data-aos-easing="ease-out-cubic"
     data-aos-duration="2000"
    >
        <div className="achievement">
            <div className="circle">5+</div>
            <span>Years</span>
            <span>In&nbsp;Production</span>
        </div>
        <div className="achievement">
            <div className="circle">5000+</div>
            <span>Produced</span>
            <span>Products</span>
        </div>
        <div className="achievement">
            <div className="circle">10</div>
            <span>Partnership</span>
            <span>Companies</span>
        </div>
         <div className="achievement">
            <div className="circle">15+</div>
            <span>Awards</span>
            <span>Recieved</span>
        </div>
    </div>

  )
}

export default Experience