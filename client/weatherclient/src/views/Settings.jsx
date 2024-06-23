import React from 'react'
import { useSettingsStore } from '../store/settingsStore'
import { IoClose } from 'react-icons/io5'
import ViewButton from '../components/ViewButton'
import UnitsSystemSetting from '../components/settings/UnitsSystemSetting'
import ScrollbarSettings from '../components/settings/ScrollbarSettings'

const Settings = () => {
    const {toggleSettings} = useSettingsStore()
  return (
    <div className='fixed top-0 left-0 w-full h-full bg-slate-950 flex flex-col text-white p-8 z-50'>
        <div className='flex justify-between items-start mb-8'>
            <h1 className='text-4xl font-semibold'>Settings</h1>
            <ViewButton icon={IoClose} action={toggleSettings} />
        </div>
        <div className='border border-slate-800 rounded-md'>
        <UnitsSystemSetting />
        <ScrollbarSettings />
        </div>
    </div>
  )
}

export default Settings
