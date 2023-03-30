import { useContext } from 'react';
import SearchContext from '../context/SearchContext';


function Content() {

    const { weather } = useContext(SearchContext);
    
    if (!weather) {
        return
    }
    return (
        <>
            <div className='weather'>
                <div className='top'>
                    <div>
                        <p className='city'>{weather?.location.name}</p>
                        <p className='weather-description'>{weather?.current.condition.text}</p>
                    </div>
                    <img className='weather-icon' src={`${weather?.current.condition.icon}`} alt="" />
                </div>
                <div className='bottom'>
                    <p className='temperature'>{Math.round(weather?.current.temp_c)}°C</p>
                <div className='details'>
                    <div className='parameter-row'>
                        <span className='parameter-label'>Details</span>
                    </div>
                    <div className='parameter-row'>
                        <span className='parameter-label'>Feels Like</span>
                        <span className='parameter-value'>{Math.round(weather?.current.feelslike_c)}°C</span>
                    </div>
                    <div className='parameter-row'>
                        <span className='parameter-label'>Wind</span>
                        <span className='parameter-value'>{weather?.current.wind_mph} m/s</span>
                    </div>
                    <div className='parameter-row'>
                        <span className='parameter-label'>Humidity</span>
                        <span className='parameter-value'>{weather?.current.humidity}%</span>
                    </div>
                    <div className='parameter-row'>
                        <span className='parameter-label'>Pressure</span>
                        <span className='parameter-value'>{weather?.current.pressure_mb} hPa</span>
                    </div>
                </div>
                </div>
            </div>
    </>
    )
}

export default Content