import React from "react";
import {FaBars, FaTimes} from 'react-icons/fa'
import Logo from '../assests/logo-no-background.png'

const NavBar = () => {
    return(
        <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300">
            <div>
                <img src={Logo} alt='Logo image' style={{width: '100px'}} />
            </div>
            <div>
                {/* menu */}
                <ul className="flex">
                    <li>Home</li>
                    <li>About</li>
                    <li>Projects</li>
                    <li>Skills</li>
                    <li>Contact</li>
                </ul>
            </div>
            {/* hamburger */}
            <div className="hidden">
                <FaBars />
            </div>
        
            {/* mobile menu */}
            <ul className="hidden">
                    <li>Home</li>
                    <li>About</li>
                    <li>Projects</li>
                    <li>Skills</li>
                    <li>Contact</li>
            </ul>

            {/* Social Icons */}
            <div></div>

        </div>
    )
}

export default NavBar