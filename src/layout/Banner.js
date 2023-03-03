import React, {useEffect} from 'react'
import { Animated } from 'react-animated-css'
import star from '../asset/svg/bannersvg/starBg.svg'
import man from '../asset/svg/bannersvg/man.svg'
import circle from '../asset/svg/bannersvg/circle.svg'
import kite from '../asset/svg/bannersvg/kite.svg'
import outercircle from '../asset/svg/bannersvg/outercircle.svg'
import AOS from 'aos'
import 'aos/dist/aos.css'
import './banner.css'

const Banner = () => {
  useEffect(() => {
    AOS.init();
  }, [])

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
      <h1 className='sub_heading' data-aos="fade-up" data-aos-duration="1000"  >THE WEB3</h1>
      <h1 className='sub_heading'data-aos="fade-up" data-aos-duration="1000" data-aos-delay="400" >PLATFORM BUILT</h1>
      <h1 className='sub_heading' data-aos="fade-up" data-aos-duration="1000" data-aos-delay="600">FOR YOU</h1>
       </div>
         <div className='banner_man'>
          <Animated animationIn="bounceInLeft" animationOut="fadeOut" isVisible={true} >
         <img data-aos="fade-up" data-aos-duration="1000" data-aos-delay="800" className='man' src={man} alt="" />
          </Animated>
         </div>
        
        </div>
        <div className='col-3 banner_menu' data-aos="fade-left">
        <ul className='Banner_links  '> 
          <li>SKYLAB</li>
          <li>SKY WALLET</li>
          <li>CONTACT NOW</li>
        </ul>
        </div>
      </div>
        <img className='kite_image' src={kite} alt="" />
    </div>
  )
}

export default Banner
