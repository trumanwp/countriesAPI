import { useState } from "react";
import { FiChevronDown } from "react-icons/fi";

const regions = ["Africa", "Americas", "Asia", "Europe", "Oceania"];

export default function Filter() {

    const [open, setOpen] = useState(false);
    const [selected, setSelected] = useState("");

  return (
    <div className="relative w-64 mt-8 mr-20 font-nunito">
        <button
            className="w-full bg-white p-4 flex justify-between items-center shadow rounded"
            onClick={() => setOpen((prev) => !prev)}
            type="button"
        >
            <span>{selected || "Filter by Region"}</span>
            <FiChevronDown className={`transition-transform ${open ? "rotate-180" : ""}`} />
        </button>
        {open && (
            <ul className="absolute left-0 right-0 mt-2 bg-white shadow rounded z-10">
                {regions.map((region) => (
                    <li
                        key={region}
                        className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                        onClick={() => {
                            setSelected(region);
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