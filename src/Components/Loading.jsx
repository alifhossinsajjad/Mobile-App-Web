import React from 'react';

const Loading = ({counter = 8}) => {
    return (
        <div className='grid xl:lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mx-auto gap-20'>
            {Array.from({ length: counter}).map((_ , i) => (
            <div key={i} className="flex w-80 flex-col gap-4">
                <div className="skeleton h-32 w-full"></div>
                <div className="skeleton h-4 w-28"></div>
                <div className="skeleton h-4 w-full"></div>
                <div className="skeleton h-4 w-full"></div>
            </div>
            ))}
        </div>
    );
};

export default Loading;