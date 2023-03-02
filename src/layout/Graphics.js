import React from 'react'
import bggraphics from  '../asset/svg/graphicssvg/bggraphic.svg'
import dogimage from '../asset/svg/graphicssvg/oie-ktaErxDtfQTv-unscreen.gif'
import  './graphics.css'

const Graphics = () => {
  return (
    <div className='graphics_container'>
      <img  className='bg_graphics' src={bggraphics} alt="" />
      <div className='graphic_heading'>
        <img className='dog_image' src={dogimage} alt="" />
      <h1 className=''>Tanukibles</h1>
        <p> Play 2 Earn Game</p>
        <p className='text-warning'>9999 Tanuki NFTs up for grabs</p>
        <button className='btn_3 '> Learn more</button>
      </div>
     

    </div>
  )
}

export default Graphics
