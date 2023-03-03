import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import './testimonial.css'
import arrowr from '../asset/svg/testimonialsvg/arrowr.svg'
import arrowl from '../asset/svg/testimonialsvg/arrowl.svg'
import bgimage from '../asset/svg/testimonialsvg/Group 135.png'
import userimg from '../asset/svg/testimonialsvg/userimg.png'
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import "./style.css";

// import required modules
import { Navigation } from "swiper";
const navegation = {
  nextEl: '.swiper-button-next-test',
  prevEl: '.swiper-button-prev-test',
  // navigation: true
}
const Testimonial = () => {
  return (
    <div className='testimonial_container'>
      
      <div className="test-arrowbox" style={{ display: 'flex', justifyContent: 'flex-center',}}>
        <div className="swiper-button-prev-test m-2">
          <img src={arrowl} alt="" />
        </div>
        <div className="swiper-button-next-test m-2">
         <img src={arrowr} alt="" />
        </div>
      </div>
      <div className='row slider_container'>
      <div className='col-lg-3 col-sm-12 d-flex justify-content-center'>
      <h3 className='fw-bolder text-warning fs-2'>The MetaData Team</h3>

      </div>

      <div className='col-lg-9 col-sm-12 d-flex justify-content-start align-items-end  mt-5'>

      <div className='bg_line'><img className='w-75' src={bgimage} alt="" /></div>
      <Swiper navigation={navegation} modules={[Navigation]} slidesPerView={3} spaceBetween={30} >
        <SwiperSlide>
          <div className="review-box">
            <div className="media">
              <img className="mr-3" src={userimg} alt="Generic placeholder" />
              <div className="media-body text-light">
                <h5 className='fw-bold m-2'>Amanda Jackson</h5>
                <p className="">CEO, NRD Group</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="review-box">
          <div className="media">
              <img className="mr-3" src={userimg} alt="Generic placeholder" />
              <div className="media-body text-light">
                <h5 className='fw-bold m-2'>Amanda Jackson</h5>
                <p className="">CEO, NRD Group</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="review-box">
          <div className="media">
              <img className="mr-3" src={userimg} alt="Generic placeholder" />
              <div className="media-body text-light">
                <h5 className='fw-bold m-2'>Amanda Jackson</h5>
                <p className="">CEO, NRD Group</p>
              </div>
            </div>
           
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="review-box">
          <div className="media">
              <img className="mr-3" src={userimg} alt="Generic placeholder" />
              <div className="media-body text-light">
                <h5 className='fw-bold m-2'>Amanda Jackson</h5>
                <p className="">CEO, NRD Group</p>
              </div>
            </div>
           

          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="review-box">
          <div className="media">
              <img className="mr-3" src={userimg} alt="Generic placeholder" />
              <div className="media-body text-light">
                <h5 className='fw-bold m-2'>Amanda Jackson</h5>
                <p className="">CEO, NRD Group</p>
              </div>
            </div>

          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="review-box">
          <div className="media">
              <img className="mr-3" src={userimg} alt="Generic placeholder" />
              <div className="media-body text-light">
                <h5 className='fw-bold m-2'>Amanda Jackson</h5>
                <p className="">CEO, NRD Group</p>
              </div>
            </div>

          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="review-box">
          <div className="media">
              <img className="mr-3" src={userimg} alt="Generic placeholder" />
              <div className="media-body text-light">
                <h5 className='fw-bold m-2'>Amanda Jackson</h5>
                <p className="">CEO, NRD Group</p>
              </div>
            </div>
         

          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="review-box">
          <div className="media">
              <img className="mr-3" src={userimg} alt="Generic placeholder" />
              <div className="media-body text-light">
                <h5 className='fw-bold m-2'>Amanda Jackson</h5>
                <p className="">CEO, NRD Group</p>
              </div>
            </div>
          
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="review-box">
          <div className="media">
              <img className="mr-3" src={userimg} alt="Generic placeholder" />
              <div className="media-body text-light">
                <h5 className='fw-bold m-2'>Amanda Jackson</h5>
                <p className="">CEO, NRD Group</p>
              </div>
            </div>
           
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="review-box">
          <div className="media">
              <img className="mr-3" src={userimg} alt="Generic placeholder" />
              <div className="media-body text-light">
                <h5 className='fw-bold m-2'>Amanda Jackson</h5>
                <p className="">CEO, NRD Group</p>
              </div>
            </div>
          </div>
        </SwiperSlide>

       
      </Swiper>
      </div>
      </div>


     
    </div >
  )
}

export default Testimonial
