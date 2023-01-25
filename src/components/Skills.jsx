import React from 'react'

import HTML from '../assests/html.png'
import CSS from '../assests/css.png'
import JavaScript from '../assests/javascript.png'
import ReactImg from '../assests/react.png'
import Node from '../assests/node.png'
import Github from '../assests/github.png'
import CSharp from '../assests/csharp.png'
import Unity from '../assests/unity-logo.png'
import Unreal from '../assests/unreal.png'

function Skills() {
  return (
    <div name='skills' className='w-full h-full bg-gradient-to-r from-[#0f2027] via-[#203a43] to-[#2c5364] ...'>
        {/* container */}
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full text-[#ccd6f6]'>
            <div>
                <p className='text-4xl font-bold inline border-b-4 border-purple-600'>Skills</p>
                <p className='py-4'>// These are the technologies i have experience with</p>
            </div>

            <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={HTML} alt='HTML Icon' />
                    <p className='my-4'>HTML</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={CSS} alt='CSS Icon' />
                    <p className='my-4'>CSS</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={JavaScript} alt='JavaScript Icon' />
                    <p className='my-4'>JavaScript</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={ReactImg} alt='React Icon' />
                    <p className='my-4'>React</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={Node} alt='Node Icon' />
                    <p className='my-4'>Node</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={Github} alt='Github Icon' />
                    <p className='my-4'>Github</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={CSharp} alt='C# Icon' />
                    <p className='my-4'>C#</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-40 mx-auto my-8 py-3' src={Unity} alt='Unity Icon' />
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto my-8' src={Unreal} alt='Unreal Icon' />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Skills