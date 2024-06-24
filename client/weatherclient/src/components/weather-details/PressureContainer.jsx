import React from 'react'
import { WiBarometer } from 'react-icons/wi'
import { useForecastStore } from '../../store/forecastStore'
import { useSettingsStore } from '../../store/settingsStore'
import { FaArrowDown,FaArrowUp  } from "react-icons/fa6";
import DetailHeader from './DetailHeader';

const PressureContainer = () => {
    const {forecast} = useForecastStore()
    const {units} = useSettingsStore()

  return (
    <div className='detail-container'>
        <DetailHeader title="Pressure" icon={WiBarometer} />
        <div className='flex text-5xl my-4 items-center'>
            <p className='mx-2'>{units === 'Metric' ? forecast.current.pressure_mb : forecast.current.pressure_in}<span className='text-lg'>{units === 'Metric' ? ' mb' : ' in'}</span></p>
            {forecast.current.pressure_mb >= 1013 ? <FaArrowUp className='text-3xl'/> : <FaArrowDown className='text-3xl'/>}
        </div>
        <p className='mx-2 mt-auto'>{forecast.current.pressure_mb >= 1013 ? 'Pressure is high at the moment' : 'Pressure is low at the moment'}</p>
    </div>
  )
}

export default PressureContainer
