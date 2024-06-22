import React from 'react'

const WeatherDetailContainer = ({ icon: Icon, label, value }) => {
  return (
    <div className='center-elements flex-col bg-slate-700 rounded-md p-3'>
        <Icon size={50} />
        <p className='text-sm font-light'>{label}</p>
        <p>{value}</p>
    </div>
  )
}

export default WeatherDetailContainer
