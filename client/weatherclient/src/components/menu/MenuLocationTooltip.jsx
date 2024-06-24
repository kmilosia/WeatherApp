import React from 'react'
import useLocationStore from '../../store/locationStore'

const MenuLocationTooltip = ({removeLocation, setDefaultLocation,setShowTooltip, isDefault, isCurrent}) => {
  const {clearDefaultLocation} = useLocationStore()
  const optionStyle = 'block w-full text-left px-4 py-2 hover:bg-slate-900'
  return (
    <div className="absolute right-10 lg:right-11 mt-0 w-60 bg-slate-950 rounded-md shadow-lg z-10">                   
        {!isDefault && <button onClick={() => {setDefaultLocation(); setShowTooltip(false)}} className={`${optionStyle} border-b-2 rounded-md border-slate-900`}>Set as default location</button>}                       
        {isDefault && <button onClick={clearDefaultLocation} className={`${optionStyle} border-b-2 rounded-md border-slate-900`}>Remove default location</button>}                       
        {!isCurrent && <button onClick={removeLocation} className={`${optionStyle}`}>Remove location</button>}                           
    </div>
  )
}

export default MenuLocationTooltip
