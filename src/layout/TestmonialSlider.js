import React,{useState} from 'react'
import './testimonialuser.css'

const TestmonialSlider = ({testimonialuser}) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNextClick = () => {
      setCurrentIndex(currentIndex === testimonialuser.length - 1 ? 0 : currentIndex + 1);
    };
  
    const handlePrevClick = () => {
      setCurrentIndex(currentIndex === 0 ? testimonialuser.length - 1 : currentIndex - 1);
    };
  return (
    <>
         <div className="testimonial-slider">
      <button className="slider-btn prev-btn" onClick={handlePrevClick}>
        &#8249;
      </button>
      <button className="slider-btn next-btn" onClick={handleNextClick}>
        &#8250;
      </button>
      <div className="testimonial">
        <p className="testimonial-text">{testimonialuser[currentIndex].text}</p>
        <p className="testimonial-name">{testimonialuser[currentIndex].name}</p>
        <p className="testimonial-date">{testimonialuser[currentIndex].date}</p>
      </div>
    </div>
      
    </>
  )
}

export default TestmonialSlider
