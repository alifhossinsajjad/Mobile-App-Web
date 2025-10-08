import React from 'react';


import logo from '../assets/logo.png'
import { Link, NavLink } from 'react-router';
import { AiOutlineGithub } from 'react-icons/ai';
import { BsGithub } from 'react-icons/bs';



const Navbar = () => {
    return (
        <div className="navbar bg-base-100 shadow-sm ">
            <div className="navbar-start lg:md:ml-20">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        <li><a>Item 1</a></li>
                        <li><a>Item 2</a></li>
                        <li><a>Item 3</a></li>
                    </ul>
                </div>
                <Link to={'/'} className="flex gap-2 btn-ghost text-xl font-bold bg-linear-to-tl from-[#9F62F2] to-[#632EE3] text-transparent bg-clip-text"><img className='w-8' src={logo} alt="" />HERO.IO</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="gap-10 menu-horizontal px-1">
                    <li><NavLink to={'/'} className={({ isActive }) =>
                        isActive
                            ? "text-lg font-bold underline bg-gradient-to-tl from-[#9F62F2] to-[#632EE3] text-transparent bg-clip-text gradient-underline"
                            : "text-lg font-bold "
                    }>Home</NavLink></li>
                    <li><NavLink to={'/apps'} className={({ isActive }) =>
                        isActive
                            ? "text-lg font-bold underline bg-gradient-to-tl from-[#9F62F2] to-[#632EE3] text-transparent bg-clip-text gradient-underline"
                            : "text-lg font-bold "
                    }>Apps</NavLink></li>
                    <li><NavLink to={'/installation'} className={({ isActive }) =>
                        isActive
                            ? "text-lg font-bold underline bg-gradient-to-tl from-[#9F62F2] to-[#632EE3] text-transparent bg-clip-text gradient-underline"
                            : "text-lg font-bold "
                    }>Installation</NavLink></li>
                </ul>
            </div>
            <div className="navbar-end lg:md:mr-20">
                <Link to={'https://github.com/alifhossinsajjad'} className="btn text-xl font-bold p-6 bg-linear-to-tl from-[#9F62F2] to-[#632EE3] text-white "><BsGithub />Contrubute</Link>
            </div>
        </div>
    );
};

export default Navbar;