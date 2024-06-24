import React, { useEffect, useState } from 'react'
import { useSettingsStore } from '../../store/settingsStore'
import SettingContainer from './SettingContainer'

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
    <SettingContainer text={text} action={toggleScrollbarVisibility} isChecked={isChecked} title="Change scrollbar visibility" />
  )
}

export default ScrollbarSettings
