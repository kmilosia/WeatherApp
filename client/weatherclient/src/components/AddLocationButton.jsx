import React from 'react';
import { HiPlus, HiMinus } from "react-icons/hi";
import useLocationStore from '../store/locationStore';
import { useForecastStore } from '../store/forecastStore';
import { checkCityExists } from '../utils/storage';
import usePopupStore from '../store/popupStore';

const AddLocationButton = () => {
  const addPopup = usePopupStore((state) => state.addPopup)
  const { addLocation, removeLocation } = useLocationStore()
  const forecast = useForecastStore((state) => state.forecast)
  const exists = checkCityExists(forecast.location.name)

  const handleLocation = () => {
    if (!exists) {
      addLocation(forecast.location.name)
      addPopup("Location has been added to your list!")
    }else{
      removeLocation(forecast.location.name)
      addPopup("Location has been removed from your list!")
    }
  }

  return (
    <button onClick={handleLocation}>
      {!exists ? <HiPlus className='icon-size' /> : <HiMinus className='icon-size'/>}
    </button>
    
  );
}

export default AddLocationButton;
