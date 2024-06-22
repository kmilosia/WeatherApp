import React, { useEffect, useState } from 'react'
import { useMenuStore } from '../store/menuStore';
import Menu from '../components/Menu';
import Forecast from '../components/Forecast';

const Home = () => {
    const menu = useMenuStore((state) => state.menuOpen)
    return (
        <div className="relative h-screen overflow-hidden">
        <div className={`absolute top-0 left-0 h-full w-3/4 transform transition-transform duration-300 ${menu ? 'translate-x-0' : '-translate-x-full'}`}>
            <Menu />
        </div>
        <div className={`h-full w-full transition-transform duration-300 ${menu ? 'translate-x-3/4' : ''}`}>
            <Forecast />
        </div>
    </div>
    )

}

export default Home
