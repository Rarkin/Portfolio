import React from 'react'

import TempProjectImg from '../assests/TempProjectImg.png'
import JustLift from '../assests/just-lift-high-resolution-logo-color-on-transparent-background.png'

import ReactImg from '../assests/react.png'
import JavaScript from '../assests/javascript.png'

function Projects() {
  return (
    <div name='projects' className='w-full h-full bg-gradient-to-r from-[#0f2027] via-[#203a43] to-[#2c5364] ...'>
        
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 text-[#ccd6f6] border-purple-600'>Projects</p>
                <p className='py-4 text-[#ccd6f6]'>// Check out some of my projects!</p>
            </div>

            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>

                {/* Project Card */}
                <div style={{backgroundImage: `url(${JustLift})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>                    
                    {/* hover effects */}                    
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='font-bold text-white tracking-wider flex justify-center items-center'>
                            Just Lift
                        </span>
                        <div className='pt-8 text-center'>
                            <a href='https://justliftapp.netlify.app' target="_blank">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a>
                            <a href='https://github.com/Rarkin/My-Fitness-App' target="_blank">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                        </div>
                        <div className='grid'>
                            <img className='w-12 py-3 mx-auto flex justify-center items-center' src={ReactImg} alt='React Icon' />
                        </div>
                    </div>
                </div>

                {/* Project Card */}
                <div style={{backgroundImage: `url(${TempProjectImg})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>                    
                    {/* hover effects */}                    
                    <div className='opacity-0 group-hover:opacity-80'>
                        <span className='font-bold text-white tracking-wider'>
                            Project Name Here
                        </span>
                        <div className='pt-8 text-center'>
                            <a href='/'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a>
                            <a href='/'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Project Card */}
                <div style={{backgroundImage: `url(${TempProjectImg})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>                    
                    {/* hover effects */}                    
                    <div className='opacity-0 group-hover:opacity-80'>
                        <span className='font-bold text-white tracking-wider'>
                            Project Name Here
                        </span>
                        <div className='pt-8 text-center'>
                            <a href='/'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a>
                            <a href='/'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Project Card */}
                <div style={{backgroundImage: `url(${TempProjectImg})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>                    
                    {/* hover effects */}                    
                    <div className='opacity-0 group-hover:opacity-80'>
                        <span className='font-bold text-white tracking-wider'>
                            Project Name Here
                        </span>
                        <div className='pt-8 text-center'>
                            <a href='/'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a>
                            <a href='/'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Project Card */}
                <div style={{backgroundImage: `url(${TempProjectImg})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>                    
                    {/* hover effects */}                    
                    <div className='opacity-0 group-hover:opacity-80'>
                        <span className='font-bold text-white tracking-wider'>
                            Project Name Here
                        </span>
                        <div className='pt-8 text-center'>
                            <a href='/'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a>
                            <a href='/'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Project Card */}
                <div style={{backgroundImage: `url(${TempProjectImg})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>                    
                    {/* hover effects */}                    
                    <div className='opacity-0 group-hover:opacity-80'>
                        <span className='font-bold text-white tracking-wider'>
                            Project Name Here
                        </span>
                        <div className='pt-8 text-center'>
                            <a href='/'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a>
                            <a href='/'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    </div>
  )
}

export default Projects