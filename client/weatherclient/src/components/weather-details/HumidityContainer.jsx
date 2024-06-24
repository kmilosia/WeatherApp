import React, { useEffect, useState } from 'react'
import { WiRaindrops } from 'react-icons/wi'
import { useForecastStore } from '../../store/forecastStore'
import { useSettingsStore } from '../../store/settingsStore'
import UnitsDegreeSpan from '../UnitsDegreesSpan'
import DetailHeader from './DetailHeader'

const HumidityContainer = () => {
    const {forecast} = useForecastStore()
    const {units} = useSettingsStore()
    const [humidityInfo, setHumidityInfo] = useState('')
    useEffect(() => {
        const value = forecast.current.dewpoint_f
        if(value < 60){
            setHumidityInfo("It feels pleasant outside")
        }else if(value >= 60 && value <= 65){
            setHumidityInfo("It can feel a bit sticky outside")
        }else if(value > 65 && value <= 70){
            setHumidityInfo("It feels very humid outside")
        }else{
            setHumidityInfo("It's tropical conditions outside")
        }
    },[forecast])
  return (
    <div className='detail-container'>
        <DetailHeader title="Humidity" icon={WiRaindrops} />
         <div className='flex text-5xl my-4 items-center'>
            <p className='mx-2'>{forecast.current.humidity}%</p>
        </div>
        {humidityInfo && <p className='mt-auto'>The dew point is {units === 'metric' ? forecast.current.dewpoint_c : forecast.current.dewpoint_f}°. {humidityInfo}</p>}
    </div>
  )
}

export default HumidityContainer
