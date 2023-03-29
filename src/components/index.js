import Demo from './Demo'
import "./style/style.css"
import {SearchProvider} from "../context/SearchContext";
import { WeatherProvider } from '../context/WeatherContext';
import Search from "./Search";
import Content from './Content';

function Index() {


  return (
    <SearchProvider>
      <WeatherProvider>
      <Search/>
      <Demo/>
      <Content/>
      </WeatherProvider>
    </SearchProvider>
  )
}

export default Index