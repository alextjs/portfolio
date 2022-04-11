import React, { useEffect } from 'react'
import './services.css'
import { BiCheck } from 'react-icons/bi'
import Aos from 'aos'
import 'aos/dist/aos.css'

const Services = () => {
  useEffect( () => {
    Aos.init({duration: 2000})
  }, [])
  return (
    <section id='services'>
      <h5>What I Offer?</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article data-aos="flip-right" className='service'>
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Web.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Mobile Apps.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Figma</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Marvel</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Webflow</p>
            </li>
          </ul>
        </article>
        <article data-aos="flip-up" className='service'>
          <div className="service__head">
            <h3>Web Development</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className='service__list-icon'/>
              <p>HTML</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>CSS</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>JavaScript</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>React</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Bootstrap</p>
            </li>
          </ul>
        </article>
        <article data-aos="flip-left" className='service'>
          <div className="service__head">
            <h3>Content Creation</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className='service__list-icon'/>
              <p>SEO Content</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Graphics</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Content Offers</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Email Marketing</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Blog</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  )
}

export default Services