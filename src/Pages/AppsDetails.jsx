
import { Link, useParams } from 'react-router';
import useApps from '../Hooks/useApps';
import { loadInstall, updateApps } from '../utils/LocalStorage';
import { TbDownload } from 'react-icons/tb';
import { FaStar } from 'react-icons/fa';
import { MdReviews } from 'react-icons/md';
import { useEffect, useState } from 'react';
// import { toast } from 'react-toastify';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import apps404image from '../assets/apps404.png'
import reviwesimage from '../assets/icon-review.png'
import Swal from 'sweetalert2';


const AppsDetails = () => {
    const { id } = useParams();

    const { apps, loading, error } = useApps();

    const [isInstalled, setIsInstalled] = useState(false);

    const app = apps.find(a => String(a.id) === id)


    useEffect(() => {
        const installedApp = loadInstall()
        const alreadyInstalled = installedApp.some((a) => String(a.id) === String(id));
        setIsInstalled(alreadyInstalled);
    }, [id])



    if (loading) return <div className="flex justify-center items-center py-20">
        <div className="w-12 h-12 border-4 border-dashed rounded-full animate-spin border-[#9F62F2]"></div>
    </div>

    if (error) return (
        <div className="text-center my-20 text-red-600">
            <h2 className="text-2xl font-bold">Failed to load apps</h2>
            <p>{error?.message || 'Something went wrong'}</p>
        </div>
    );



    if (!app) {
        return (
            <div className="min-h-[60vh] flex flex-col items-center justify-center my-30">
                <img src={apps404image} />
                <h1 className="text-4xl font-bold mb-2">App Not Found</h1>
                <p className="text-gray-500 text-center max-w-lg">
                    The app you’re looking for doesn’t exist or has been removed.
                </p>
                <div className="mt-6">
                    <Link to="/apps" className="bg-[#9F62F2] text-white px-6 py-3 rounded-lg hover:shadow-lg">
                        Browse Apps
                    </Link>
                </div>
            </div>
        );
    }


    const { title, image, companyName, description, ratingAvg, downloads, reviews, size, ratings } = app || {}



    const handleInstalled = () => {
        updateApps(app)
        setIsInstalled(true);
        Swal.fire({
            title: "Thank You",
            text: "Your app installed successfully",
            icon: "success"
        });
    }


    return (
        <div className='w-10/12 mx-auto'>
            <div className='xl:lg:md:flex  gap-10 my-20 border-b  border-gray-500 lg:xl:md:w-full pb-10'>
                <div>
                    <figure>
                        <img className=' shadow-2xl xl:lg:w-full md:w-70 w-50  mb-3 rounded-3xl' src={image} alt="" />
                    </figure>
                </div>
                <div className=''>
                    <div className='border-b pb-5  border-gray-500 lg:xl:md:w-7xl'>
                        <h1 className='md:text-4xl xl:lg:text-5xl text-lg font-bold mb-3'>Name : {title}</h1>
                        <p className='md:text-2xl xl:lg:text-4xl text-lg font-bold'>Developed by : <span className='text-[#9F62F2]'>{companyName}</span></p>
                    </div>
                    <div>
                        <div className='lg:xl:md:flex gap-10 py-7 '>
                            <span className='md:text-2xl xl:lg:text-4xl text-xl font-bold '><span className='text-green-500 lg:xl:text-5xl md:text-4xl  font-bold'><TbDownload /></span><p className='text-gray-500 '>Downloads</p>{downloads}</span>


                            <span className='md:text-2xl xl:lg:text-4xl text-xl font-bold'><span className='text-[#FF8811] lg:xl:text-5xl md:text-4xl font-bold '><FaStar /></span><p className='text-gray-500'>Average Rating</p>{ratingAvg}</span>


                            <span className='md:text-2xl xl:lg:text-4xl text-xl font-bold '><span ><img src={reviwesimage} alt="" /></span><p className='text-gray-500'>Total Reviews</p>{reviews}</span>
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
                <p className='text-3xl font-bold mb-3'>Description</p>
                <p className='text-lg text-gray-500'>{description}</p>
            </div>
        </div>
    );
};

export default AppsDetails;