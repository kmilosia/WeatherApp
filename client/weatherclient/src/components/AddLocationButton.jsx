import React from 'react';
import { HiPlus, HiMinus } from "react-icons/hi";
import useLocationStore from '../store/locationStore';
import { useForecastStore } from '../store/forecastStore';
import { checkCityExists } from '../utils/storage';

const AddLocationButton = () => {
  const { addLocation,removeLocation } = useLocationStore()
  const forecast = useForecastStore((state) => state.forecast)
  const exists = checkCityExists(forecast.location.name)

  const handleLocation = () => {
    if (!exists) {
      addLocation(forecast.location.name)
    }else{
      removeLocation(forecast.location.name)
    }
  }

  return (
    <button onClick={handleLocation}>
      {!exists ? <HiPlus size={30} /> : <HiMinus size={30}/>}
    </button>
    
  );
}

export default AddLocationButton;
