import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'
const home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#0a192b] '> 
        {/* container */}
        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
            <p className='text-purple-300'> Hola, my name is </p>
            <h1 className='text-4xl sm:text-7xl font-bold text-[#d1d9f3]'>Bhagyashri Shinde</h1>
            <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>I'm Enovia Widget Developer,</h2>
            <p className='text-[#8892b0] py-4 max-w-[700px]'>specialized in developing widget with JS framework </p>
            <div>
                <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-gray-500'>
                    View Work 
                    <span className='group-hover:rotate-90 duration-300'>
                        <HiArrowNarrowRight className='ml-3'/>
                    </span>                   
                </button>
            </div>
        </div>
    </div>
  )
}

export default home