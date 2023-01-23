import React from 'react'

import TempProjectImg from '../assests/TempProjectImg.png'

function Projects() {
  return (
    <div name='projects' className='w-full h-full bg-gradient-to-r from-[#0f2027] via-[#203a43] to-[#2c5364] ...'>
        
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 text-[#ccd6f6] border-purple-600'>Projects</p>
                <p className='py-4 text-[#ccd6f6]'>// Check out some of my projects!</p>
            </div>

            <div style={{backgroundImage: `url(${TempProjectImg})`}} className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
                <div className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    
                    {/* hover effects */}                    
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            React JS Application
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