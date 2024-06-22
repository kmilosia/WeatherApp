import React, { useState } from 'react'
import { IoMenu } from 'react-icons/io5'
import { useMenuStore } from '../store/menuStore'
import { useForecastStore } from '../store/forecastStore'
import { isEmpty } from '../utils/isEmpty'
import useWeekDay from '../hooks/useWeekDay'
import useTimeFormat from '../hooks/useTimeFormat'
import AddLocationButton from '../components/AddLocationButton'
import { WiRaindrops,WiStrongWind,WiCloudy,WiBarometer,WiShowers,WiDaySunny } from "react-icons/wi";
import WeatherDetailContainer from '../components/WeatherDetailContainer';
import { useSettingsStore } from '../store/settingsStore'

const Forecast = () => {
    const {menuOpen, toggleMenu} = useMenuStore()
    const { units } = useSettingsStore()
    const forecast = useForecastStore((state) => state.forecast)
    const dateString = useForecastStore((state) => state.dateString)
    const dayOfWeek = useWeekDay(dateString)
    const time = useTimeFormat(dateString)
    const checkMenuToggle = () => {
        if(menuOpen) toggleMenu()
    }

  return (
    <div onClick={() => {checkMenuToggle()}} className='bg-slate-800 h-screen w-screen p-8 text-white'>
        <div className='w-full flex justify-between'>
            <button onClick={(e) => {e.stopPropagation(); toggleMenu()}} className='text-white center-elements h-max'>
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
                {!isEmpty(forecast) && <AddLocationButton cityName={forecast?.location?.name}/>}
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
            <h3 className='text-9xl font-extralight flex items-start'>{units === 'Metric' ? forecast.current.temp_c : forecast.current.temp_f} <span className='text-4xl font-light'> °</span></h3>
            <p className='font-light'>Feels like {units === 'Metric' ? forecast.current.feelslike_c : forecast.current.feelslike_f}°</p>
            </div>
        </div>
        <div className='flex flex-col w-full cursor-default'>
            <div className='flex w-full items-center gap-3'>
                <p className='font-extralight'>Details</p>
                <div className='w-full h-[1px] bg-slate-500'></div>
            </div>
            <div className="grid grid-cols-3 gap-4 my-3">
                <WeatherDetailContainer icon={WiBarometer} label="Pressure" value={`${units === 'Metric' ? forecast.current.pressure_mb : forecast.current.pressure_in} ${units === 'Metric' ? ' mb' : ' in'}`} />
                <WeatherDetailContainer icon={WiCloudy} label="Cloud" value={`${forecast.current.cloud}%`} />
                <WeatherDetailContainer icon={WiDaySunny} label="UV Index" value={forecast.current.uv} />
                <WeatherDetailContainer icon={WiRaindrops} label="Humidity" value={`${forecast.current.humidity}%`} />
                <WeatherDetailContainer icon={WiShowers} label="Precipitation" value={`${units === 'Metric' ? forecast.current.precip_mm : forecast.current.precip_in}${units === 'Metric' ? ' mm' : ' in'}`} />
                <WeatherDetailContainer icon={WiStrongWind} label="Wind" value={`${units === 'Metric' ? forecast.current.wind_kph : forecast.current.wind_mph}${units === 'Metric' ? ' km/h' : ' mi/h'}`} />
            </div>
        </div>
        </div>
        }
    </div>
  )
}

export default Forecast
