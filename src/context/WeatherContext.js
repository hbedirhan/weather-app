import { createContext, useContext, useState } from 'react';
import SearchContext from './SearchContext';

const api_key = "07fd0fd52bd05a4cae2bc51b1bcaaadb";

const WeatherContext = createContext();
  
export const WeatherProvider = ({ children }) => {

    const [weather, setWeather] = useState();

    const { location } = useContext(SearchContext);
    
    
    const getWeather = async () => {
        try {
            let lat = await location.Latitude;
            let lon = await location.Longitude;
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${api_key}&units=metric`);
            const data = await response.json();
            setWeather(data);
        } catch (err) {
            console.log(err);
        }
    }

    const values = {
        getWeather,
        weather
    }

    return <WeatherContext.Provider value={values}>{children}</WeatherContext.Provider>
}

export default WeatherContext;