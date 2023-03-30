import axios from "axios";
import { useContext, useEffect, useState } from "react";
import SearchContext from "../context/SearchContext";

const api_key = "b351440175a44f878d0123720233003";

const Location = () => {

    const [locationWeather, setLocationWeather] = useState(null);

    const { weather } = useContext(SearchContext);

    useEffect(() => {
        if (!navigator.geolocation) {
            alert("Konum bilgisi alınamadı");
        }
        else {
            navigator.geolocation.getCurrentPosition(position => {
                let lat = position.coords.latitude;
                let lon = position.coords.longitude;
                axios(`https://api.weatherapi.com/v1/current.json?key=${api_key}&q=${lat},${lon}&aqi=no`)
                    .then(res => setLocationWeather(res.data))
            });
        }
    }, [navigator]);

    if (weather) {
        return
    }

    return (
        <>
            <div className='weather'>
                <div className='top'>
                    <div>
                        <p className='city'>{locationWeather?.location.name}/{locationWeather?.location.region}</p>
                        <p className='weather-description'>{locationWeather?.current.condition.text}</p>
                    </div>
                    <img className='weather-icon' src={`${locationWeather?.current.condition.icon}`} alt="" />
                </div>
                <div className='bottom'>
                    <p className='temperature'>{Math.round(locationWeather?.current.temp_c)}°C</p>
                    <div className='details'>
                        <div className='parameter-row'>
                            <span className='parameter-label'>Details</span>
                        </div>
                        <div className='parameter-row'>
                            <span className='parameter-label'>Feels Like</span>
                            <span className='parameter-value'>{Math.round(locationWeather?.current.feelslike_c)}°C</span>
                        </div>
                        <div className='parameter-row'>
                            <span className='parameter-label'>Wind</span>
                            <span className='parameter-value'>{locationWeather?.current.wind_mph} m/s</span>
                        </div>
                        <div className='parameter-row'>
                            <span className='parameter-label'>Humidity</span>
                            <span className='parameter-value'>{locationWeather?.current.humidity}%</span>
                        </div>
                        <div className='parameter-row'>
                            <span className='parameter-label'>Pressure</span>
                            <span className='parameter-value'>{locationWeather?.current.pressure_mb} hPa</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};

export default Location;