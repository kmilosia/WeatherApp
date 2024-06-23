import React, { useEffect, useState } from 'react'
import ToggleSwitch from '../ToggleSwitch';
import { useSettingsStore } from '../../store/settingsStore';

const LocationPermissionSetting = () => {
    const { changeLocationPermission, locationPermission} = useSettingsStore()
    const [isChecked, setIsChecked] = useState(locationPermission === true)
    const [text, setText] = useState(locationPermission ? 'Allowed' : 'Not allowed');
    const togglePermission = () => {
        const newPermission = !locationPermission
        changeLocationPermission(newPermission)
        setIsChecked(!isChecked)
    }
    useEffect(() => {
        setText(isChecked ? 'Allowed' : 'Not allowed')
      }, [isChecked])
  return (
    <div className='flex justify-between items-center border-b border-slate-800 p-6'>
        <p className='text-lg font-light cursor-default'>Allow current location</p>
        <ToggleSwitch text={text} action={togglePermission} isChecked={isChecked}/>
    </div>
  )
}

export default LocationPermissionSetting
