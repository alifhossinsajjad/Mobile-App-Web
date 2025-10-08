import React from 'react';
import { BsFillStarFill } from 'react-icons/bs';
import { FaStar } from 'react-icons/fa';
import { MdOutlineFileDownload } from 'react-icons/md';
import { Link } from 'react-router';

const AppCard = ({ app }) => {

    const {title, image, ratingAvg,downloads,id} = app

    return (
       <Link to={`/apps/${id}`}> <div className="card bg-base-100 w-96 shadow-sm">
            <figure>
                <img className='h-80 w-full'
                    src={image} />
            </figure>
            <div className="card-body">
                <h2 className="card-title">
                    Name: {title}
                </h2>
                <div className="card-actions justify-between items-center">
                    <span className='flex items-center text-lg font-bold text-green-500 gap-2'><MdOutlineFileDownload size={25}/>{downloads}</span>
                    <span className='flex items-center text-lg font-bold text-[#FF8811]  gap-2'><BsFillStarFill size={25}/>{ratingAvg}</span>
                </div>
            </div>
        </div></Link>
    );
};

export default AppCard;