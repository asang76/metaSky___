import React from 'react'
import bggraphics from  '../asset/svg/graphicssvg/bggraphic.svg'
import  './graphics.css'

const Graphics = () => {
  return (
    <div className='graphics_container'>
      <img  className='bg_graphics' src={bggraphics} alt="" />
      <div className='graphic_heading'>
      <h1 className=''>Tanukibles</h1>
        <p> Play 2 Earn Game</p>
        <p>9999 Tanuki NFTs up for grabs</p>
        <button className='btn btn-light position-absolute bottom-25 end-50'> Learn more</button>
      </div>
     

    </div>
  )
}

export default Graphics
