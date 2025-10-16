import { CiSearch } from "react-icons/ci";

export default function Search({value, onChange}) {


    return (
        <div className="w-7/8 bg-white dark:bg-[#2b3743] dark:text-white p-4 mt-32 flex flex-row rounded-xl shadow-md font-nunito items-center ">
            <CiSearch className="mr-2"/>
                <input
                    type="text"
                    placeholder="Search for a country..."
                    value={value}
                    onChange={onChange}
                    className="w-full outline-none placeholder-gray-400"
                />
        </div>
    )
}

// Branch Test 1