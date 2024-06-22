import React from 'react'
import { useSettingsStore } from '../store/settingsStore'

const UnitsDegreesSpan = () => {
    const {units} = useSettingsStore()
  return (
    <span className='ml-1'>{units === 'Metric' ? ' °C' : '°F' }</span>
  )
}

export default UnitsDegreesSpan
