import React, { useEffect, useRef, useState } from 'react'
import { isEmpty } from '../utils/isEmpty';
import useRetrieveForecast from '../hooks/useRetrieveForecast';
import { useMenuStore } from '../store/menuStore';
import { BsThreeDotsVertical } from "react-icons/bs";
import useLocationStore from '../store/locationStore';
import MenuLocationTooltip from './MenuLocationTooltip';
import { useForecastStore } from '../store/forecastStore';
import useWeekDay from '../hooks/useWeekDay';
import useTimeFormat from '../hooks/useTimeFormat';

const MenuLocationForecast = ({item, isDefault}) => {
    const [localForecast, setLocalForecast] = useState({})
    const [showTooltip, setShowTooltip] = useState(false)
    const {setForecast} = useForecastStore()
    const {setLastLocation, setDefaultLocation, removeLocation} = useLocationStore()
    const toggleMenu = useMenuStore((state) => state.toggleMenu)
    const { fetchForecastByCity } = useRetrieveForecast()
    const tooltipRef = useRef(null)
    const dateString = localForecast?.location?.localtime || ''
    const dayOfWeek = useWeekDay(dateString)
    const time = useTimeFormat(dateString)

    const handleChangeCurrentLocation = (cityName) => {
        fetchForecastByCity(cityName, setForecast)
        setLastLocation(cityName)
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
        fetchForecastByCity(item, setLocalForecast)
        const handleClickOutside = (event) => {
            if (tooltipRef.current && !tooltipRef.current.contains(event.target)){
                setShowTooltip(false)
            }
        }
        window.addEventListener('click', handleClickOutside)
        return () => {
            window.removeEventListener('click', handleClickOutside)
        }
    }, [])
  return (
    <li className='center-elements gap-4 w-full my-2'>
        <div onClick={() => {handleChangeCurrentLocation(item)}} className='w-full rounded-md bg-slate-800 py-6 px-5 font-light text-xl flex justify-between items-center hover:bg-slate-700 cursor-pointer'>
            <div className='flex flex-col'>
                <h1 className='font-light'>{item}</h1>
                <p className='text-sm font-extralight'>{dayOfWeek}, {time}</p>
            </div>
            {!isEmpty(localForecast) && 
            <div className='flex flex-col items-end'>
                <p className='font-light text-3xl flex items-center mb-1'><img className='h-10 mr-1' src={localForecast.current.condition.icon}/>{localForecast.current.temp_c} <span className='ml-1'> °C</span></p>
                <p className='text-xs font-light flex items-start'>Feels like {localForecast.current.feelslike_c} <span className='ml-1'> °C</span></p>
            </div>
            }
        </div>
        <div className="relative" ref={tooltipRef}>
            <button onClick={toggleTooltip}><BsThreeDotsVertical size={30} /></button>
            {showTooltip && (<MenuLocationTooltip isDefault={isDefault} setDefaultLocation={handleSetDefaultLocation} removeLocation={handleRemoveLocation}/>)}
        </div>
    </li>
    
  )
}

export default MenuLocationForecast
