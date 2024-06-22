import React, { useEffect, useState } from 'react'
import { isEmpty } from '../utils/isEmpty';
import { weatherAPI } from '../utils/baseURL';
import useRetrieveForecast from '../hooks/useRetrieveForecast';
import { useMenuStore } from '../store/menuStore';

const MenuLocationForecast = ({item}) => {
    const [forecast, setForecast] = useState({})
    const toggleMenu = useMenuStore((state) => state.toggleMenu)
    const { fetchForecastByCity } = useRetrieveForecast()
    const handleChangeCurrentLocation = (cityName) => {
        fetchForecastByCity(cityName)
        toggleMenu()
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
    <li onClick={() => {handleChangeCurrentLocation(item)}} className='rounded-md bg-slate-800 py-6 px-5 font-light text-xl flex justify-between items-center my-2 hover:bg-slate-700 cursor-pointer'>
        <h1 className='font-extralight'>{item}</h1>
        {!isEmpty(forecast) &&
        <p className='font-medium'>{forecast.current.temp_c} °C</p>
        }
    </li>
  )
}

export default MenuLocationForecast
