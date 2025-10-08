import React from 'react';
import { Link, useRouteError } from 'react-router';

import errorImage from '../assets/404.png'

const ErrorPage = () => {

    const error = useRouteError();

    return (
        <div className="flex flex-col justify-center items-center h-screen text-center bg-gray-50">
            {/* <h1 className='xl:lg:md:text-8xl text-lg font-extrabold'>404</h1> */}
            <img className='flex justify-center my-20' src={errorImage} alt="" />
            <h2 className='text-3xl font-bold text-gray-700 mt-2'>Oops, page not found!</h2>
            <p>
                {
                    error?.statusText || "The Page you are looking dose not exist"
                }
            </p>
            <Link to={'/'} className="mt-6 bg-[#9F62F2] text-white px-6 py-3 rounded-lg hover:shadow-lg">Go Back Home</Link>
        </div>
    );
};

export default ErrorPage;