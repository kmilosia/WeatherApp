import React, { useState } from 'react'
import { IoMenu } from 'react-icons/io5'
import { HiPlus } from "react-icons/hi"
import { useMenuStore } from '../store/menuStore'
import { useForecastStore } from '../store/forecastStore'
import { isEmpty } from '../utils/isEmpty'
import useWeekDay from '../hooks/useWeekDay'
import useTimeFormat from '../hooks/useTimeFormat'

const Forecast = () => {
    const setMenu = useMenuStore((state) => state.toggleMenu)
    const menu = useMenuStore((state) => state.menuOpen)
    const forecast = useForecastStore((state) => state.forecast)
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
                {forecast.location.localtime &&
                 <p className='text-sm mt-1'>{`${useWeekDay(forecast.location.localtime)}, ${useTimeFormat(forecast.location.localtime)}`}</p>
                }
            </div>
            }
            <div>
                {!isEmpty(forecast) &&
                <button><HiPlus size={30} /></button>}
            </div>
        </div>
    </div>
  )
}

export default Forecast
