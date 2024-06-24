import React, { useEffect, useState } from 'react'
import DetailHeader from './DetailHeader'
import { WiStrongWind } from 'react-icons/wi'
import { useForecastStore } from '../../store/forecastStore'
import { useSettingsStore } from '../../store/settingsStore'

const WindContainer = () => {
    const {forecast} = useForecastStore()
    const {units} = useSettingsStore()
    const [windInfo, setWindInfo] = useState('')
    useEffect(() => {
        const value = forecast.current.wind_kph
        if(value <= 5){
            setWindInfo("Air is calm")
        }else if(value > 5 && value < 20){
            setWindInfo("Gentle breeze")
        }else if(value >= 20 && value <= 38){
            setWindInfo("Noticable wind movement")
        }else if(value > 38 && value <= 60){
            setWindInfo("Strong wind. Walking against wind is challenging")
        }else{
            setWindInfo("Very strong wind. There might be difficulty walking")
        }
    },[forecast])
  return (
    <div className='detail-container'>
        <DetailHeader title="Wind" icon={WiStrongWind} />
        <div className='flex text-5xl my-4 items-center'>
            <p className='mx-2'>{units === 'Metric' ? forecast.current.wind_kph : forecast.current.wind_mph}<span className='text-lg'>{units === 'Metric' ? ' km/h' : ' mi/h'}</span></p>
        </div>
        {windInfo && <p className='mt-2'>{windInfo}. Wind direction {forecast.current.wind_dir}</p>}
    </div>
  )
}

export default WindContainer
