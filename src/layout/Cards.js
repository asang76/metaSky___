import React from 'react'
import './cards.css'

const Cards = ({img,title,color}) => {
  return (
    <>
      <div className='about_cards w-25 ' style={{width: "18rem",backgroundColor:{color}}}>
  <img src={img} className="card-img-top w-25" alt=""/>
  <div className="card-body">
    <p className="card-text w-75">{title}</p>
  </div>
</div>
    </>
  )
}

export default Cards
