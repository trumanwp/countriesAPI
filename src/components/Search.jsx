import { CiSearch } from "react-icons/ci";

export default function Search() {

    return (
        <div className="w-7/8 bg-white p-4 mt-32 flex flex-row rounded-xl shadow-md font-nunito items-center ">
            <CiSearch className="mr-2"/>
            <form action="">
                <input
                    type="text"
                    placeholder="Search for a country..."
                    className="w-full outline-none placeholder-gray-400"


                />
            </form>
        </div>
    )
}