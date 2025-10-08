import React from 'react';

const AppCard = ({ app }) => {

    const {title, image, ratingAvg,downloads} = app

    return (
        <div className="card bg-base-100 w-96 shadow-sm">
            <figure>
                <img
                    src={image} />
            </figure>
            <div className="card-body">
                <h2 className="card-title">
                    Name: {title}
                </h2>
                <div className="card-actions justify-between items-center">
                    <span>{downloads}</span>
                    <span>{ratingAvg}</span>
                </div>
            </div>
        </div>
    );
};

export default AppCard;