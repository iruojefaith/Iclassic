//rfce shortcut for react component

import React, {useState} from 'react';

import './Navbar.css'
import {Link} from 'react-scroll'


function Navbar() {
    const [isMobile, setIsMobile] = useState(false);

  return (
    <nav className="navbar-wrapper">
            <h3 className="n-name">Iclassic.</h3>

                <ul  className={isMobile? "nav-links-mobile": "nav-links"}
                 onClick={() => setIsMobile(false)}
                >
            <Link spy={true} to='Navbar' smooth={true}  className="nav-home">
                <li>Home</li>
            </Link>
            <Link spy={true} to='Services' smooth={true} className="nav-services">
                <li>Services</li>
            </Link>
            <Link spy={true} to='Experience' smooth={true} className="nav-experience">
                <li>Experience</li>
            </Link>
            <Link spy={true} to='Portfolio' smooth={true} className="nav-portfolio">
                <li>Portfolio</li>
            </Link>
             <Link spy={true} to='Testimonial' smooth={true} className="nav-testimonial">
            <li>Testimonials</li>
            </Link>
                </ul>

                <button className="mobile-menu-icon"
                onClick={() => setIsMobile(!isMobile)}
                >
                    {isMobile ? <i className="fas fa-times"></i> : <i className="fas fa-bars"></i>}
                </button>

    </nav>

  )
}

export default Navbar