import React, { useEffect, useState } from 'react'
import { useSettingsStore } from '../../store/settingsStore'
import ToggleSwitch from '../ToggleSwitch'

const UnitsSystemSetting = () => {
    const { changeUnits, units} = useSettingsStore()
    const [isChecked, setIsChecked] = useState(units === 'Imperial')
    const [text, setText] = useState(units === 'Imperial' ? 'Imperial system is on' : 'Metric system is on');
    const toggleUnits = () => {
        const newUnits = units === 'Metric' ? 'Imperial' : 'Metric'
        changeUnits(newUnits)
        setIsChecked(!isChecked)
    }
    useEffect(() => {
        setText(isChecked ? 'Imperial system is on' : 'Metric system is on')
      }, [isChecked])
  return (
    <div className='flex justify-between items-center border-b border-slate-800 p-6'>
        <p className='text-lg font-light cursor-default'>Change units system</p>
        <ToggleSwitch text={text} action={toggleUnits} isChecked={isChecked}/>
    </div>
  )
}

export default UnitsSystemSetting
