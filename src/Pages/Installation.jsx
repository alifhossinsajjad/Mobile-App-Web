import React, { useState } from 'react';
import { loadInstall } from '../utils/LocalStorage';

const Installation = () => {

    const [installApp, setInstallApp] = useState(loadInstall);
    const [sortOrder, setSortOrder] = useState('')


    if(!installApp.length) return <p className='text-center mt-20 text-2xl font-bold'>
        No Apps Available
    </p>



    return (
        <div>
            <div>
                <div>
                    <h1>Your Installed Apps</h1>
                    <p>Explore All Trending Apps on the Market developed by us</p>
                </div>
                <div>
                <h1></h1>
                </div>

            </div>
        </div>
    );
};

export default Installation;