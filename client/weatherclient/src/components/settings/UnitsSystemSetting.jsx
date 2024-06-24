import React, { useEffect, useState } from 'react'
import { useSettingsStore } from '../../store/settingsStore'
import SettingContainer from './SettingContainer'

const UnitsSystemSetting = () => {
    const { changeUnits, units} = useSettingsStore()
    const [isChecked, setIsChecked] = useState(units === 'Imperial')
    const [text, setText] = useState(units === 'Imperial' ? 'Imperial is on' : 'Metric is on');
    const toggleUnits = () => {
        const newUnits = units === 'Metric' ? 'Imperial' : 'Metric'
        changeUnits(newUnits)
        setIsChecked(!isChecked)
    }
    useEffect(() => {
        setText(isChecked ? 'Imperial is on' : 'Metric is on')
      }, [isChecked])
  return (
    <SettingContainer text={text} action={toggleUnits} isChecked={isChecked} title="Change units system" />
  )
}

export default UnitsSystemSetting
