import React from 'react'
import Card from './Card'

const Cards = ({userinfo}) => {


  return (

  
    <div className='w-full flex flex-wrap'>
       {
            userinfo.map((card) => (<Card {...card} key={card.id}/>) )
        }
  </div>
  )
}

export default Cards