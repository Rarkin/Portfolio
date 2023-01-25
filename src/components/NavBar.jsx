import React, {useState} from "react";
import {FaBars, FaTimes, FaGithub, FaLinkedin, FaRegFilePdf} from 'react-icons/fa'
import Logo from '../assests/logo-no-background.png'
import {HiOutlineMail} from 'react-icons/hi'
import {Link} from 'react-scroll'

const NavBar = () => {
const [nav, setNav] = useState(false)
const handleClick = () => setNav(!nav)

    return(
        <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-gradient-to-r from-[#0f2027] via-[#203a43] to-[#2c5364] ... text-gray-300">
            <div>
            <Link to="hero" smooth={true} duration={500}>
                <img src={Logo} alt='Logo image' style={{width: '100px'}} />
            </Link>
            </div>
            {/* menu */}
            <ul className="hidden md:flex">
                <li>
                    <Link to="hero" smooth={true} duration={500}>
                        Home
                    </Link>
                </li>
                <li>
                    <Link to="projects" smooth={true} duration={500}>
                        Projects
                    </Link>
                </li>
                <li>
                    <Link to="skills" smooth={true} duration={500}>
                        Skills
                    </Link>
                </li>
                <li>
                    <Link to="contact" smooth={true} duration={500}>
                        Contact
                    </Link>
                </li>
            </ul>
            {/* hamburger */}
            <div onClick={handleClick} className="md:hidden z-10">
                {!nav ? <FaBars /> : <FaTimes/>}
            </div>
        
            {/* mobile menu */}
            <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'}>
                    <li className='py-6 text-4xl'>
                        <Link onClick={handleClick} to="hero" smooth={true} duration={500}>
                            Home
                        </Link>
                    </li>
                    <li className='py-6 text-4xl'>
                        <Link onClick={handleClick} to="projects" smooth={true} duration={500}>
                            Projects
                        </Link>
                    </li>
                    <li className='py-6 text-4xl'>
                        <Link onClick={handleClick} to="skills" smooth={true} duration={500}>
                            Skills
                        </Link>
                    </li>
                    <li className='py-6 text-4xl'>
                        <Link onClick={handleClick} to="contact" smooth={true} duration={500}>
                            Contact
                        </Link>
                    </li>
            </ul>

            {/* Social Icons */}
            <div className="hidden sm:flex flex fixed  flex-col top-[35%] left-0">
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