import React from 'react'
import { IoSearch } from 'react-icons/io5'
import { useSearchStore } from '../store/searchStore';
import useLocationStore from '../store/locationStore';
import MenuLocationForecast from './MenuLocationForecast';

const Menu = () => {
  const buttonStyle = 'mx-1 rounded-full p-1 hover:bg-slate-800'
  const setSearchOpen = useSearchStore((state) => state.toggleSearch)
  const {locations,defaultLocation} = useLocationStore()
  const filteredLocations = defaultLocation ? locations.filter(item => item !== defaultLocation) : locations
  
  return (
    <div className='bg-slate-900 text-gray-100 flex flex-col p-8 h-full w-full overflow-auto scrollbar-thin scrollbar-thumb-slate-600 scrollbar-track-slate-900'>
      <div className='flex w-full justify-between items-center mb-6'>
        <h1 className='text-3xl lg:text-4xl font-semibold cursor-default'>Manage locations</h1>
        <button onClick={() => setSearchOpen()} className={buttonStyle}><IoSearch size={30}/></button>
      </div>
      {defaultLocation && 
      <div className='flex flex-col'>
        <h2 className=' text-slate-100 font-extralight text-sm'>Default location</h2>
        <MenuLocationForecast item={defaultLocation} isDefault={true}/>
      </div>
      }
      {filteredLocations &&
      <div className='flex flex-col'>
        {defaultLocation && <h2 className='mt-4 text-slate-100 font-extralight text-sm'>Other locations</h2>}
        <ul>
          {filteredLocations.map((item) => {
            return(
              <MenuLocationForecast item={item} key={item} isDefault={false}/>
            )
          })}
        </ul>
      </div>
      }
    </div>
  )
}

export default Menu
