import React from 'react';
import { Link } from 'react-router';
import logo from '../assets/logo.png'
import { GrTwitter } from 'react-icons/gr';
import { SlSocialTwitter } from 'react-icons/sl';
import { FiGithub } from 'react-icons/fi';
import { IoLogoLinkedin } from 'react-icons/io';
const Footer = () => {
    return (
        <div>
            <footer className="px-6 md:px-16 lg:px-24 xl:px-32 w-full">
                <div className="flex flex-col md:flex-row items-start justify-center gap-10 py-10 border-b border-gray-500/30">

                    <div className="max-w-96">
                        <Link to={'/'} className="flex gap-2 btn-ghost text-xl font-bold bg-linear-to-tl from-[#9F62F2] to-[#632EE3] text-transparent bg-clip-text"><img className='w-8' src={logo} alt="" />HERO.IO</Link>
                        <p className="mt-6 text-sm text-gray-500">choose your apps and download free for education , entertainment, gaming, networking and etc. 
                        </p>
                        <div className="flex items-center gap-2 mt-3">
                            <Link to={'https://github.com/alifhossinsajjad'}>
                                <span className='text-4xl text-blue-600'>
                                    <SlSocialTwitter/>
                                </span>
                            </Link>

                            <Link to={'https://github.com/alifhossinsajjad'}>
                                <span className='text-4xl text-blue-600'>
                                    <FiGithub/>
                                </span>
                            </Link>

                            <Link to={'https://www.linkedin.com/in/alif-mia-320039276/'}>
                               <span className='text-4xl text-blue-600'> <IoLogoLinkedin /></span>
                            </Link>
                        </div>
                    </div>

                    <div className="w-1/2 flex flex-wrap md:flex-nowrap justify-between">
                        <div>
                            <h2 className="font-semibold text-gray-900 mb-5">RESOURCES</h2>
                            <ul className="text-sm text-gray-500 space-y-2 list-none">
                                <li><Link to={'/'}>Home</Link></li>
                                <li><Link to={'/apps'}>Apps</Link></li>
                                <li><Link to={'/installation'}>Installation</Link></li>
                                
                            </ul>
                        </div>
                        <div>
                            <h2 className="font-semibold text-gray-900 mb-5">COMPANY</h2>
                            <div className="text-sm text-gray-500 space-y-2 list-none">
                                <li><a href="#">About</a></li>
                                <li><a href="#">Careers</a></li>
                                <li><a href="#">Privacy</a></li>
                                <li><a href="#">Terms</a></li>
                            </div>
                        </div>
                    </div>

                </div>
                <p className="py-4 text-center text-xs md:text-sm text-gray-500">
                    Copyright 2024 © <a href="https://prebuiltui.com">PrebuiltUI</a>. All Right Reserved.
                </p>
            </footer>
        </div>
    );
};

export default Footer;