import './App.css'
import Navbar from "./components/Navbar.jsx";
import Search from "./components/Search.jsx";
import Filter from "./components/Filter.jsx";
import CountryTile from "./components/CountryTile.jsx";

function App() {

  return (
      <div className="container bg-gray-50 flex flex-col items-center min-h-screen">
        <Navbar/>
        <Search/>
        <Filter/>
        <CountryTile/>

      </div>

  )
}

export default App
