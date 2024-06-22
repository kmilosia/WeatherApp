import React, { useState } from 'react'
import { IoMenu } from 'react-icons/io5'
import { useMenuStore } from '../store/menuStore'

const Forecast = () => {
    const setMenu = useMenuStore((state) => state.toggleMenu)
    const menu = useMenuStore((state) => state.menuOpen)
    const checkMenuToggle = () => {
        if(menu)setMenu()
    }
  return (
    <div onClick={() => {checkMenuToggle()}} className='bg-slate-800 h-screen w-screen p-5'>
        <div className='w-full flex'>
            <button onClick={() => setMenu()} className='text-white center-elements'>
                <IoMenu size={30} />
            </button>
        </div>
    </div>
  )
}

export default Forecast
