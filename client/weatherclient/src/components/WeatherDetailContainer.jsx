import React from 'react'

const WeatherDetailContainer = ({ icon: Icon, label, value }) => {
  return (
    <div className='center-elements flex-col bg-white bg-opacity-15 rounded-md p-10'>
        <Icon size={70} />
        <p className='font-light'>{label}</p>
        <p className='font-medium text-lg'>{value}</p>
    </div>
  )
}

export default WeatherDetailContainer
