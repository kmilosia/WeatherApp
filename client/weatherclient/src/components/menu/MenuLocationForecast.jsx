import React, { useEffect, useRef, useState } from 'react'
import { isEmpty } from '../../utils/isEmpty';
import useRetrieveForecast from '../../hooks/useRetrieveForecast';
import { useMenuStore } from '../../store/menuStore';
import { BsThreeDotsVertical } from "react-icons/bs";
import useLocationStore from '../../store/locationStore';
import { FaLocationDot } from "react-icons/fa6";
import MenuLocationTooltip from './MenuLocationTooltip';
import { useForecastStore } from '../../store/forecastStore';
import useWeekDay from '../../hooks/useWeekDay';
import useTimeFormat from '../../hooks/useTimeFormat';
import { useSettingsStore } from '../../store/settingsStore';
import UnitsDegreesSpan from '../UnitsDegreesSpan';

const MenuLocationForecast = ({item = null, isDefault, isCurrent}) => {
    const [localForecast, setLocalForecast] = useState({})
    const [showTooltip, setShowTooltip] = useState(false)
    const {setForecast} = useForecastStore()
    const {units} = useSettingsStore()
    const {setLastLocation, setDefaultLocation, removeLocation, clearDefaultLocation, currentLocation} = useLocationStore()
    const toggleMenu = useMenuStore((state) => state.toggleMenu)
    const { fetchForecastByCity,fetchForecastByCoords } = useRetrieveForecast()
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
        if(isDefault){
            clearDefaultLocation()
        }
    }
    const handleSetDefaultLocation = () => {
        setDefaultLocation(localForecast.location.name)
    }
    const toggleTooltip = () => {
        setShowTooltip(!showTooltip);
    }
    useEffect(() => {
        if(isCurrent){
            fetchForecastByCoords(currentLocation, setLocalForecast)
        }else{
        fetchForecastByCity(item, setLocalForecast)
        }
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
    !isEmpty(localForecast) && 
    <li className='center-elements gap-4 w-full my-2'>
        <div onClick={() => {handleChangeCurrentLocation(localForecast.location.name)}} className='w-full rounded-md bg-white/5 py-6 px-5 font-light text-xl flex justify-between items-center hover:bg-blue-900 cursor-pointer'>
            <div className='flex flex-col'>
                <h1 className='font-light flex items-center gap-2'>{isCurrent && <FaLocationDot size={12}/>}{localForecast.location.name}</h1>
                <p className='text-sm font-extralight'>{dayOfWeek}, {time}</p>
            </div>
            
            <div className='flex flex-col items-end'>
                <p className='font-light text-3xl flex items-center mb-1'><img className='h-10 mr-1' src={localForecast.current.condition.icon}/>{units === 'Metric' ? localForecast.current.temp_c : localForecast.current.temp_f} <UnitsDegreesSpan /></p>
                <p className='text-xs font-light flex items-start'>Feels like {units === 'Metric' ? localForecast.current.feelslike_c : localForecast.current.feelslike_f} <UnitsDegreesSpan /></p>
            </div>
            
        </div>
        <div className="relative" ref={tooltipRef}>
            <button onClick={toggleTooltip}><BsThreeDotsVertical size={30} /></button>
            {showTooltip && (<MenuLocationTooltip isCurrent={isCurrent} isDefault={isDefault} setShowTooltip={setShowTooltip} setDefaultLocation={handleSetDefaultLocation} removeLocation={handleRemoveLocation}/>)}
        </div>
    </li>
    
  )
}

export default MenuLocationForecast
