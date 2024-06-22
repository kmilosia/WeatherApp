import React, { useEffect, useRef, useState } from 'react'
import { isEmpty } from '../utils/isEmpty';
import { weatherAPI } from '../utils/baseURL';
import useRetrieveForecast from '../hooks/useRetrieveForecast';
import { useMenuStore } from '../store/menuStore';
import { BsThreeDotsVertical } from "react-icons/bs";
import useLocationStore from '../store/locationStore';
import MenuLocationTooltip from './MenuLocationTooltip';
import { useDefaultLocationStore } from '../store/defaultLocationStore';

const MenuLocationForecast = ({item}) => {
    const [forecast, setForecast] = useState({})
    const [showTooltip, setShowTooltip] = useState(false)
    const toggleMenu = useMenuStore((state) => state.toggleMenu)
    const removeLocation = useLocationStore((state) => state.removeLocation)
    const setDefaultLocation = useDefaultLocationStore((state) => state.setDefaultLocation)
    const { fetchForecastByCity } = useRetrieveForecast()
    const tooltipRef = useRef(null)
    const handleChangeCurrentLocation = (cityName) => {
        fetchForecastByCity(cityName)
        toggleMenu()
    }
    const handleRemoveLocation = () => {
        removeLocation(item)
    }
    const handleSetDefaultLocation = () => {
        setDefaultLocation(item)
    }
    const toggleTooltip = () => {
        setShowTooltip(!showTooltip);
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
    },[item])
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (tooltipRef.current && !tooltipRef.current.contains(event.target)) {
                setShowTooltip(false);
            }
        };
        window.addEventListener('click', handleClickOutside);
        return () => {
            window.removeEventListener('click', handleClickOutside);
        };
    }, []);
  return (
    <li className='center-elements gap-4 w-full my-2'>
        <div onClick={() => {handleChangeCurrentLocation(item)}} className='w-full rounded-md bg-slate-800 py-6 px-5 font-light text-xl flex justify-between items-center hover:bg-slate-700 cursor-pointer'>
            <h1 className='font-extralight'>{item}</h1>
            {!isEmpty(forecast) &&
            <p className='font-medium'>{forecast.current.temp_c} °C</p>
            }
        </div>
        <div className="relative" ref={tooltipRef}>
            <button onClick={toggleTooltip}><BsThreeDotsVertical size={30} /></button>
            {showTooltip && (<MenuLocationTooltip setDefaultLocation={handleSetDefaultLocation} removeLocation={handleRemoveLocation}/>)}
        </div>
    </li>
    
  )
}

export default MenuLocationForecast
