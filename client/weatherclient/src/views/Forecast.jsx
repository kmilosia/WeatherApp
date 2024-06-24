import React from 'react';
import { IoMenu } from 'react-icons/io5';
import { useMenuStore } from '../store/menuStore';
import { useForecastStore } from '../store/forecastStore';
import { isEmpty } from '../utils/isEmpty';
import useWeekDay from '../hooks/useWeekDay';
import useTimeFormat from '../hooks/useTimeFormat';
import AddLocationButton from '../components/AddLocationButton';
import { WiRaindrops, WiStrongWind, WiCloudy, WiBarometer, WiShowers, WiDaySunny } from "react-icons/wi";
import WeatherDetailContainer from '../components/WeatherDetailContainer';
import { useSettingsStore } from '../store/settingsStore';
import Footer from '../components/Footer';
import WeatherDetails from '../components/WeatherDetails';

const Forecast = () => {
    const { menuOpen, toggleMenu } = useMenuStore()
    const { units,scrollbarVisibility } = useSettingsStore()
    const {dateString,forecast,backgroundURL,backgroundText} = useForecastStore()
    const dayOfWeek = useWeekDay(dateString)
    const time = useTimeFormat(dateString)
    const checkMenuToggle = () => {
        if (menuOpen) toggleMenu()
    }

    return (
        <div onClick={checkMenuToggle} className={`h-screen w-screen bg-black/50 bg-cover bg-center bg-no-repeat bg-blend-overlay p-6 lg:p-8 text-white overflow-auto ${scrollbarVisibility ? 'scrollbar-default' : 'scrollbar-none'}`} style={{ backgroundImage: `url(${backgroundURL})`}}>
            <div className='w-full flex justify-between'>
                <button onClick={(e) => { e.stopPropagation(); toggleMenu() }} className='text-white center-elements h-max'>
                    <IoMenu className='icon-size' />
                </button>
                {!isEmpty(forecast) &&
                    <div className='center-elements flex-col font-extralight cursor-default mt-2'>
                        <h1 className='text-3xl '>{forecast.location.name}</h1>
                        {dateString && <p className='text-sm mt-1'>{`${dayOfWeek}, ${time}`}</p>}
                    </div>
                }
                <div>
                    {!isEmpty(forecast) && <AddLocationButton cityName={forecast?.location?.name} />}
                </div>
            </div>
            {!isEmpty(forecast) &&
                <div className='lg:p-8 cursor-default items-center flex flex-col'>
                    <div className='flex-col my-14 lg:my-20 center-elements'>
                        <div className='flex items-center gap-1'>
                            <img className='h-8 lg:h-10 w-max' src={forecast.current.condition.icon} alt="Weather icon"></img>
                            <h2 className='text-2xl lg:text-3xl font-extralight'>{forecast.current.condition.text}</h2>
                        </div>
                        <h3 className='text-8xl lg:text-9xl font-extralight flex items-start'>{units === 'Metric' ? forecast.current.temp_c : forecast.current.temp_f} <span className='text-4xl font-light'> °</span></h3>
                        <p className='font-light mt-2'>Feels like {units === 'Metric' ? forecast.current.feelslike_c : forecast.current.feelslike_f}°</p>
                    </div>
                    <div className='flex flex-col cursor-default w-full lg:w-2/3'>
                        <div className='flex w-full items-center gap-3'>
                            <p className='font-extralight'>Details</p>
                            <div className='w-full h-[1px] bg-white/30'></div>
                        </div>
                        <WeatherDetails />
                    </div>
                </div>
            }
            <Footer backgroundText={backgroundText} />
        </div>
    );
};

export default Forecast;
