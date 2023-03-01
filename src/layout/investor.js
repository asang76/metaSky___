import React from 'react'
import './Inverstor.css'
import data from '../asset/svg/numbergraph/data.svg'
import bgimg from '../asset/svg/numbergraph/bgimg.svg'

const Numbergraph = () => {
  return (
    <div className='investor_container'>
      <img className='bg_image  w-75 ' src={bgimg} alt="" />
      <div className='d-flex justify-content-center'>
      <h1 className='display-3 mt-5 fw-bolder' >Organization Structure</h1>
      </div>
<div className='data_container d-flex justify-content-center mt-5'>
      <img className='w-50' src={data} alt="" />
</div>

    </div>
  )
}

export default Numbergraph
