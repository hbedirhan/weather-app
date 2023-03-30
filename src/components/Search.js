import { useState, useContext } from 'react'
import SearchContext from '../context/SearchContext';

function Search() {
    const { getWeather } = useContext(SearchContext);

    const [search, setSearch] = useState("Search City");

    const handleChange = (e) => {
        setSearch(e.target.value);
    }

    const clickOnButton = (e) => {
        e.preventDefault();
        getWeather(search);
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
