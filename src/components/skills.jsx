import React from 'react'
import CSS from '../assets/css.png'
import HTMl from '../assets/html.png'
import Node from '../assets/node.png'
import Reactimg from '../assets/react.png'
import Vue from '../assets/aws.png'
import JS from '../assets/javascript.png'
import github from '../assets/github.png'

const skills = () => {
  return (
    <div name='skills' className='w-full h-screen bg-[#0a192b] text-gray-300'>
        {/* container */}
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div>
                <p className='text-4xl font-bold inline border-b-4 border-purple-200 '>Skills</p>
                <p className='py-4'>// These are the technologies I've worked on</p>
            </div>
            <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={HTMl} alt="HTML" />
                    <p className='my-4'>HTML</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={JS} alt="HTML" />
                    <p className='my-4'>JS</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={CSS} alt="HTML" />
                    <p className='my-4'>CSS</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={Node} alt="HTML" />
                    <p className='my-4'>Node Js</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={Reactimg} alt="HTML" />
                    <p className='my-4'>React</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={Vue} alt="HTML" />
                    <p className='my-4'>Vue</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={github} alt="HTML" />
                    <p className='my-4'>GITHUB</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default skills