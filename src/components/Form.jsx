import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight} from '@fortawesome/free-solid-svg-icons';

function Form() {
  return (
    <div className=''>

<form action="" className='mb-12 '>
    <div className=' mt-10 grid grid-col-1 gap-3   w-[75%] mx-auto custom2:flex custom2:justify-between  custom2:items-center   '>
        <div className='email  '>

    <input type="text" placeholder='Email address' className='text-white bg-transparent w-[100%]  h-[50px] custom2:min-w-[330px] border-collapse rounded-md   custom2:max-w-[370px]' />
        </div>

        <div className='btn'>

    <button className='bg-red-700 text-white rounded-md  h-[50px] px-5 text-xl flex items-center justify-center gap-4 mx-auto custom2:min-w-[170px] custom2:max-w-[170px]'> Get Started  
    <FontAwesomeIcon icon={faAngleRight} style={{color: "#eaecf0",}} />
    </button>


        </div>

    </div>
    
</form>
    </div>
  )
}

export default Form