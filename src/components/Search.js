import { useState, useContext } from 'react'
import SearchContext from '../context/SearchContext';
import WeatherContext from '../context/WeatherContext';

function Search() {
    const { getLocation, location } = useContext(SearchContext);
    const { getWeather } = useContext(WeatherContext);

    const [search, setSearch] = useState("Search City");

    const handleChange = (e) => {
        setSearch(e.target.value);
    }

    const clickOnButton = (e) => {
        e.preventDefault();
        getLocation(search);
        if (location) {
            getWeather();
        }
    }


    return (
        <>
            <form className='form' onSubmit={clickOnButton}>
                <input className='input' type="text" onChange={handleChange} value={search} onFocus={() => setSearch("")} />
                <button className='btn' type="submit">Search</button>
            </form>
        </>
    )
}

export default Search;
