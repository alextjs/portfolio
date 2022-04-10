import React, { useEffect } from 'react'
import '../portfolio/portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.jpg'
import Aos from 'aos'
import 'aos/dist/aos.css'

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'CitizenShipper - Get Shipping Quotes for Pets, Motorcycles.',
    link: 'https://citizenshipper.com/',
    btn: 'Citizenshipper'

  },

  {
    id: 2,
    image: IMG2,
    title: 'CC Top Builders a registered Home builders in London',
    link: 'https://www.cctopbuilders.co.uk/',
    btn: 'CCTopBuilders'

  },
  {
    id: 3,
    image: IMG3,
    title: 'Sky Ways Roofing - business that works on a personal case',
    link: 'https://www.skywaysroofing.co.uk/',
    btn: 'SkyWaysRoofing'
  },
  {
    id: 4,
    image: IMG4,
    title: 'Loft construction company based in West London',
    link: 'https://www.ccloftconversion.co.uk/',
    btn: 'CCLoftConversion'

  },
  {
    id: 5,
    image: IMG5,
    title: 'Ship Fruits to office',
    link: 'https://www.fructelabirou.md/',
    btn: 'Fruitstoffice'
  }
]

const Portfolio = () => {
  useEffect( () => {
    Aos.init({ duration: 1500 });
  }, []);
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div data-aos="fade-out" className="container portfolio__container">
        {
        data.map(({id,image,title,link,btn}) => {
            return (
        <article key={id} className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={image} alt={title} />
          </div>
          <h3>{title}</h3>
          <div className="portfolio__item-cta">
          <a href={link} className='btn' target='_blank'>{btn}</a>
          </div>
        </article>
            )
          })
        }
       
      </div>
    </section>


  )
}

export default Portfolio