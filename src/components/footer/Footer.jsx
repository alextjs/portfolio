import React from 'react'
import './footer.css'
import {FiInstagram} from 'react-icons/fi'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>Portfolio A Turcan</a>

      <ul className="permalinks">
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.instagram.com/alexturcan_/" target='_blank'><FiInstagram/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Alexandru Turcan. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer