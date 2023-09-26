import React from 'react'
import Device from '../assets/images/device-pile-in.png'

function Watch() {
  return (
    <div className=' border-b-8 border-[#2d2d2d] m-3 mt-10 custom1:grid custom1:grid-cols-2 items-center '>


    <div className="">

    <div className='text-center '>

    <h2 className='text-white  text-[2rem] font-[700] p-5'>
    Watch everywhere
    </h2>

    <p className='text-white text-[20px]'>
    Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.
    </p>
    </div>

    </div>

    <div className="">


    <div className=" ">

        <img src={Device} alt="televsion" className='items-center mx-auto '  />


    </div>

    </div>




</div>
    
  )
}

export default Watch