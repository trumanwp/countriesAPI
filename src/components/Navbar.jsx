import { IoMoonOutline } from "react-icons/io5";

export default function Navbar({isDarkMode, toggleDarkMode}) {
    return (
        <div className="fixed top-0 left-0 right-0 flex justify-between items-center py-8 px-4 bg-white dark:bg-[#2b3743] dark:text-white shadow-md font-nunito">
            <button
                onClick={() => window.location.reload()}>
                <h1 className="font-bold">Where in the world?</h1>
            </button>


            <button
                className="flex flex-row items-center"
                onClick={toggleDarkMode}

            >
                <IoMoonOutline className="mr-2"/>
                <span>{isDarkMode? "Light Mode" : "Dark Mode"}</span>
            </button>
        </div>
    )
}