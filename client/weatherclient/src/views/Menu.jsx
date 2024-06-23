import React from 'react'
import { IoSearch } from 'react-icons/io5'
import { LuSettings } from "react-icons/lu";
import { useSearchStore } from '../store/searchStore';
import useLocationStore from '../store/locationStore';
import MenuLocationForecast from '../components/menu/MenuLocationForecast';
import { useSettingsStore } from '../store/settingsStore';
import { useMenuStore } from '../store/menuStore';

const Menu = () => {
  const buttonStyle = 'mx-1 rounded-full p-1 hover:bg-blue-900'
  const setSearchOpen = useSearchStore((state) => state.toggleSearch)
  const {toggleSettings,scrollbarVisibility} = useSettingsStore()
  const {locations,defaultLocation,currentLocation} = useLocationStore()
  const {toggleMenu} = useMenuStore()
  const filteredLocations = defaultLocation ? locations.filter(item => item !== defaultLocation) : locations
  
  return (
    <div className={`backdrop-blur-md bg-white/5 text-gray-100 flex flex-col p-8 h-full w-full overflow-auto ${scrollbarVisibility ? 'scrollbar-thin scrollbar-thumb-white/25 scrollbar-track-white/50' : 'scrollbar-none'}`}>
      <div className='flex w-full justify-between items-center mb-6'>
        <h1 className='text-3xl lg:text-4xl font-semibold cursor-default'>Manage locations</h1>
        <div className='flex'>
          <button onClick={() => {toggleMenu(false);setSearchOpen()}} className={buttonStyle}><IoSearch size={30}/></button>
          <button onClick={() => {toggleMenu(false);toggleSettings()}} className={buttonStyle}><LuSettings  size={30}/></button>
        </div>
      </div>
      {currentLocation && 
      <div className='flex flex-col'>
        <h2 className=' text-slate-100 font-extralight text-sm cursor-default'>Current location</h2>
        <MenuLocationForecast isDefault={true} isCurrent={true}/>
      </div>
      }
      {defaultLocation && 
      <div className='flex flex-col'>
        <h2 className=' text-slate-100 font-extralight text-sm cursor-default'>Default location</h2>
        <MenuLocationForecast item={defaultLocation} isDefault={true} isCurrent={false}/>
      </div>
      }
      {filteredLocations &&
      <div className='flex flex-col'>
        {(defaultLocation || currentLocation) && <h2 className='mt-4 text-slate-100 font-extralight text-sm cursor-default'>Other locations</h2>}
        <ul>
          {filteredLocations.map((item) => {
            return(
              <MenuLocationForecast item={item} key={item} isDefault={false} isCurrent={false}/>
            )
          })}
        </ul>
      </div>
      }
    </div>
  )
}

export default Menu
