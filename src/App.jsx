import './App.css'
import Navbar from "./components/Navbar.jsx";
import Search from "./components/Search.jsx";
import Filter from "./components/Filter.jsx";
import CountryTile from "./components/CountryTile.jsx";
import CountryList from "./components/CountryList.jsx";
import { useState, useEffect } from "react";


function App() {
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        if (isDarkMode) {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    }, [isDarkMode]);

    const toggleDarkMode = () => {
        setIsDarkMode((prev) => !prev);
    };

  return (
      <div className="container bg-gray-50 dark:bg-[#202d36] flex flex-col items-center min-h-screen min-w-full">
        <Navbar isDarkMode = {isDarkMode} toggleDarkMode = {toggleDarkMode}/>
        <CountryList/>

      </div>

  )
}

export default App
