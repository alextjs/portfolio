import React, { useEffect } from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/about1.jpg'
import HeaderSocials from './HeaderSocials'
import Aos from 'aos'
import "aos/dist/aos.css"

const Header = () => {
  useEffect( () => {
    Aos.init({duration: 2000});
  }, []);
  return (

    <header>
      <div data-aos="fade-up" className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Alexandru</h1>
        <h5 className="text-light">Front End Developer</h5>
        <CTA/>
        <HeaderSocials/>

        <div className="me">
          <img src={ME} alt="me"/>
        </div>
        <a href="#contact" className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header