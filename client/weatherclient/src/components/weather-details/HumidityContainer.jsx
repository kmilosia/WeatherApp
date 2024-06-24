import React, { useEffect, useState } from 'react'
import { WiRaindrops } from 'react-icons/wi'
import { useForecastStore } from '../../store/forecastStore'
import { useSettingsStore } from '../../store/settingsStore'
import DetailHeader from './DetailHeader'

const HumidityContainer = () => {
    const {forecast} = useForecastStore()
    const {units} = useSettingsStore()
    const [humidityInfo, setHumidityInfo] = useState('')
    useEffect(() => {
        const value = forecast.current.dewpoint_f
        if(value < 60){
            setHumidityInfo("Pleasant outside")
        }else if(value >= 60 && value <= 65){
            setHumidityInfo("Sticky outside")
        }else if(value > 65 && value <= 70){
            setHumidityInfo("Humid outside")
        }else{
            setHumidityInfo("Tropical outside")
        }
    },[forecast])
  return (
    <div className='detail-container'>
        <DetailHeader title="Humidity" icon={WiRaindrops} />
         <div className='flex text-5xl my-4 items-center'>
            <p className='mx-2'>{forecast.current.humidity}%</p>
        </div>
        {humidityInfo && <p className='mt-auto'>Dew point {units === 'metric' ? forecast.current.dewpoint_c : forecast.current.dewpoint_f}°. {humidityInfo}</p>}
    </div>
  )
}

export default HumidityContainer
