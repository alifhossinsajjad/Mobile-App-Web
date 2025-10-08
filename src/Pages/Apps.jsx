import React, { useEffect, useState } from 'react';
import useApps from '../Hooks/useApps';
import AppCard from '../Components/AppCard';
import { Link, NavLink } from 'react-router';

const Apps = () => {

  const { apps } = useApps()


  const [search, setSearch] = useState('')

  const [searchedApps, setSearchedApps] = useState([])

  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      const term = search.trim().toLowerCase()
      const searched = term ? apps?.filter(a => a?.title?.toLowerCase().includes(term)) : apps;

      setSearchedApps(searched);
      setLoading(false)
    }, 600);

    return () => clearTimeout(timer)
  }, [search, apps])



  return (
    <div className=' max-w-10/12 mx-auto my-20'>
      <div className='text-center'>
        <h1 className='text-5xl font-bold mb-5'>Our All Applications</h1>
        <p className='text-gray-500'>Explore All Apps on the Market developed by us. We code for Millions</p>
      </div>

      <div className='flex justify-between items-center py-8'>
        <h1 className='text-2xl font-bold' >({apps.length || 0}) Apps Found</h1>

        <label className="input">
          <input onChange={(e) => { setSearch(e.target.value) }}
            value={search}
            type="Search" placeholder="Search" />
        </label>
      </div>

      {loading ? (
        <div className="flex justify-center items-center py-20">
          <div className="w-12 h-12 border-4 border-dashed rounded-full animate-spin border-[#9F62F2]"></div>
        </div>
      ) :
        searchedApps && searchedApps?.length > 0 ? (
          <div>
            <div className="grid xl:lg:grid-cols-4  md:grid-cols-2 grid-cols-1 gap-20">
              {searchedApps.map(app => (
                <AppCard key={app.id} app={app} />
              ))}
            </div>
            <div className='text-center my-10'>
              <Link to={'/apps'} className='bg-gradient-to-tl from-[#9F62F2] to-[#632EE3] text-lg font-bold text-white my-6 p-4 rounded-lg'>Show All</Link>
            </div>
          </div>

        ) : (
          <div className="text-center text-gray-500 py-20">
            <h2 className="text-4xl font-bold text-gray-700 mb-2">No Apps Found </h2>
            <div className='text-center my-10'>
              <Link to={'/'} className='bg-gradient-to-tl from-[#9F62F2] to-[#632EE3] text-lg font-bold text-white my-6 p-4 rounded-lg'>Show All</Link>
            </div>
          </div>
        )}
    </div>
  );
};

export default Apps;