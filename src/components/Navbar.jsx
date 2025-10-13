import { IoMoonOutline } from "react-icons/io5";

export default function Navbar(){
    return (
        <div className="fixed top-0 left-0 right-0 flex justify-between items-center py-8 px-4 bg-white shadow-md font-nunito">
            <h1 className="font-bold">Where in the world?</h1>
            <div className="flex flex-row items-center">
                <IoMoonOutline className="mr-2"/>
                <span>Dark Mode</span>
            </div>
        </div>
    )
}