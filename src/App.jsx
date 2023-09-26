import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Hero from './components/Hero'
import Tv from './components/tv'
import Downloading from './components/Downloading'
import Watch from './components/Watch'
import Children from './components/Children'
import Accordion from './components/accordion/Accordion'
import { data } from './data'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import {faAngleRight} from '@fortawesome/free-solid-svg-icons'
import Footer from './components/footer/Footer'
import Form from './components/form'





function App() {
  const [open,setOpen]=useState(false)

  const toggle=(id)=>{
    if(open === id){
      return setOpen(null)
    }

    setOpen(id)
  }


  return (
    <>
  
      <Hero/>
      <Tv/>
      
      <Downloading/>
      
      <Watch/>
      <Children/>
      <section className='border-b-8 border-[#2d2d2d]  grid justify-center text-center ' >
      <div className='Accordian--head text-white grid  justify-center   font-Netflix text-[2rem] font-[700] mb-8 mt-10'>
        <h>
           Frequently Asked Questions
        </h>

        </div>
      {
        data.map((data,id) => {
          return(
          <Accordion key={id} 
          open={id===open} 
          question={data.Question}
           description={data.Description} 
           toggle={()=> toggle(id)}/>
        );

        })}

        <div className='Acc-foot'>

          <div className='acc-para  justify-center text-center align-middle'>

          <p className='text-white  m-8 text-[1.325rem] font-[400] '>
          Ready to watch? Enter your email to create or restart your membership.
          </p>

          </div>
          <Form/>

          

          
        </div>


      </section>
      
      <footer className='w-full'>  
        <Footer/>

      </footer>

       
    </>
  )
}

export default App
