import React from 'react'
import './cards.css'

const Cards = ({img,title,color}) => {

  return (
    <>
       <div className="about_cards" style={{backgroundColor:color}} >
                <img src={img} className="w-25 m-2" alt="" />
                <div className="card-body">
                  <p className="card-text w-100 ">
                  {title}
                  </p>
                </div>
              </div>
    </>
  )
}

export default Cards
