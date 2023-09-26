import React from 'react'
import child from '../assets/images/children.png'

function Children() {
  return(
    <div className=' border-b-8 border-[#2d2d2d] m-3  mt-10 custom1:grid custom1:grid-cols-2 items-center ' >

        <div className=" custom1:order-1">

          <div className=" text-center ">

            <h2 className=' text-white  text-[2rem] font-[700] p-5'>

                Create profiles for kids
                </h2>

             <p className='text-white text-[20px]'>
              Send children on adventures with their favourite characters in a space made just for them—free with your membership.
            </p>


          </div>

          
        </div>


      <div className="  ">

        <img src={child} alt="mobile" className=' items-center mx-auto' />   

      </div>

    </div>


  )
}

export default Children