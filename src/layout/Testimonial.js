import React from 'react'
import TestmonialSlider from './TestmonialSlider'
import testimonialuser from './TestimonialUser';
const Testimonial = () => {
   
  return (
    <div className='testimonial_container'>
      <TestmonialSlider testimonialuser={testimonialuser} />
    </div>
  )
}

export default Testimonial
