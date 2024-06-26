import React from 'react'
import { useSettingsStore } from '../store/settingsStore'
import UnitsSystemSetting from '../components/settings/UnitsSystemSetting'
import ScrollbarSettings from '../components/settings/ScrollbarSettings'
import ModalScreenHeader from '../components/ModalScreenHeader'

const Settings = () => {
    const {toggleSettings} = useSettingsStore()
  return (
    <div className='modal-screen'>
        <ModalScreenHeader testID="settings-close-btn" title="Settings" action={toggleSettings}/>
        <div className='border border-slate-800 rounded-md'>
          <UnitsSystemSetting />
          <ScrollbarSettings />
        </div>
    </div>
  )
}

export default Settings
