import React from 'react';
import { BsFillStarFill } from 'react-icons/bs';
import { FaStar } from 'react-icons/fa';
import { MdOutlineFileDownload } from 'react-icons/md';
import { Link } from 'react-router';

const AppCard = ({ app }) => {

    const {title, image, ratingAvg,downloads,id} = app

    return (
       <Link to={`/apps/${id}`}> <div className="card bg-base-100 w-90 shadow-sm ">
            <figure className=''>
                <img className='h-70 w-full p-8 rounded-[40px]'
                    src={image} />
            </figure>
            <div className="card-body">
                <h2 className="card-title">
                    Name: {title}
                </h2>
                <div className="card-actions justify-between items-center">
                    <span className='flex items-center text-lg font-bold text-green-500 gap-2 bg-gray-200 p-2 rounded-lg'><MdOutlineFileDownload size={25}/>{downloads}</span>
                    <span className='flex items-center text-lg font-bold text-[#FF8811]  gap-2 bg-gray-200 p-2 rounded-lg'><BsFillStarFill size={25}/>{ratingAvg}</span>
                </div>
            </div>
        </div></Link>
    );
};

export default AppCard;