import React from 'react'
import { useSettingsStore } from '../store/settingsStore'
import { IoClose } from 'react-icons/io5'
import ViewButton from '../components/ViewButton'
import UnitsSystemSetting from '../components/settings/UnitsSystemSetting'
import LocationPermissionSetting from '../components/settings/LocationPermissionSetting'

const Settings = () => {
    const {toggleSettings} = useSettingsStore()
  return (
    <div className='absolute top-0 left-0 w-full h-full bg-slate-950 flex flex-col text-white p-8'>
        <div className='flex justify-between items-start mb-8'>
            <h1 className='text-4xl font-semibold'>Settings</h1>
            <ViewButton icon={IoClose} action={toggleSettings} />
        </div>
        <div className='border border-slate-800 rounded-md'>
        <UnitsSystemSetting />
        <LocationPermissionSetting />
        </div>
    </div>
  )
}

export default Settings
