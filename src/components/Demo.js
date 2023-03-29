import {useContext, useEffect, useState} from "react";
import { useGeolocated } from "react-geolocated";
import WeatherContext from "../context/WeatherContext";


const api_key = "07fd0fd52bd05a4cae2bc51b1bcaaadb";


const Demo = () => {

    const [locationWeather, setLocationWeather] = useState(null);

    const { weather } = useContext(WeatherContext);

    const { coords, isGeolocationAvailable, isGeolocationEnabled } =
        useGeolocated({
            positionOptions: {
                enableHighAccuracy: false,
            },
            userDecisionTimeout: 5000,
        });

        useEffect(() => {
            try {
                if (coords) {                    
                    let lat = coords.latitude;
                    let lon = coords.longitude;
                    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${api_key}&units=metric`)
                        .then(res => res.json())
                        .then(data => setLocationWeather(data))
                }
            } catch (err) {
                console.log(err);
            }
        }, [coords]);

    if (weather) {
        return
    }

    return !isGeolocationAvailable ? (
        <div>Your browser does not support Geolocation</div>
    ) : !isGeolocationEnabled ? (
        <div>Geolocation is not enabled</div>
    ) : coords ? (
        <>
            <div className='weather'>
                <div className='top'>
                    <div>
                        <p className='city'>{locationWeather?.name}</p>
                        <p className='weather-description'>{locationWeather?.weather[0].description}</p>
                    </div>
                    <img className='weather-icon' src={`icons/${locationWeather?.weather[0].icon}.png`} alt="" />
                </div>
                <div className='bottom'>
                    <p className='temperature'>{Math.round(locationWeather?.main.temp)}°C</p>
                <div className='details'>
                    <div className='parameter-row'>
                        <span className='parameter-label top'>Details</span>
                    </div>
                    <div className='parameter-row'>
                        <span className='parameter-label'>Feels Like</span>
                        <span className='parameter-value'>{Math.round(locationWeather?.main.feels_like)}°C</span>
                    </div>
                    <div className='parameter-row'>
                        <span className='parameter-label'>Wind</span>
                        <span className='parameter-value'>{locationWeather?.wind.speed} m/s</span>
                    </div>
                    <div className='parameter-row'>
                        <span className='parameter-label'>Humidity</span>
                        <span className='parameter-value'>{locationWeather?.main.humidity}%</span>
                    </div>
                    <div className='parameter-row'>
                        <span className='parameter-label'>Pressure</span>
                        <span className='parameter-value'>{locationWeather?.main.pressure} hPa</span>
                    </div>
                </div>
                </div>
            </div>
    </>
    ) : (
        <div>Getting the location data&hellip; </div>
    );
};

export default Demo;