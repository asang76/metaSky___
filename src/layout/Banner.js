import React from 'react'
import { Animated } from 'react-animated-css'
import star from '../asset/svg/bannersvg/starBg.svg'
import man from '../asset/svg/bannersvg/man.svg'
import circle from '../asset/svg/bannersvg/circle.svg'
import kite from '../asset/svg/bannersvg/kite.svg'
import outercircle from '../asset/svg/bannersvg/outercircle.svg'
import './banner.css'

const Banner = () => {
  return (
    <div className='banner_container'>
      <div class="field">
		<div class="mouse"></div>
    </div>
      <div className='row'>
        <div className='col-lg-9 banner_left col-sm-12'> 
      
         <img className='Star_bg' src={star} alt="" />
         <div className=''>
          <img className='banner_circle_outer ' src={outercircle} alt="" />
         </div>
         <div className=''>
              <img className='banner_circle ' src={circle} alt="" />
         </div>
         
         <div className='banner_heading '>
      <h1 className='sub_heading'>THE WEB3</h1>
      <h1 className='sub_heading'>PLATFORM BUILT</h1>
      <h1 className='sub_heading'>FOR YOU</h1>
       </div>
         <div className='banner_man'>
          <Animated animationIn="bounceInLeft" animationOut="fadeOut" isVisible={true} >
         <img  className='man' src={man} alt="" />
          </Animated>
         </div>
        
        </div>
        <div className='col-3 banner_menu'>
        <ul className='Banner_links d-flex w-full '> 
          <li>skylab</li>
          <li>sky wallet</li>
          <li>contact Now</li>
        </ul>
        </div>
      </div>
        <img className=' kite_image' src={kite} alt="" />

    </div>
  )
}

export default Banner
