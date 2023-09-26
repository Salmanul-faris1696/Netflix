import React from 'react'
import Televison from '../assets/images/tv.png'

function Tv() {
  return (
    <div className='  border-b-8 border-[#2d2d2d]  m-3  mt-10 custom1:grid custom1:grid-cols-2 items-center '>


        <div className="">

        <div className='text-center'>

        <h2 className=' text-white  text-[2rem] font-[700] p-5'>
            Enjoy on your TV
        </h2>

        <p className='text-white text-[20px]'>
        Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.
        </p>
        </div>

        </div>

        <div className="">


        <div className="t">

            <img src={Televison} alt="televsion" />


        </div>

        </div>




    </div>
        

    
  )
}

export default Tv