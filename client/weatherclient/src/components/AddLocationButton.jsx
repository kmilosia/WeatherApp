import React from 'react';
import { HiPlus } from "react-icons/hi";
import useLocationStore from '../store/locationStore';
import { useForecastStore } from '../store/forecastStore';

const AddLocationButton = () => {
  const { addLocation, locations } = useLocationStore();
  const forecast = useForecastStore((state) => state.forecast);
  
  const handleAddLocation = () => {
    const cityName = forecast.location.name;

    if (!locations.includes(cityName)) {
      addLocation(cityName);
    }
  };

  return (
    <button onClick={handleAddLocation}>
      <HiPlus size={30} />
    </button>
  );
}

export default AddLocationButton;
