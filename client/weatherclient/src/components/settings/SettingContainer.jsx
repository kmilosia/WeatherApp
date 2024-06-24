import React from 'react'
import ToggleSwitch from '../ToggleSwitch'

const SettingContainer = ({title, text, action, isChecked}) => {
  return (
    <div className='flex justify-between items-center border-b border-slate-800 p-5 lg:p-6'>
        <p className='text-sm lg:text-lg font-light cursor-default'>{title}</p>
        <ToggleSwitch text={text} action={action} isChecked={isChecked}/>
    </div>
  )
}

export default SettingContainer
