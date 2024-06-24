import React from 'react'

const Footer = ({backgroundText}) => {
  return (
    <footer className=' flex flex-col lg:flex-row lg:justify-between mt-auto text-xs lg:text-sm gap-1 lg:gap-0'>
        <div className='flex items-center'>
            <p className='inline cursor-default mr-1 text-white/50'>Forecast by </p>
            <a target='_blank' className='inline text-green-600/50 font-semibold hover:text-green-500/50' href="https://www.weatherapi.com/"> WeatherAPI.com</a>
        </div>
        <div className='flex items-center text-white/50 cursor-default'>
            <p>{backgroundText}</p>
        </div>
    </footer>
  )
}

export default Footer
