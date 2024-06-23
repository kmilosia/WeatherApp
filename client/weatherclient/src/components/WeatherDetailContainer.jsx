import React from 'react'

const WeatherDetailContainer = ({ icon: Icon, label, value }) => {
  return (
    <div className='center-elements flex-col bg-black/20 rounded-md p-10'>
        <Icon size={70} />
        <p className='font-medium'>{label}</p>
        <p className='font-semibold text-2xl'>{value}</p>
    </div>
  )
}

export default WeatherDetailContainer
