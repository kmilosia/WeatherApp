import React, { useEffect, useState } from 'react'
import { isEmpty } from '../utils/isEmpty';
import { weatherAPI } from '../utils/baseURL';
import useRetrieveForecast from '../hooks/useRetrieveForecast';
import { useMenuStore } from '../store/menuStore';
import { FaMinus } from "react-icons/fa6";
import useLocationStore from '../store/locationStore';

const MenuLocationForecast = ({item, managementMode}) => {
    const [forecast, setForecast] = useState({})
    const toggleMenu = useMenuStore((state) => state.toggleMenu)
    const removeLocation = useLocationStore((state) => state.removeLocation)
    const { fetchForecastByCity } = useRetrieveForecast()
    const handleChangeCurrentLocation = (cityName) => {
        fetchForecastByCity(cityName)
        toggleMenu()
    }
    const handleRemoveLocation = () => {
        removeLocation(item)
    }
   
    useEffect(() => {
        const fetchForecast = async () => {
            try {
                const response = await fetch(`${weatherAPI}&q=${item}`);
                if (!response.ok) {
                    console.log('Failed to fetch weather forecast');
                }
                const data = await response.json();
                setForecast(data)
            } catch (error) {
                console.error(error);
            }
        };
        fetchForecast(item)
    },[])
  return (
    <li className='flex w-full my-2 items-center gap-3'>
        <div onClick={() => {handleChangeCurrentLocation(item)}} className='w-full rounded-md bg-slate-800 py-6 px-5 font-light text-xl flex justify-between items-center hover:bg-slate-700 cursor-pointer'>
            <h1 className='font-extralight'>{item}</h1>
            {!isEmpty(forecast) &&
            <p className='font-medium'>{forecast.current.temp_c} °C</p>
            }
        </div>
        {managementMode && <button onClick={handleRemoveLocation} className='rounded-full p-2 bg-slate-800 h-max hover:bg-slate-700'><FaMinus size={14} /></button>}
    </li>
    
  )
}

export default MenuLocationForecast
