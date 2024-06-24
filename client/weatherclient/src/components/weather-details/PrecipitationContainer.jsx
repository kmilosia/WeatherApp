import React from 'react'
import DetailHeader from './DetailHeader'
import { WiShowers } from 'react-icons/wi'
import { useSettingsStore } from '../../store/settingsStore'
import { useForecastStore } from '../../store/forecastStore'

const PrecipitationContainer = () => {
    const {forecast} = useForecastStore()
    const {units} = useSettingsStore()
  return (
    <div className='detail-container'>
        <DetailHeader title="Precipitation" icon={WiShowers} />
         <div className='flex text-5xl my-4 items-center'>
            <p className='mx-2'>{units === 'Metric' ? forecast.current.precip_mm : forecast.current.precip_in}<span className='text-lg'>{units === 'Metric' ? ' mm' : ' in'}</span></p>
        </div>
        <p className='mt-auto'>{forecast.current.precip_mm > 0.5 ? "Don't forget your umbrella!" : "It's dry outside"}</p>
    </div>
  )
}

export default PrecipitationContainer
