import React from 'react'
import weatherLogo from '../assets/weather-logo.png'
import { Link } from 'react-router-dom'

const Root = () => {
  return (
    <div className={`flex items-center justify-center flex-col h-screen gradient-main`}>
      <img className='h-1/4 lg:h-1/3' src={weatherLogo}></img>
      <h1 className='text-5xl font-bold text-white logo-font cursor-default my-4 lg:my-2'>MyWeather</h1>
      <Link to='/home' className='bg-blue-400 text-2xl lg:text-lg text-white py-5 lg:py-3 px-11 lg:px-8 mt-2 rounded-full font-semibold hover:bg-blue-500'>Get Started</Link>
    </div>
  )
}

export default Root
