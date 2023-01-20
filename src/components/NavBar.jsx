import React, {useState} from "react";
import {FaBars, FaTimes, FaGithub, FaLinkedin, FaRegFilePdf} from 'react-icons/fa'
import Logo from '../assests/logo-no-background.png'
import {HiOutlineMail} from 'react-icons/hi'

const NavBar = () => {
const [nav, setNav] = useState(false)
const handleClick = () => setNav(!nav)

    return(
        <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-gradient-to-r from-[#0f2027] via-[#203a43] to-[#2c5364] ... text-gray-300">
            <div>
                <img src={Logo} alt='Logo image' style={{width: '100px'}} />
            </div>
            {/* menu */}
            <ul className="hidden md:flex">
                <li>Home</li>
                <li>About</li>
                <li>Projects</li>
                <li>Skills</li>
                <li>Contact</li>
            </ul>
            {/* hamburger */}
            <div onClick={handleClick} className="md:hidden z-10">
                {!nav ? <FaBars /> : <FaTimes/>}
            </div>
        
            {/* mobile menu */}
            <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'}>
                    <li className='py-6 text-4xl'>Home</li>
                    <li className='py-6 text-4xl'>About</li>
                    <li className='py-6 text-4xl'>Projects</li>
                    <li className='py-6 text-4xl'>Skills</li>
                    <li className='py-6 text-4xl'>Contact</li>
            </ul>

            {/* Social Icons */}
            <div className="hidden md:flex flex fixed  flex-col top-[35%] left-0">
                <ul>
                    <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#0077b5]">
                        <a className="flex justify-between items-center w-full text-gray-300"
                        href="https://www.linkedin.com/in/karl-graves-45940b1b8/" target="_blank">
                            LinkedIn <FaLinkedin size={30}/>
                        </a>
                    </li>
                    <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#377b06]">
                        <a className="flex justify-between items-center w-full text-gray-300"
                        href="https://github.com/Rarkin" target="_blank">
                            Github <FaGithub size={30}/>
                        </a>
                    </li>
                    <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333]">
                        <a className="flex justify-between items-center w-full text-gray-300"
                        href="mailto:karlgraves28@gmail.com" target="_blank">
                            Email <HiOutlineMail size={30}/>
                        </a>
                    </li>
                    <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#ED2224]">
                        <a className="flex justify-between items-center w-full text-gray-300"
                        href="/" target="_blank">
                            CV <FaRegFilePdf size={30}/>
                        </a>
                    </li>
                </ul>
            </div>

        </div>
    )
}

export default NavBar