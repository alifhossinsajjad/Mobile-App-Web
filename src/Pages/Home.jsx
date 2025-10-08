import React from 'react';
import img1 from '../assets/Primary Button_1.png'
import img2 from '../assets/Primary Button_2.png'
import banner from '../assets/hero.png'
import useApps from '../Hooks/useApps';
import AppCard from '../Components/AppCard';
import { Link, NavLink } from 'react-router';
import Loading from '../Components/Loading';
const Home = () => {

    const { apps, loading } = useApps();

    const featureApps = apps.slice(0, 8)
    console.log(featureApps);


    return (
        <div>
            <div>
                <div>
                    <div className='text-center mt-20 mb-14 '>
                        <h1 className='text-7xl font-bold'>We Build <br />
                            <span className='bg-linear-to-tl from-[#9F62F2] to-[#632EE3] text-transparent bg-clip-text'>Productive</span> Apps</h1>
                        <p className='mt-12 text-gray-500'>At HERO.IO, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting.<br />Our goal is to turn your ideas into digital experiences that truly make an impact.</p>

                    </div>
                    <div className='flex justify-center items-center lg:md:xl:gap-10 gap-5'>
                        
                        <NavLink to={'https://www.apple.com/app-store/'}><img  src={img1} alt=""/></NavLink>
                        <NavLink to={'https://play.google.com/store/apps?hl=en'}><img src={img2} alt="" /></NavLink>
                    </div>
                </div>

                <div>
                    <div className='flex justify-center mt-26'>
                        <img src={banner} alt="" />
                    </div>
                    <div className="bg-linear-to-tl from-[#9F62F2] to-[#632EE3] text-white py-16 px-6 text-center">
                        <div className='lg:xl:md:p-16'>
                            <h2 className="text-3xl md:text-4xl font-extrabold mb-12">
                                Trusted By Millions, Built For You
                            </h2>
                            <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-12">
                                <div>
                                    <p className="text-lg opacity-80 mb-1">Total Downloads</p>
                                    <h3 className="text-5xl font-bold">29.6M</h3>
                                    <p className="text-sm opacity-70 mt-2">21% More Than Last Month</p>
                                </div>
                                <div>
                                    <p className="text-lg opacity-80 mb-1">Total Reviews</p>
                                    <h3 className="text-5xl font-bold">906K</h3>
                                    <p className="text-sm opacity-70 mt-2">46% More Than Last Month</p>
                                </div>
                                <div>
                                    <p className="text-lg opacity-80 mb-1">Active Apps</p>
                                    <h3 className="text-5xl font-bold">132+</h3>
                                    <p className="text-sm opacity-70 mt-2">31 More Will Launch</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <div>
                <div className='text-center my-16'>
                    <h1 className='text-4xl font-bold mb-6'>Trending Apps</h1>
                    <p className='text-gray-500'>Explore All Trending Apps on the Market developed by us</p>
                </div>
                <div className='max-w-10/12 mx-auto '>
                    {
                        loading ? <Loading/> :
                        <div className='grid xl:lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-20 '>
                        {
                            featureApps.map(app => <AppCard key={app.id} app={app} />)
                        }
                    </div>
                    }

                    <div className='flex justify-center '>
                        <NavLink to={'/apps'} className='bg-gradient-to-tl from-[#9F62F2] to-[#632EE3] flex justify-center items-center text-lg font-bold text-white my-16 p-4 rounded-lg'>Show All</NavLink>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;