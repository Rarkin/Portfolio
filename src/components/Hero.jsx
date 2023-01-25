import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'
import {Link} from 'react-scroll'

const Hero = () => {
  return (
    <div name='hero' className='w-full h-screen bg-gradient-to-r from-[#0f2027] via-[#203a43] to-[#2c5364] ...'>
        
        {/* container */}
        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
            <p className='text-[#ccd6f6] py-2'>Hello there, my name is</p>
            <h1 className='sm:text-4xl text-7xl font-bold text-purple-600'>Karl Graves</h1>
            <h2 className='sm:text-4xl text-7xl text-[#ccd6f6]'>I'm a Full Stack Developer</h2>
            <p className='text-[#ccd6f6] py-4 max-w-700'>I have a passion for games which led me to learn how to code. I have experience creating games using Unity and Unreal Engine, utilizing languages such as C# and C++. I am now transitioning into full stack development, expanding my skillset to include technologies like React, JavaScript, HTML, CSS, and Node.js. I am excited to continue learning and growing in this field, and am eager to apply my skills to real-world projects.</p>
            <div>
              <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-purple-600 hover:border-purple-600'>
              <Link to="projects" smooth={true} duration={500}>
                        View Projects
              </Link>
              <span className='group-hover:rotate-90 duration-300'>
                <HiArrowNarrowRight className='ml-4 ' />
              </span>              
              </button>
            </div>        
        </div>

    </div>
  )
}

export default Hero