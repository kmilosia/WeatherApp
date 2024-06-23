import React, { useEffect } from 'react'
import { useMenuStore } from '../store/menuStore';
import Menu from '../views/Menu';
import Forecast from '../views/Forecast';
import LocationSearch from '../views/LocationSearch';
import { useSearchStore } from '../store/searchStore';
import useLocationStore from '../store/locationStore';
import useRetrieveForecast from '../hooks/useRetrieveForecast';
import { useForecastStore } from '../store/forecastStore';
import { getLastLocationFromLocalStorage } from '../utils/storage';
import { useSettingsStore } from '../store/settingsStore';
import Settings from '../views/Settings';
import useGeolocation from '../hooks/useGeolocation';

const Home = () => {
    const { setForecast } = useForecastStore()
    const menu = useMenuStore((state) => state.menuOpen)
    const searchOpen = useSearchStore((state) => state.searchOpen)
    const settingsOpen = useSettingsStore((state) => state.settingsOpen)
    const {defaultLocation, lastLocation, initializeLocations, currentLocation} = useLocationStore()
    const { fetchForecastByCity,fetchForecastByCoords } = useRetrieveForecast()
    const { requestLocation } = useGeolocation()
    useEffect(() => {
        requestLocation()
        initializeLocations()
        if(defaultLocation){
            fetchForecastByCity(defaultLocation, setForecast)
        }else if(!defaultLocation && currentLocation){
            fetchForecastByCoords(currentLocation, setForecast)
        }else if(!defaultLocation && !currentLocation && lastLocation){
            fetchForecastByCity(lastLocation, setForecast)
        }else{
            const location = getLastLocationFromLocalStorage()
            if(location){
                fetchForecastByCity(location, setForecast)
            }
        }
    },[])
    return (
    <div className="relative h-screen overflow-hidden">
        <div className={`absolute top-0 left-0 h-full w-3/4 transform transition-transform duration-300 ${menu ? 'translate-x-0' : '-translate-x-full'}`}>
            <Menu />
        </div>
        <div className={`h-full w-full transition-transform duration-300 ${menu ? 'translate-x-3/4' : ''}`}>
            <Forecast />
        </div>
        {searchOpen && <LocationSearch />}
        {settingsOpen && <Settings />}
        
    </div>
    )

}

export default Home
