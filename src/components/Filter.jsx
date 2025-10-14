import { useState } from "react";
import { FiChevronDown } from "react-icons/fi";

const regions = ["Africa", "Americas", "Asia", "Europe", "Oceania"];

export default function Filter({selected, onSelect}) {

    const [open, setOpen] = useState(false);


  return (
    <div className="w-64 mt-8  font-nunito ">
        <button
            className="w-full bg-white dark:bg-[#2b3743] dark:text-white p-4 flex justify-between items-center shadow rounded"
            onClick={() => setOpen((prev) => !prev)}
            type="button"
        >
            <span>{selected || "Filter by Region"}</span>
            <FiChevronDown className={`transition-transform ${open ? "rotate-180" : ""}`} />
        </button>
        {open && (
            <ul className=" left-0 right-0 mt-2 bg-white dark:bg-[#2b3743] dark:text-white shadow rounded z-10">
                {regions.map((region) => (
                    <li
                        key={region}
                        className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                        onClick={() => {
                            onSelect(region);
                            setOpen(false);
                        }}
                    >
                        {region}
                    </li>
                ))}
            </ul>
        )}
    </div>
  );
}