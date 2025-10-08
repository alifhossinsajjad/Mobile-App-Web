import React, { useEffect, useState } from 'react';
import useApps from '../Hooks/useApps';
import AppCard from '../Components/AppCard';
import { NavLink } from 'react-router';

const Apps = () => {

  const { apps } = useApps()
  console.log(apps);

  const [search, setSearch] = useState('')

  const [searchedApps, setSearchedApps] = useState([])

  useEffect(() => {
    const term = search.trim().toLowerCase()
    const searched = term ? apps?.filter(a => a?.title?.toLowerCase().includes(term)) : apps
    setSearchedApps(searched)
  }, [search, apps])



  return (
    <div className='w-11/12 mx-auto p-10 my-10'>
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
      {searchedApps && searchedApps?.length > 0 ? (
        <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10">
          {searchedApps.map(app => (
            <AppCard key={app.id} app={app} />
          ))}
        </div>
      ) : (
        <div className="text-center text-gray-500 py-20">
          <h2 className="text-2xl font-semibold text-gray-700 mb-3">No Apps Found </h2>
          <div className='flex justify-center '>
            <NavLink to={'/'} className='bg-gradient-to-tl from-[#9F62F2] to-[#632EE3] flex justify-center items-center text-lg font-bold text-white my-16 p-4 rounded-lg'>Show All</NavLink>
          </div>
        </div>
      )}
    </div>
  );
};

export default Apps;