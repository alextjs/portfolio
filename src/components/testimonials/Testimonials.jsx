import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'

// import Swiper core and required modules
import { Pagination, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const data = [
  {
    avatar: AVTR1,
    name: 'Tina',
    review: 'Working with Alexandru was better than expected and we had really high expectations. He is an incredibly talented developer but what really makes him stand out is his work ethic and steady approach. Time after time, and without us asking, he added enhancements and improvements that resulted in a better end product for us and our clients.'
  },
  {
    avatar: AVTR2,
    name: 'Wale',
    review: 'We have the fortune of working with Alexandru on a very regular basis. Every single project is done in a timely fashion and is delivered exactly as is outlined. Beyond that, his development skills and expertise make him an invaluable part of our process. We absolutely offer our highest possible recommendation.'
  },
  {
    avatar: AVTR3,
    name: 'Arnold',
    review: 'Alexandru has done a fantastic job overall. Not only the site is to design, the code is very clean and slick. Love the way he achieved the translations portion of the site.'
  },
  {
    avatar: AVTR4,
    name: 'Nancy',
    review: "Alexandru's talent and experience proved immensely valuable for our latest web project. He was involved from the very beginning, providing advice and guidance even before we signed the proposal. The work we received from him was top-notch, thoroughly documented, and full of touches that show his commitment to quality. I can't recommend him highly enough."
  },
]

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container"
              // install Swiper modules
              modules={[Pagination, Navigation]}
              spaceBetween={50}
              slidesPerView={1}
              pagination={{ clickable: true }}
              onSwiper={(swiper) => console.log(swiper)}
              onSlideChange={() => console.log('slide change')}>
        {
          data.map(({avatar,name,review}, index) => {
            return (
              <SwiperSlide key={index} className="testimonial">
              <div className="client__avatar">
                <img src={avatar} alt="Avatar One" />
              </div>
              <h5 className='client__name'>{name}</h5>
                <small className='client__review'>
                  {review}
                </small>
            </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default Testimonials