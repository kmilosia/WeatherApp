import React, { useEffect, useState } from 'react'
import DetailHeader from './DetailHeader'
import { WiDaySunny } from 'react-icons/wi'
import { useForecastStore } from '../../store/forecastStore'

const UVContainer = () => {
    const {forecast} = useForecastStore()
    const [uvinfo, setUvInfo] = useState('')
    const [uvColor, setUvColor] = useState('bg-white')
    useEffect(() => {
        const value = forecast.current.uv
        if(value <= 2){
            setUvInfo("UV is low. No protection is needed")
            setUvColor("bg-green-500")
        }else if(value > 2 && value <= 5){
            setUvInfo("UV is moderate. Little protection is required")
            setUvColor("bg-yellow-500")
        }else if(value > 5 && value <= 7){
            setUvInfo("UV is high. Protection is necessary")
            setUvColor("bg-orange-500")
        }else if(value > 7 && value <= 10){
            setUvInfo("UV is very high. Extra protection is required")
            setUvColor("bg-red-500")
        }else{
            setUvInfo("UV is extremely high. Stay inside if possible")
            setUvColor("bg-purple-500")
        }
    },[forecast])
  return (
    <div className='detail-container'>
        <DetailHeader title="UV Index" icon={WiDaySunny} />
         <div className='flex text-5xl my-4 items-baseline'>
            <p className='mx-2'>{forecast.current.uv}</p>
            <div className={`h-3 w-3 rounded-full ${uvColor}`}></div>
        </div>
        {uvinfo && <p className='mt-2'>{uvinfo}</p>}
    </div>
  )
}

export default UVContainer
