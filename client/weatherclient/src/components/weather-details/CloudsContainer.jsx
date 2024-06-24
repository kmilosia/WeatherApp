import React, { useEffect, useState } from 'react'
import { useForecastStore } from '../../store/forecastStore'
import DetailHeader from './DetailHeader'
import { WiCloudy } from 'react-icons/wi'

const CloudsContainer = () => {
    const {forecast} = useForecastStore()
    const [cloudsInfo, setCloudsInfo] = useState('')
    useEffect(() => {
        const value = forecast.current.cloud
        if(value <= 10){
            setCloudsInfo("The sky is clear at the moment")
        }else if(value > 10 && value <= 30){
            setCloudsInfo("The sky is mostly clear at the moment")
        }else if(value > 30 && value <= 70){
            setCloudsInfo("The sky is partly cloudy at the moment")
        }else if(value > 70 && value <= 90){
            setCloudsInfo("The sky is mostly cloudy at the moment")
        }else{
            setCloudsInfo("The sky is cloudy at the moment")
        }
    },[forecast])
  return (
    <div className='detail-container'>
        <DetailHeader title="Clouds" icon={WiCloudy} />
        <div className='flex text-5xl my-4 items-center'>
            <p className='mx-2'>{forecast.current.cloud}%</p>
        </div>
        {cloudsInfo && <p className='mt-2'>{cloudsInfo}</p>}
    </div>
  )
}

export default CloudsContainer
