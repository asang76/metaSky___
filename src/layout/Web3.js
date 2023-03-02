import React from 'react'
import './web3.css'
import bgweb3 from '../asset/svg/web3/bgweb3.svg'
import web3text from '../asset/svg/web3/web3text.svg'

const Web3 = () => {
  return (
    <div className='web3_container'>
        <img className='w-100 bg_img' src={bgweb3} alt="" />
      <div className='row text_container'>
        <div className='col-lg-6 col-sm-12 d-flex justify-content-center'>
            <div className='w-75 '>
            <h1 className='display-5 fw-bolder '>Communities are the lifeblood of society.</h1>
            <p className='fs-5 w-75'>Decentralised communities are going to be the lifeblood of the metaverse.</p>
            <p className='fs-5 w-75'>Metasky aims to empower influencers, creators and brands to build happy, motivated Web3 communities with a strong sense of belongingness.</p>
            </div>
        </div>
        <div className='col-lg-6 col-sm-12 image_container'>
            <img className='web3_text' src={web3text} alt="" />
        </div>

      </div>
    </div>
  )
}

export default Web3
