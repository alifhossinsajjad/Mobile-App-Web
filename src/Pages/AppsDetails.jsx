
import { useParams } from 'react-router';
import useApps from '../Hooks/useApps';
import { updateApps } from '../utils/LocalStorage';
import { TbDownload } from 'react-icons/tb';
import { FaStar } from 'react-icons/fa';
import { MdReviews } from 'react-icons/md';
import { useState } from 'react';
import { toast } from 'react-toastify';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';



const AppsDetails = () => {
    const { id } = useParams();

    const { apps, loading } = useApps();

    const [isInstalled, setIsInstalled] = useState(false);

    const app = apps.find(a => String(a.id) === id)

    if (loading) return <p>Loading......Apps Detaisl</p>

    const { title, image, companyName, description, ratingAvg, downloads, reviews, size, ratings } = app || {}



    const handleInstalled = () => {
        updateApps(app)
        setIsInstalled(true);
        toast.success('✅ App Installed Successfully!');
    }
    return (
        <div className='w-10/12 mx-auto'>
            <div className='flex gap-10 my-20 border-b  border-gray-500 w-full pb-10'>
                <div>
                    <figure>
                        <img className=' shadow-2xl' src={image} alt="" />
                    </figure>
                </div>
                <div className=''>
                    <div className='border-b pb-5  border-gray-500 w-7xl'>
                        <h1 className='text-lg font-bold'>Name : {title}</h1>
                        <p className='text-lg font-bold'>Developed by : <span className='text-[#9F62F2]'>{companyName}</span></p>
                    </div>
                    <div>
                        <div className='flex gap-10 py-7 '>
                            <span className='text-xl font-bold'><span className='text-green-500 text-5xl font-bold'><TbDownload /></span><p className='text-gray-500'>Downloads</p>{downloads}</span>
                            <span className='text-xl font-bold'><span className='text-[#FF8811] text-5xl font-bold'><FaStar /></span><p className='text-gray-500'>Average Rating</p>{ratingAvg}</span>
                            <span className='text-xl font-bold'><span className=' text-[#9F62F2]  text-5xl font-bold  '><MdReviews /></span><p className='text-gray-500'>Total Reviews</p>{reviews}</span>
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