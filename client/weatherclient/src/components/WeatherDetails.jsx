import React from 'react'
import PressureContainer from './weather-details/PressureContainer'
import UVContainer from './weather-details/UVContainer'
import HumidityContainer from './weather-details/HumidityContainer'
import PrecipitationContainer from './weather-details/PrecipitationContainer'
import CloudsContainer from './weather-details/CloudsContainer'
import WindContainer from './weather-details/WindContainer'

const WeatherDetails = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 my-3">
        <PressureContainer />
        <UVContainer />
        <HumidityContainer />
        <PrecipitationContainer />
        <CloudsContainer />
        <WindContainer />
    </div>
  )
}

export default WeatherDetails
