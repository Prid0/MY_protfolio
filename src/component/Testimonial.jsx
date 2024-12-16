import React from 'react'
import '../component/styles/Testimonial.css'
import TextContainer from './TextContainer'
import TestimonialCard from './TestimonialCard'
import { TestimonialCardData } from '../Data/TestimonialCardData'
function Testimonial() {
  return (
    <div className="test_container">
      <div className="testimonial">

        <div className="tets_top">
          <TextContainer intro="WHAT OTHERS SAY" title="Testimonials." />
        </div>
        <div className="test_bottom">

          {TestimonialCardData.map((data, index) => (

            <TestimonialCard key={index} i={index} openion={data.openion} name={data.name} palce={data.palce} img={data.img} />
          ))
          }

        </div>
      </div>
    </div>
  )
}

export default Testimonial