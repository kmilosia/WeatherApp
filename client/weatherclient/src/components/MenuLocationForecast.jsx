import React, { useEffect, useState } from 'react'
import { isEmpty } from '../utils/isEmpty';
import { weatherAPI } from '../utils/baseURL';

const MenuLocationForecast = ({item}) => {
    const [forecast, setForecast] = useState({})
   
    useEffect(() => {
        const fetchForecastByCity = async () => {
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
        fetchForecastByCity(item)
    },[])
  return (
    <li className='rounded-md bg-slate-700 p-4 font-light text-xl cursor-default flex justify-between items-center'>
        <h1>{item}</h1>
        {!isEmpty(forecast) &&
        <p>{forecast.current.temp_c} °C</p>
        }
    </li>
  )
}

export default MenuLocationForecast
