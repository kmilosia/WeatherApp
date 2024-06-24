import React from 'react'

const WeatherDetailContainer = ({ icon: Icon, label, value }) => {
  return (
    <div className='backdrop-blur-lg center-elements flex-col bg-white/10 rounded-md p-5 lg:p-10'>
        <Icon className='text-6xl' />
        <p className='font-extralight mb-1'>{label}</p>
        <p className='font-semibold text-lg lg:text-2xl'>{value}</p>
    </div>
  )
}

export default WeatherDetailContainer
