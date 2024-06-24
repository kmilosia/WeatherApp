import React from 'react'

const ToggleSwitch = ({text, isChecked, action}) => {
  return (
    <div className='flex items-center'>
        <span className="mr-2 text-xs lg:text-md font-medium text-slate-200 cursor-default text-end">{text}</span>
        <label className="inline-flex items-center cursor-pointer lg:mb-1">
            <input checked={isChecked} onChange={action} type="checkbox" value="" className="sr-only peer" />
            <div className="relative w-8 lg:w-12 h-4 lg:h-6 bg-slate-500 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border after:rounded-full after:h-3 lg:after:h-5 after:w-3 lg:after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
        </label>
    </div>
  )
}

export default ToggleSwitch
