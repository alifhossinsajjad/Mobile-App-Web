import React, { useState } from 'react';
import { loadInstall, removeFromInstallation } from '../utils/LocalStorage';

const Installation = () => {

    const [installApp, setInstallApp] = useState(loadInstall);
    const [sortOrder, setSortOrder] = useState('')


    if (!installApp.length) return <p className='text-center mt-20 text-2xl font-bold'>
        No Apps Available
    </p>

    const sortedApp = (() => {
        if (sortOrder === 'price-desc') {
            return [...installApp].sort((a, b) => b.size - a.size)
        }
        else if (sortOrder === 'price-asc') {
            return [...installApp].sort((a, b) => a.size - b.size)
        }
        else {
            return installApp;
        }
    })()




    const handleUninstall = (id) => {

        removeFromInstallation(id)
        setInstallApp(prev => prev.filter(a => a.id !== id))

    }


    // const totalApps = {}
    //     installApp.forEach(app => {
    //         const category = app.category


    //         totalApps[category] = (totalApps[category] || 0 + app.size)
    //     })




    return (
        <div className=''>
            <div  className=' p-10 m-30 '>
            <div >
                <div className='text-center'>
                    <h1 className='text-4xl font-bold mb-4'>Your Installed Apps</h1>
                    <p className='text-gray-500 text-lg'>Explore All Trending Apps on the Market developed by us</p>
                </div>
                <div className='flex justify-between py-5 items-center'>
                    <h1 className=' text-lg font-semibold'>({sortedApp.length}) Apps Found</h1>

                    <lable className="form-control ">
                        <select value={sortOrder}
                            onChange={(e) => setSortOrder(e.target.value)}>
                            <option value="none">Sort By Size</option>
                            <option value="price-desc">High-&gt;Low</option>
                            <option value="price-asc">Low-&gt;High</option>
                        </select>
                    </lable>
                </div>

            </div>


            <div className='space-y-8'>
                {
                    sortedApp.map(a => (
                        <div key={a.id} className='card card-side bg-base-100 shadow-lg'>
                            <figure>
                                <img
                                    className='w-40 h-28 object-cover'
                                    src={a.image}
                                    alt={a.name}
                                />
                            </figure>
                            <div className='card-body'>
                                <h3 className='card-title'>{ }</h3>
                                <p className='text-base-content/70'>{a.category}</p>
                            </div>
                            <div className='pr-4 flex items-center gap-3'>
                                <button
                                    onClick={() => handleUninstall(a.id)}
                                    className='btn bg-green-500 text-white text-lg font-bold'
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