import React from 'react'
import useLocationStore from '../../store/locationStore'

const MenuLocationTooltip = ({removeLocation, setDefaultLocation, isDefault}) => {
  const {clearDefaultLocation} = useLocationStore()
  const optionStyle = 'block w-full text-left px-4 py-2 hover:bg-slate-600'
  return (
    <div className="absolute right-10 mt-0 w-60 bg-slate-700 rounded-md shadow-lg z-10">                   
        {!isDefault && <button onClick={setDefaultLocation} className={`${optionStyle} border-b-2 border-slate-800`}>Set as default location</button>}                       
        {isDefault && <button onClick={clearDefaultLocation} className={`${optionStyle} border-b-2 border-slate-800`}>Remove default location</button>}                       
        <button onClick={removeLocation} className={`${optionStyle}`}>Remove location</button>                           
    </div>
  )
}

export default MenuLocationTooltip