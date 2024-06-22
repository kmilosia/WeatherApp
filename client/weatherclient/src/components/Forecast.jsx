import React, { useState } from 'react'
import { IoMenu } from 'react-icons/io5'
import { HiPlus } from "react-icons/hi"
import { useMenuStore } from '../store/menuStore'
import { useForecastStore } from '../store/forecastStore'
import { isEmpty } from '../utils/isEmpty'
import useWeekDay from '../hooks/useWeekDay'
import useTimeFormat from '../hooks/useTimeFormat'
import { WiRaindrops,WiStrongWind,WiCloudy,WiBarometer,WiShowers,WiDaySunny } from "react-icons/wi";


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
                <button><HiPlus size={30} /></button>}
            </div>
        </div>
        {!isEmpty(forecast) &&
        <div className='p-5'>
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
            <div className="grid grid-cols-3 gap-4 my-3">
                <div className='center-elements flex-col bg-slate-700 rounded-md p-3'>
                    <WiBarometer size={50} />
                    <p className='text-sm font-light'>Pressure</p>
                    <p>{forecast.current.pressure_mb} mb</p>
                </div>
                <div className='center-elements flex-col bg-slate-700 rounded-md p-3'>
                    <WiCloudy size={50} />
                    <p className='text-sm font-light'>Pressure</p>
                    <p>{forecast.current.cloud} %</p>
                </div>
                <div className='center-elements flex-col bg-slate-700 rounded-md p-3'>
                    <WiDaySunny size={50} />
                    <p className='text-sm font-light'>UV Index</p>
                    <p>{forecast.current.uv}</p>
                </div>
                <div className='center-elements flex-col bg-slate-700 rounded-md p-3'>
                    <WiRaindrops size={50} />
                    <p className='text-sm font-light'>Humidity</p>
                    <p>{forecast.current.humidity} %</p>
                </div>
                <div className='center-elements flex-col bg-slate-700 rounded-md p-3'>
                    <WiShowers size={50} />
                    <p className='text-sm font-light'>Precipation</p>
                    <p>{forecast.current.precip_mm} mm</p>
                </div>
                <div className='center-elements flex-col bg-slate-700 rounded-md p-3'>
                    <WiStrongWind size={50} />
                    <p className='text-sm font-light'>Wind</p>
                    <p>{forecast.current.wind_kph} km/h</p>
                </div>
            </div>
        </div>
        </div>
        }
    </div>
  )
}

export default Forecast
