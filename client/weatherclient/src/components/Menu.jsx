import React, { useState } from 'react'
import { IoSearch } from 'react-icons/io5'
import { useSearchStore } from '../store/searchStore';
import useLocationStore from '../store/locationStore';
import MenuLocationForecast from './MenuLocationForecast';

const Menu = () => {
  const buttonStyle = 'mx-1 rounded-full p-1 hover:bg-slate-800'
  const setSearchOpen = useSearchStore((state) => state.toggleSearch)
  const locations = useLocationStore((state) => state.locations)
  console.log(locations);
  
  return (
    <div className='bg-slate-900 text-gray-100 flex flex-col p-5 h-full w-full'>
      <div className='flex w-full justify-between items-center'>
        <h1 className='text-3xl lg:text-4xl font-semibold cursor-default'>Manage locations</h1>
        <button onClick={() => setSearchOpen()} className={buttonStyle}><IoSearch size={30}/></button>
      </div>
      {locations &&
      <ul className='my-4'>
        {locations.map((item) => {
          return(
            <MenuLocationForecast item={item} key={item}/>
          )
        })}
      </ul>
      }
    </div>
  )
}

export default Menu
