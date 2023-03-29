import React, { useEffect, useContext } from 'react';
import WeatherContext from '../context/WeatherContext';


function Content() {

    const { weather } = useContext(WeatherContext);
    
    if (!weather) {
        return
    }
    return (
        <>
            <div className='weather'>
                <div className='top'>
                    <div>
                        <p className='city'>{weather?.name}</p>
                        <p className='weather-description'>{weather?.weather[0].description}</p>
                    </div>
                    <img className='weather-icon' src={`icons/${weather?.weather[0].icon}.png`} alt="" />
                </div>
                <div className='bottom'>
                    <p className='temperature'>{Math.round(weather?.main.temp)}°C</p>
                <div className='details'>
                    <div className='parameter-row'>
                        <span className='parameter-label top'>Details</span>
                    </div>
                    <div className='parameter-row'>
                        <span className='parameter-label'>Feels Like</span>
                        <span className='parameter-value'>{Math.round(weather?.main.feels_like)}°C</span>
                    </div>
                    <div className='parameter-row'>
                        <span className='parameter-label'>Wind</span>
                        <span className='parameter-value'>{weather?.wind.speed} m/s</span>
                    </div>
                    <div className='parameter-row'>
                        <span className='parameter-label'>Humidity</span>
                        <span className='parameter-value'>{weather?.main.humidity}%</span>
                    </div>
                    <div className='parameter-row'>
                        <span className='parameter-label'>Pressure</span>
                        <span className='parameter-value'>{weather?.main.pressure} hPa</span>
                    </div>
                </div>
                </div>
            </div>
        </>
    )
}

export default Content