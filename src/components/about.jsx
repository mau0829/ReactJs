import React from 'react'

const about = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#0a192b] text-gray-300'>
        <div className=' flex flex-col justify-center items-center w-full h-full'>
            <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
                <div className='sm:text-right pb-8 pl-4'>
                    <p className='text-4xl font-bold inline border-b-4 border-purple-200'>About</p>
                </div>
                <div>
                </div>
                <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                    <div className='sm:text-right text-4xl font-bold'>
                        Add About you bingo
                    </div>
                    <div>
                        <p>More Details</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default about