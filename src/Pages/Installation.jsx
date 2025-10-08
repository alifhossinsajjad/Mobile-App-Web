import React, { useState } from 'react';
import { loadInstall, removeFromInstallation } from '../utils/LocalStorage';
import { FaStar } from 'react-icons/fa';
import { GrDownload } from 'react-icons/gr';
import { toast } from 'react-toastify';


const Installation = () => {

    const [installApp, setInstallApp] = useState(loadInstall);
    const [sortOrder, setSortOrder] = useState('')


    if (!installApp.length) return <p className='text-center mt-20  text-2xl font-bold'>
        No Apps Available
    </p>

    const sortedApp = (() => {
        if (sortOrder === 'size-desc') {
            return [...installApp].sort((a, b) => parseInt(b.size) - parseInt(a.size))
        }
        else if (sortOrder === 'size-asc') {
            return [...installApp].sort((a, b) => parseInt(a.size) - parseInt(b.size))
        }
        else {
            return installApp;
        }
    })()




    const handleUninstall = (id) => {

        removeFromInstallation(id)
        setInstallApp(prev => prev.filter(a => a.id !== id))
        toast.success('✅ App Uninstalled Successfully!');
        

    }



    return (
        <div className=''>
            <div className='p-10 m-30 '>
                <div >
                    <div className='text-center'>
                        <h1 className='text-4xl font-bold mb-4'>Your Installed Apps</h1>
                        <p className='text-gray-500 text-lg'>Explore All Trending Apps on the Market developed by us</p>
                    </div>
                    <div className='flex justify-between py-5 items-center'>
                        <h1 className=' text-lg font-semibold'>({sortedApp.length}) Apps Found</h1>

                        <label className="form-control ">
                            <select value={sortOrder}
                                onChange={(e) => setSortOrder(e.target.value)}>
                                <option value="none">Sort By Size</option>
                                <option value="size-desc">High-&gt;Low</option>
                                <option value="size-asc">Low-&gt;High</option>
                            </select>
                        </label>
                    </div>

                </div>


                <div className='space-y-8'>
                    {
                        sortedApp.map(a => (
                            <div key={a.id} className='card card-side bg-base-100 shadow-lg p-3'>
                                <figure>
                                    <img
                                        className='w-50 p-2 rounded-2xl object-cover'
                                        src={a.image}
                                        alt={a.title}
                                    />
                                </figure>
                                <div className='card-body'>
                                    <h3 className='card-title'>Name : {a.title}</h3>
                                    <div className='flex gap-10 '>
                            <span className='flex items-center text-lg font-bold text-green-500 gap-2'><GrDownload/>{a.downloads}</span>
                            <span className='flex items-center text-lg font-bold text-[#FF8811]  gap-2'><FaStar/> {a.ratingAvg}</span>
                            <span className='flex items-center text-lg font-bold'>{a.size}</span>
                        </div>
                                </div>
                                <div className='p-5 flex items-center gap-3'>
                                    <button
                                        onClick={() => handleUninstall(a.id)}
                                        className='btn bg-[#00D390] text-white text-lg font-bold'
                                    >
                                        Uninstall
                                    </button>
                                 
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default Installation;