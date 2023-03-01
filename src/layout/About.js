import React from 'react'
import './about.css'
import Cards from './Cards'
import skyclub from '../asset/svg/aboutsvg/skyclub.svg'
import skywallet from '../asset/svg/aboutsvg/skywallet.svg'
import currency from '../asset/svg/aboutsvg/currency.svg'
import offer from '../asset/svg/aboutsvg/offer.svg'
import nft from '../asset/svg/aboutsvg/nft.svg'
import doa from '../asset/svg/aboutsvg/doa.svg'
import work from '../asset/svg/aboutsvg/work.svg'
import bgcircle from '../asset/svg/aboutsvg/bgcircle.svg'
import Secure from '../asset/svg/aboutsvg/scure.svg'
import chat from '../asset/svg/aboutsvg/chat.svg'
import web from '../asset/svg/aboutsvg/web3.svg'

const About = () => {
  return (
    <div className='about_container'> 
    <div className='row'>
        <div className='col-6 left_container'>
            <div className='p-5'>   
           <img className='mb-5 mt-5 w-25' src={skywallet} alt="" />
            <h1 className='w-50  mb-4 mt-4 fw-bolder'>YOUR EVERYDAY CRYPTO WALLET</h1>   
             <div className='mt-5 d-flex justify-content-end'>
                <Cards img={currency} title={"Use accores any app and currency"}  />
                <Cards img={web} title={"One place for all your web3 possession"}  />
                </div>   
             <div className=' d-flex justify-content-center'>
                <Cards img={Secure} title={"simple and secure"} />
                <Cards img={work} title={"Works everywhere"} />
                </div>   
                <div className='bg_circle'>
                <img className='w-75' src={bgcircle} alt="" /></div>
            </div>
        </div>
        <div className='col-6 right_contianer'>
        <div className='p-5'>
           <img className='mb-5 mt-4 w-25 ' src={skyclub} alt="" />
            <h1 className='w-50  mb-4 mt-4 fw-bolder text-light'>YOUR EVERYDAY CRYPTO WALLET</h1>   
             <div className='mt-5 d-flex justify-content-start'>
                <Cards img={chat} title={"Chat, play games, and host events"}  />
                <Cards img={doa} title={"Works Create your own DAO and Tokens in 1 click"}  />
                </div>   
             <div className=' d-flex justify-content-center'>
                <Cards img={nft} title={"Works Create eco-friendly NFT artwork and tickets "} />
                <Cards img={offer} title={"Works Offer exclusive content and NFT memberships"} />
                </div>   
            </div>
        </div>
    </div>
    </div>
  )
}

export default About
