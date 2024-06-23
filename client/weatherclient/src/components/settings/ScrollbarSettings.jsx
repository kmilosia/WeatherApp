import React, { useEffect, useState } from 'react'
import { useSettingsStore } from '../../store/settingsStore'
import ToggleSwitch from '../ToggleSwitch'

const ScrollbarSettings = () => {
    const { scrollbarVisibility,toggleScrollbar} = useSettingsStore()
    const [isChecked, setIsChecked] = useState(scrollbarVisibility)
    const [text, setText] = useState(scrollbarVisibility ? 'Visible' : 'Hidden');
    const toggleScrollbarVisibility = () => {
        toggleScrollbar(!scrollbarVisibility)
        setIsChecked(!isChecked)
    }
    useEffect(() => {
        setText(isChecked ? 'Visible' : 'Hidden')
      }, [isChecked])
  return (
    <div className='flex justify-between items-center border-b border-slate-800 p-6'>
        <p className='text-lg font-light cursor-default'>Change scrollbar visibility</p>
        <ToggleSwitch text={text} action={toggleScrollbarVisibility} isChecked={isChecked}/>
    </div>
  )
}

export default ScrollbarSettings
