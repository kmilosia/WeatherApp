import React, { useEffect } from 'react'
import { useMenuStore } from '../store/menuStore';
import Menu from '../components/Menu';
import Forecast from '../components/Forecast';
import LocationSearch from '../components/LocationSearch';
import { useSearchStore } from '../store/searchStore';
import useLocationStore from '../store/locationStore';

const Home = () => {
    const menu = useMenuStore((state) => state.menuOpen)
    const searchOpen = useSearchStore((state) => state.searchOpen)
    const initializeLocations = useLocationStore((state) => state.initializeLocations)
    useEffect(() => {
        initializeLocations()
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
    </div>
    )

}

export default Home
