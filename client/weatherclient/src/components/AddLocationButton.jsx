import React from 'react';
import { HiPlus } from "react-icons/hi";
import useLocationStore from '../store/locationStore';
import { useForecastStore } from '../store/forecastStore';
import { checkCityExists } from '../utils/storage';

const AddLocationButton = () => {
  const { addLocation } = useLocationStore()
  const forecast = useForecastStore((state) => state.forecast)
  const exists = checkCityExists(forecast.location.name)

  const handleAddLocation = () => {
    if (!exists) {
      addLocation(forecast.location.name)
    }
  }
  return (
    exists ? null :
    <button onClick={handleAddLocation}>
      <HiPlus size={30} />
    </button>
  );
}

export default AddLocationButton;
