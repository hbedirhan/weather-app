import { createContext, useState } from 'react';

const SearchContext = createContext();

export const SearchProvider = ({ children }) => {

  const [location, setLocation] = useState();

  const getLocation = async (search) => {
    try {
      const response = await fetch(`http://dataservice.accuweather.com/locations/v1/cities/search?apikey=ptBzYlokiEPnXjp9Lk1AUuxl7dwAhNRd&q=${search}`);
      const data = await response.json();
      setLocation(data[0].GeoPosition);
    } catch (err) {
      console.error(err);
    }
  };

  const values = {
    getLocation,
    location,
  };

  return (
    <SearchContext.Provider value={values}>
      {children}
    </SearchContext.Provider>
  );
};

export default SearchContext;
