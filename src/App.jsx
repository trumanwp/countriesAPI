import './App.css'
import Navbar from "./components/Navbar.jsx";
import Search from "./components/Search.jsx";

function App() {

  return (
      <div className="container bg-gray-50 flex flex-col items-center min-h-screen">
        <Navbar/>
        <Search/>
      </div>

  )
}

export default App
