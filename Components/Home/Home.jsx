import React, { useState } from 'react'


export const Home = () => {

   const [image, setImage] = useState("")


  return (
   <>
   
    <div className='flex flex-col md:flex-row justify-center items-center  w-full  text-center bg-black w-full h-screen' >
          <div className='  p-4 my-4'>
          
              <h1 className='text-2xl md:text-4xl font-bold text-orange-400  animate-bounce transition-all duration-100 ease-linear' >Hi, I’m Shiv Kumar 👋  </h1>
              <span className='text-sm md:text-lg text-gray-400 animate-spin '>Frontend Developer | MCA Student | MERN Enthusiast </span>

          </div>


          <div className=' flex justify-center p-4'>
              <img src={image} alt="image not found" className='w-auto h-auto rounded-4xl border-4 border-orange-400 ' /> 

          </div>
        
    </div>
     
   </>
  )
}
