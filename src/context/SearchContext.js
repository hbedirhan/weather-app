import axios from 'axios';
import { createContext, useState } from 'react';

const SearchContext = createContext();

export const SearchProvider = ({ children }) => {

  const [weather, setWeather] = useState();

  const getWeather = async (search) => {
    try {
      const response = await axios(`https://api.weatherapi.com/v1/current.json?key=b351440175a44f878d0123720233003&q=${search}&aqi=no`);
      const data = await response.data;
      setWeather(data);
    } catch (err) {
      console.error(err);
    }
  };

  const values = {
    getWeather,
    weather,
  };

  return (
    <SearchContext.Provider value={values}>
      {children}
    </SearchContext.Provider>
  );
};

export default SearchContext;
