
import { useParams } from 'react-router';
import useApps from '../Hooks/useApps';
import { updateApps } from '../utils/LocalStorage';



const AppsDetails = () => {
    const { id } = useParams();

    const { apps, loading } = useApps();

    const app = apps.find(a => String(a.id) === id)

    if (loading) return <p>Loading......Apps Detaisl</p>

    const { title, image, companyName, description, ratingAvg, downloads, reviews, size } = app || {}
    return (
        <div className='w-10/12 mx-auto'>
            <div className='flex gap-10 my-20 border-b  border-gray-500 w-full mb-5'>
                <div>
                    <figure>
                        <img className='w-40 shadow-2xl' src={image} alt="" />
                    </figure>
                </div>
                <div className=''>
                    <div className='border-b  border-gray-500 w-7xl'>
                        <h1>{title}</h1>
                        <p>{companyName}</p>
                    </div>
                    <div>
                        <div className='flex gap-10 py-7'>
                            <span><p>Downloads</p>{downloads}</span>
                            <span><p>Average Rating</p>{ratingAvg}</span>
                            <span><p>Total Reviews</p>{reviews}</span>
                        </div>
                        <button onClick={()=>updateApps(app)} className='mb-6'>Install Now ({size})</button>
                    </div>
                </div>

            </div>


            {/* {chart} */}
            <div>

            </div>

            {/* {description} */}
            <div>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default AppsDetails;