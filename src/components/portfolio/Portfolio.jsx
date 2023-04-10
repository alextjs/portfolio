import React, { useEffect } from 'react'
import '../portfolio/portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG7 from '../../assets/wing-kingz.jpg'
import IMG8 from '../../assets/build-my-kitchen.jpg'
import IMG9 from '../../assets/lambo.jpg'
import IMG10 from '../../assets/electrical.jpg'
import IMG11 from '../../assets/djmoore-loft.jpg'
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
    id: 7,
    image: IMG7,
    title: 'Wing Kingz: Diner-Inspired Dishes, Sports & Cold Beer.',
    link: 'https://www.thewingkingz.co.uk/',
    btn: 'Wing Kingz'

  },

  {
    id: 8,
    image: IMG8,
    title: 'Build My Kitchen: Kitchens Milton Keynes, Kitchen Fitters.',
    link: 'https://www.buildmykitchen.co.uk/',
    btn: 'Build My Kitchen'

  },

  {
    id: 9,
    image: IMG9,
    title: 'Luxury Car Hire, Supercar Hire, Prestige Car Hire - Royal Rentals.',
    link: 'https://www.royalrental.co.uk/',
    btn: 'Royal Rental'

  },

  {
    id: 10,
    image: IMG10,
    title: 'Heath Electrical Services',
    link: 'https://www.heathelectricalservices.com/',
    btn: 'Heath Electrical Services'

  },

  {
    id: 11,
    image: IMG11,
    title: 'DJ Moore Lofts',
    link: 'https://www.djmoorelofts.co.uk/',
    btn: 'DJ Moore Lofts'

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



]

const Portfolio = () => {
  useEffect( () => {
    Aos.init({ duration: 1500 });
  }, []);
  return (
    <section id='portfolio' className='portfolio'>
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