import React from 'react'
import Mobile from '../assets/images/mobile-0819.jpg'
import Stranger from '../assets/images/boxshot.png'


function Downloading() {
  return (
    <div className=' border-b-8 border-[#2d2d2d] m-3  mt-10 custom1:grid custom1:grid-cols-2 items-center '>

      <div className=" custom1:order-1">


        <div  className=" text-center">

          <h2 className=" text-white  text-[2rem] font-[700] p-5">

               Download your shows to watch offline
           </h2>

          <p className='text-white text-[20px]'>
          Save your favourites easily and always have something to watch.
         </p>


        </div>

      </div>

     <div className="relative  flex flex-col items-center mb-20">

         <div className='dowload--img'>

            <img src={Mobile} alt="mobile" className='' />   

        </div>
              
        <div className='bg-black/90 w-[400px] mx-auto rounded-lg flex justify-between items-center px-5 absolute bottom-10 border-2 border-[rgba(128,128,128,0.7)] shadow-2xl '> 

            <div className='flex items-center'>

              <div className="str--img">

                  <img src={Stranger} alt="" className='str' />
                    
               </div>

                <div className="text-white">

                   <h4>Stranger Things</h4>

                   <p className='text-blue-700'>  Downlaoding...  </p>
          
                 </div>
              
            </div>
                                
         </div>

     </div>


  </div>
        
  )
}

export default Downloading