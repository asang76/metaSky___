import React from 'react'
import './navbar.css'
import logo from '../asset/svg/navbarsvg/logosvg.svg'
import insta from '../asset/svg/navbarsvg/instagram.svg'
import bino from '../asset/svg/navbarsvg/binoculer.svg'
import twitter from '../asset/svg/navbarsvg/twitter.svg'



const Navbar = () => {
  return (
    <div className='container Navbar_main mt-2  bg-transperent'>
        <div className='row '>
            <div className='col-6 d-flex justify-content-start'>
                <div className=''>
                   <img className='Main_logo' src={logo} alt="" />
                </div>
            </div>
            <div className='col-6 d-flex justify-content-end'>
            <img className='social_logo' src={bino} alt="" />
            <img className='social_logo' src={twitter} alt="" />
            <img className='social_logo' src={insta} alt="" />

            </div>
        </div>
      
    </div>
  )
}

export default Navbar
