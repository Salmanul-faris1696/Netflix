
import React from 'react'
import {RxCross1} from "react-icons/rx"
import {AiOutlinePlus} from "react-icons/ai"
import { Collapse } from 'react-collapse'


function Accordion({open,toggle,question,description}) {


  return (
    
    <div className='p-2'>
        
        <div className='w-[100%]   mx-auto bg-[#232323] focus:bg-[#2d2d2d] text-[18px] font-Netflix custom1:w-full' >
            

             <div className=' flex justify-between items-center cursor-pointer   '  onClick={toggle}> 

                     <p className='text-22 font-semibold px-2 flex text-white  items-center p-5  border-collapse '>

                          {question}


                     </p> 

                     <div className=" text-white m-5  text-[18px]" onClick={toggle} >
                    
                         {open ?  <RxCross1/>: <AiOutlinePlus/>}
                     </div>


            </div>

       <Collapse isOpened={open} className="">

            <div className='  text-white p-2  '>

                { open &&
                    description
                }

            </div>

       </Collapse>

        </div>

    </div>

  )
}

export default Accordion






















  