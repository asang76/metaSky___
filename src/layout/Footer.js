import React from 'react'
import './footer.css'
import heading from '../asset/svg/footer/heading.svg'
import kite2 from '../asset/svg/footer/kite2.svg'
import art from '../asset/svg/footer/art.svg'

const Footer = () => {
    
  return (
    <div className='footer_container  position-relative'>
  
        <div className='d-flex justify-content-center'> 
      <img className='w-75 ' src={kite2} alt="" />
        </div>
            <img className='heading_image w-50' src={heading} alt="" />
 <div className='d-flex justify-content-center button_container '>
      <button className='btn_1 btn '>JOIN THE TEAM</button>
      <button className='btn_2 btn'>BUSINESS INQUIRIES</button>
      </div>
      <div className='mt-5 d-flex justify-content-center '>
        <img className='w-50' src={art} alt="" />

      </div>
    </div>
  )
}

export default Footer
