import React, { useEffect, useState } from 'react';
import useApps from '../Hooks/useApps';
import AppCard from '../Components/AppCard';

const Apps = () => {

  const { apps } = useApps()
  console.log(apps);

  const [search, setSearch] = useState('')

  const [searchedApps,setSearchedApps] = useState([])
  
  useEffect(() => {
    const term = search.trim().toLowerCase()
    const searched = term ? apps ?.filter(a => a?.title?.toLowerCase().includes(term)) : apps
    setSearchedApps(searched)
  }, [search,apps])



  return (
    <div className='w-10/12 mx-auto p-10 my-10'>

      <div className='flex justify-between items-center py-5'>
        <h1 className='text-2xl font-bold' >({apps.length})Apps Found</h1>

        <label className="input">
          <input onChange={(e) => { setSearch(e.target.value) }}
            value={search}
            type="Search" placeholder="Search" />
        </label>

      </div>
      <div className='grid xl:lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-20'>
        {
          searchedApps.map(app => <AppCard key={app.id} app={app} />)
        }
      </div>
    </div>
  );
};

export default Apps;