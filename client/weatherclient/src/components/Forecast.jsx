import React, { useState } from 'react'
import { IoMenu } from 'react-icons/io5'
import { useMenuStore } from '../store/menuStore'

const Forecast = () => {
    const [cityChosen, setCityChosen] = useState(false)
    const setMenu = useMenuStore((state) => state.toggleMenu)

  return (
    <div className='bg-slate-800 h-screen w-screen p-2'>
    <div className='w-full flex'>
        <button onClick={() => setMenu()} className=' text-white h-10 w-10 flex items-center justify-center'>
            <IoMenu size={30} />
        </button>
    </div>
    
    <h1>Hello</h1>
</div>
  )
}

export default Forecast
