import React, { useState } from 'react'

const Card = ({id,name,info,price,image}) => {


    const [readMore,setreadMore] = useState(true);
    const description =  readMore ? info.substring(0,150)+"...." : info  ;

    const togglehandler = () =>{
        setreadMore(!readMore);

    }   

  return (
   <div className=' mx-auto mb-5'>
        <div className='w-[350px] shadow-lg px-7 pt-5'>
            <img className='w-[300px] h-[300px] rounded-full' src={image} alt="" />
            <p className='text-2xl font-semibold'>{price}</p>
            <p className='text-2xl font-semibold'>{name}</p>
            <p className=' font-semibold'>{description} 
        <span className=' cursor-pointer text-blue-800 ' onClick={togglehandler}>{readMore ? "ReadMore" : 'ShowLess'}</span> </p>


            <button className='p-2 text-[1.5rem] rounded-lg px-7  m-2 ml-12 bg-blue-400'>Not Interested</button>
        </div>
</div>
  )
}

export default Card