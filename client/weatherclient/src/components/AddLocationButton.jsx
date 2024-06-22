import React from 'react'
import { HiPlus } from "react-icons/hi"
import useLocationStore from '../store/locationStore'
import { setCookie, checkCookie } from '../utils/cookies'
import { useForecastStore } from '../store/forecastStore'

const AddLocationButton = () => {
    const { addLocation } = useLocationStore();
    const forecast = useForecastStore((state) => state.forecast)
    const handleAddLocation = () => {
        const cityName = forecast.location.name
        
        if (!checkCookie(cityName)) {
            setCookie(cityName, cityName, 30)
            addLocation(cityName)
        }
    }

    return (
        <button onClick={handleAddLocation}>
            <HiPlus size={30} />
        </button>
    )
}

export default AddLocationButton;
