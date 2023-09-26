import React from 'react'
import Netflixlogo from '../assets/netflix.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faLanguage} from '@fortawesome/free-solid-svg-icons'
import {faAngleRight} from '@fortawesome/free-solid-svg-icons'
import langicon from "../assets/images/languageicon.svg"
import Dropdown from './Dropdown'
import { langs } from '../data'
import Form from './form'



function Hero() {

 

  return (

    <div className='hero-section h-full border-b-8 border-[#2d2d2d]'>

        <div className="">

        <header className=''>


            <div className='flex  w-full justify-between px-1 z-10 custom3:mx-40'>
                <div className='m-3 flex justify-between'>
                    <img src={Netflixlogo} alt="netflix logo"  className='m-5 w-[5.5rem] h-[1.5rem] custom1:w-[9.25rem] custom1:h-[2.5rem]'   />
                </div>

                <div className='m-5 flex gap-3 items-center'>

                   <Dropdown langs={langs} top={true} />

                    <div className="flex items-center">
                        <button className='bg-red-700 text-white border-none rounded-md w-[80px] font-Netflix text-center
                    flex items-center justify-center h-[32px] font-[700] custom2:h-[40px]  '> Sign in  
                       
                        </button>
                    </div>

                </div>

            </div>


       
        </header>

        <div className=' items-center text-center p-5 text-white   relative z-[20] ' >


<h1 className='  font-Netflix  text-[32px] font-[700]'>
Unlimited movies, TV shows and more
</h1>

<p className='text-[18px] font-Netflix  font-[400] m-4' >
Watch anywhere. Cancel anytime.
</p>

<p className='text-[18px] font-Netflix font-[400] m-7'>
Ready to watch? Enter your email to create or restart your membership.
</p>

<div className='max-w-[600px] mx-auto'>
 
<Form/>
</div>




</div>

</div>


    </div>
 
  )
}

export default Hero
