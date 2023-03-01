import React from 'react'
import star from '../asset/svg/bannersvg/starBg.svg'
import man from '../asset/svg/bannersvg/man.svg'
import circle from '../asset/svg/bannersvg/circle.svg'
import kite from '../asset/svg/bannersvg/kite.svg'
import outercircle from '../asset/svg/bannersvg/outercircle.svg'
import './banner.css'

const Banner = () => {
  return (
    <div className='banner_container'>
      <div className='row'>
        <div className='col-10 banner_left'> 
      
         <img className='Star_bg' src={star} alt="" />
         <div className=''>
          <img className='banner_circle_outer' src={outercircle} alt="" />
         </div>
         <div className=''>
              <img className='banner_circle' src={circle} alt="" />
         </div>
        
         <div className='banner_heading '>
      <h1 className='w-full'>THE WEB3</h1>
      <h1 className='w-full'>PLATFORM BUILT</h1>
      <h1 className='w-full'>FOR YOU</h1>
       </div>
         <div className='banner_man'>
         <img className='man' src={man} alt="" />
         </div>
        
        </div>
        <div className='col-2 banner_menu'>
        <ul className='Banner_links d-flex w-full '> 
          <li>skylab</li>
          <li>sky wallet</li>
          <li>contact Now</li>
        </ul>
        </div>
      </div>
      <div className='position-relative'>
        <img className='w-50 kite_image' src={kite} alt="" />

      </div>

    </div>
  )
}

export default Banner
