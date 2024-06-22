import React, { useState } from 'react'
import { IoMenu } from 'react-icons/io5'
import { useMenuStore } from '../store/menuStore'
import { useForecastStore } from '../store/forecastStore'
import { isEmpty } from '../utils/isEmpty'
import useWeekDay from '../hooks/useWeekDay'
import useTimeFormat from '../hooks/useTimeFormat'
import WeatherDetails from './WeatherDetails'
import AddLocationButton from './AddLocationButton'

const Forecast = () => {
    const setMenu = useMenuStore((state) => state.toggleMenu)
    const menu = useMenuStore((state) => state.menuOpen)
    const forecast = useForecastStore((state) => state.forecast)
    const dateString = useForecastStore((state) => state.dateString)
    const dayOfWeek = useWeekDay(dateString)
    const time = useTimeFormat(dateString)
    const checkMenuToggle = () => {
        if(menu) setMenu()
    }
console.log(forecast);
  return (
    <div onClick={() => {checkMenuToggle()}} className='bg-slate-800 h-screen w-screen p-5 text-white'>
        <div className='w-full flex justify-between'>
            <button onClick={(e) => {e.stopPropagation(); setMenu()}} className='text-white center-elements h-max'>
                <IoMenu size={30} />
            </button>
            {!isEmpty(forecast) && 
            <div className='center-elements flex-col font-extralight cursor-default'>
                <h1 className='text-3xl '>{forecast.location.name}</h1>
                {dateString &&
                    <p className='text-sm mt-1'>{`${dayOfWeek}, ${time}`}</p>
                }
            </div>
            }
            <div>
                {!isEmpty(forecast) &&
                <AddLocationButton />
                }
            </div>
        </div>
        {!isEmpty(forecast) &&
        <div className='p-5 cursor-default'>
        <div className='flex flex-col my-20'>
            <div className='flex items-center'>
                <img className='h-10 w-max' src={forecast.current.condition.icon}></img>
                <h2 className='text-3xl font-extralight'>{forecast.current.condition.text}</h2>
            </div>
            <div className='flex items-baseline'>
            <h3 className='text-9xl font-extralight flex items-start'>{forecast.current.temp_c} <span className='text-4xl font-light'> °</span></h3>
            <p className='font-light'>Feels like {forecast.current.feelslike_c}°</p>
            </div>
        </div>
        <div className='flex flex-col w-full cursor-default'>
            <div className='flex w-full items-center gap-3'>
                <p className='font-extralight'>Details</p>
                <div className='w-full h-[1px] bg-slate-500'></div>
            </div>
            <WeatherDetails />
        </div>
        </div>
        }
    </div>
  )
}

export default Forecast
