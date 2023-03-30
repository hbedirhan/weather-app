import Location from './Location'
import "./style/style.css"
import {SearchProvider} from "../context/SearchContext";
import Search from "./Search";
import Content from './Content';

function Index() {


  return (
    <SearchProvider>
      <Search/>
      <Location/>
      <Content/>
    </SearchProvider>
  )
}

export default Index