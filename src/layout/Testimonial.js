import React from 'react'
import { Navigation } from "swiper";
import userimage from '../asset/svg/testimonialsvg/userimg.svg'
import arrowl from '../asset/svg/testimonialsvg/arrowl.svg'
import arrowr from '../asset/svg/testimonialsvg/arrowr.svg'
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "./style.css";

// import required modules
const navegation = {
  nextEl: '.swiper-button-next-test',
  prevEl: '.swiper-button-prev-test',
  // navigation: true
}

const Testimonial = () => {

  return (
<div>
  <div className=''>
    <h1>The metasky Team</h1>
  </div>
  <div className='d-flex justify-content-end'>
  <div className='testimonial_container'>
      <h3 style={{ textAlign: 'center' }}>What Clients Say</h3>
      
      <div className="test-arrowbox" style={{ display: 'flex', justifyContent: 'flex-end' }}>

        <div className="swiper-button-prev-test">
          <img src={arrowl} alt="" />
        </div>
        <div className="swiper-button-next-test">
         <img src={arrowr} alt="" />

        </div>
      </div>
      <Swiper navigation={navegation} modules={[Navigation]} slidesPerView={3} spaceBetween={30} className="mySwiper">
        <SwiperSlide>
          <div className="review-box">
            <div className="media">
              <img className="mr-3" src={userimage} alt="" />
              <div className="media-body">
                <h5>Amanda Jackson</h5>
                <p className="user-post">CEO, NRD Group</p>
              </div>
            </div>
            <p className="read">
              It has survived not only five centuries, but also the leap into electronic typesetting,
              remaining essentially unchanged. It was popularised in the 1960s with the race.
            </p>

          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="review-box">
            <div className="media">
              <img className="mr-3" src={userimage} alt="" />
              <div className="media-body">
                <h5>Amanda Jackson</h5>
                <p className="user-post">CEO, NRD Group</p>
              </div>
            </div>
            <p className="read">
              It has survived not only five centuries, but also the leap into electronic typesetting,
              remaining essentially unchanged. It was popularised in the 1960s with the race.
            </p>

          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="review-box">
            <div className="media">
              <img className="mr-3" src={userimage} alt="" />
              <div className="media-body">
                <h5>Amanda Jackson</h5>
                <p className="user-post">CEO, NRD Group</p>
              </div>
            </div>
            <p className="read">
              It has survived not only five centuries, but also the leap into electronic typesetting,
              remaining essentially unchanged. It was popularised in the 1960s with the race.
            </p>

          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="review-box">
            <div className="media">
              <img className="mr-3" src={userimage} alt="" />
              <div className="media-body">
                <h5>Amanda Jackson</h5>
                <p className="user-post">CEO, NRD Group</p>
              </div>
            </div>
            <p className="read">
              It has survived not only five centuries, but also the leap into electronic typesetting,
              remaining essentially unchanged. It was popularised in the 1960s with the race.
            </p>
            

          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="review-box">
            <div className="media">
              <img className="mr-3" src={userimage} alt="" />
              <div className="media-body">
                <h5>Amanda Jackson</h5>
                <p className="user-post">CEO, NRD Group</p>
              </div>
            </div>
            <p className="read">
              It has survived not only five centuries, but also the leap into electronic typesetting,
              remaining essentially unchanged. It was popularised in the 1960s with the race.
            </p>
            

          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="review-box">
            <div className="media">
              <img className="mr-3" src="https://picsum.photos/50/50" alt="" />
              <div className="media-body">
                <h5>Amanda Jackson</h5>
                <p className="user-post">CEO, NRD Group</p>
              </div>
            </div>
            <p className="read">
              It has survived not only five centuries, but also the leap into electronic typesetting,
              remaining essentially unchanged. It was popularised in the 1960s with the race.
            </p>
            

          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="review-box">
            <div className="media">
              <img className="mr-3" src={userimage} alt="" />
              <div className="media-body">
                <h5>Amanda Jackson</h5>
                <p className="user-post">CEO, NRD Group</p>
              </div>
            </div>
            <p className="read">
              It has survived not only five centuries, but also the leap into electronic typesetting,
              remaining essentially unchanged. It was popularised in the 1960s with the race.
            </p>
          

          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="review-box">
            <div className="media">
              <img className="mr-3" src={userimage} alt="" />
              <div className="media-body">
                <h5>Amanda Jackson</h5>
                <p className="user-post">CEO, NRD Group</p>
              </div>
            </div>
            <p className="read">
              It has survived not only five centuries, but also the leap into electronic typesetting,
              remaining essentially unchanged. It was popularised in the 1960s with the race.
            </p>
            

          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="review-box">
            <div className="media">
              <img className="mr-3" src={userimage} alt="" />
              <div className="media-body">
                <h5>Amanda Jackson</h5>
                <p className="user-post">CEO, NRD Group</p>
              </div>
            </div>
            <p className="read">
              It has survived not only five centuries, but also the leap into electronic typesetting,
              remaining essentially unchanged. It was popularised in the 1960s with the race.
            </p>
           

          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="review-box">
            <div className="media">
              <img className="mr-3" src={userimage} alt="" />
              <div className="media-body">
                <h5>Amanda Jackson</h5>
                <p className="user-post">CEO, NRD Group</p>
              </div>
            </div>
            <p className="read">
              It has survived not only five centuries, but also the leap into electronic typesetting,
              remaining essentially unchanged. It was popularised in the 1960s with the race.
            </p>

          </div>
        </SwiperSlide>

      </Swiper>

    
    </div >

  </div>

</div>
  )
}

export default Testimonial
