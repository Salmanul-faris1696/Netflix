import React from 'react'
import Dropdown from '../Dropdown'
import { langs } from '../../data'


function Footer() {
  return (
    <>
         <div className=' bg-black  text-[14px]  line-noraml text-start   w-full flex justify-center  mb-8 '>

            <section className='w-[90%] flex flex-col gap-4   text-[#ffffff]/70'>


                 <div class="grid grid-cols-1    pt-5    ">
                
                    <div className='flex '>

                         <p className=' '>

                              Question? call - <a href="" className='underline '> 000-800-919-1694</a>

                          </p>
                     </div>
                
                  </div>

            <div class="grid  gap-2 underline grid-cols-2  custom1:grid-cols-4  ">
                
                <div className='flex '>
                    <p>
                         <a href="">FAQ</a>
                    </p>
                </div>

                <div className='flex '>
                    <p>
                         <a href="">Help-Center</a>
                    </p>
                </div>

                <div className='flex '>
                    <p>
                            <a href="">Account</a>

                    </p>
                </div>

                <div className='flex '>
                    <p>
                         <a href=""> Media Center</a>

                    </p>
                </div>
                
            </div>


            <div class="grid   gap-2   underline  grid-cols-2  custom1:grid-cols-4 ">
                
                <div className=''>
                    <p>
                      <a href="">Investor Relations</a>
                    </p>
                </div>

                <div className='flex '>
                    <p>
                          <a href="">Jobs </a>
                    </p>
                </div>

                <div className='flex '>
                    <p>
                          <a href="">Ways to Watch</a>

                    </p>
                </div>

                <div className='flex '>
                    <p>
                          <a href="">Terms of Use</a>

                    </p>
                </div>
                
            </div>




            <div class="grid  gap-2  underline  grid-cols-2  custom1:grid-cols-4 ">
                
                <div className=' '>
                    <p>
                          <a href="">Privacy</a>
                    </p>
                </div>

                <div className=' '>
                    <p>
                          <a href="">Cookie Preferences</a>
                    </p>
                </div>

                <div className='flex '>
                    <p>
                         <a href="">Corporate Information</a>

                    </p>
                </div>

                <div className='flex '>
                    <p>
                         <a href="">Contact Us</a>

                    </p>
                </div>
                
            </div>


            <div class=" grid gap-2  underline grid-cols-2  custom1:grid-cols-4 ">
                
                <div className='flex '>
                    <p>
                          <a href="">Speed Test</a>
                    </p>
                </div>

                <div className='flex '>
                    <p>
                          <a href="">Legal Notices</a>
                    </p>
                </div>

                <div className='flex '>
                    <p>
                          <a href="">Only on Netflix</a>

                    </p>
                </div>

            </div>

                

            <div class="grid grid-cols-1  ">
                
                <div className='flex text-white o'>
                <Dropdown langs={langs} top={false} />
                </div>

                
                
            </div>


            <div class="grid grid-cols-1  ">
                
                <div >

                    <p className='no-underline'>
                        Netflix india
                    </p>
                </div>

                
                
            </div>
   </section>

            </div>

    </>
       
    
  )
}

export default Footer