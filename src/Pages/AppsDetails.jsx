
import { useParams } from 'react-router';
import useApps from '../Hooks/useApps';
import { updateApps } from '../utils/LocalStorage';
import { TbDownload } from 'react-icons/tb';
import { FaStar } from 'react-icons/fa';
import { MdReviews } from 'react-icons/md';
import { useState } from 'react';
import { toast } from 'react-toastify';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import apps404image from '../assets/apps404.png'

const AppsDetails = () => {
    const { id } = useParams();

    const { apps, loading, error } = useApps();

    const [isInstalled, setIsInstalled] = useState(false);



    if (loading) return <p className="text-center text-lg font-bold my-20">Loading App Details...</p>;

    if (error) return <p className="text-center text-red-500 font-bold my-20">⚠️ Failed to load apps data.</p>;


    const app = apps.find(a => String(a.id) === id)

    if (!app) {
        return (
            <div className=''>
                <div className='flex  justify-center items-center'>
                    <img src={apps404image} alt="" />
                </div>
                <div className='text-center my-10'>
                    <h1 className='text-4xl font-bold mb-5'>App not Found</h1>
                    <p className="text-gray-500">The app you’re looking for doesn’t exist or has been removed.</p>
                </div>
            </div>
        )
    }


    const { title, image, companyName, description, ratingAvg, downloads, reviews, size, ratings } = app || {}



    const handleInstalled = () => {
        updateApps(app)
        setIsInstalled(true);
        toast.success('✅ App Installed Successfully!');
    }
    return (
        <div className='w-10/12 mx-auto'>
            <div className='xl:lg:md:flex  gap-10 my-20 border-b  border-gray-500 lg:xl:md:w-full pb-10'>
                <div>
                    <figure>
                        <img className=' shadow-2xl mb-3 rounded-3xl' src={image} alt="" />
                    </figure>
                </div>
                <div className=''>
                    <div className='border-b pb-5  border-gray-500 lg:xl:md:w-7xl'>
                        <h1 className='text-lg font-bold'>Name : {title}</h1>
                        <p className='text-lg font-bold'>Developed by : <span className='text-[#9F62F2]'>{companyName}</span></p>
                    </div>
                    <div>
                        <div className='lg:xl:md:flex gap-10 py-7 '>
                            <span className='lg:xl:md:text-xl font-bold'><span className='text-green-500 lg:xl:md:text-5xl  font-bold'><TbDownload /></span><p className='text-gray-500'>Downloads</p>{downloads}</span>


                            <span className='lg:xl:md:text-xl font-bold'><span className='text-[#FF8811] lg:xl:md:text-5xl font-bold'><FaStar /></span><p className='text-gray-500'>Average Rating</p>{ratingAvg}</span>


                            <span className='lg:xl:md:text-xl font-bold'><span className=' text-[#9F62F2]  lg:xl:md:text-5xl font-bold  '><MdReviews /></span><p className='text-gray-500'>Total Reviews</p>{reviews}</span>
                        </div>
                        <button onClick={handleInstalled} className={`hover:cursor-pointer mb-6 text-xl font-bold p-4 rounded-lg transition-colors duration-300 ${isInstalled
                            ? 'bg-gray-400 text-white'
                            : 'bg-[#00D390] text-white hover:bg-[#00b97f]'
                            }`}
                            disabled={isInstalled}>{isInstalled ? 'Installed' : `Installed Now (${size})`}</button>
                    </div>
                </div>

            </div>


            {/* {chart} */}
            <div className='my-10'>
                <h2 className='text-lg font-bold mb-4'>Ratings</h2>
                <ResponsiveContainer width="100%" height={300}>
                    <BarChart layout="vertical" data={ratings}>
                        <XAxis type="number" />
                        <YAxis dataKey="name" type="category" />
                        <Tooltip />
                        <Bar dataKey="count" fill="#FF8811" barSize={20} radius={[5, 5, 5, 5]} />
                    </BarChart>
                </ResponsiveContainer>
            </div>

            {/* {description} */}
            <div className='my-20'>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default AppsDetails;