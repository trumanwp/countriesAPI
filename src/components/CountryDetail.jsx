import { IoIosArrowRoundBack } from "react-icons/io";

export default function CountryDetail({ country, onBack }) {

    const currencyNames = country.currencies
        ? Object.values(country.currencies).map(c => c.name).join(", ")
        : "N/A";
    // Convert languages object to string
    const languageNames = country.languages
        ? Object.values(country.languages).join(", ")
        : "N/A";


    return (
        <div className="p-8 mt-24 w-full md:w-2/3 lg:w-1/2 font-nunito">

            <button onClick={onBack} className="mb-4 px-4 py-2 bg-white dark:bg-[#2b3743] dark:text-white shadow rounded flex flex-row items-center gap-2">
                <IoIosArrowRoundBack/>
                <span>Back</span>
            </button>

            <img src={country.flags.svg} alt={country.name.common} className="w-full mb-4 mt-12" />

            <div className="dark:text-white">
                <h2 className="text-2xl font-bold mb-2 mt-8">{country.name.common}</h2>

                <p><strong>Population:</strong> {country.population.toLocaleString()}</p>
                <p><strong>Capital:</strong> {country.capital?.[0]}</p>
                <p><strong>Region:</strong> {country.region}</p>
                <p><strong>Sub Region:</strong> {country.subregion}</p>
                <p><strong>Currency:</strong> {currencyNames}</p>
                <p><strong>Languages:</strong> {languageNames}</p>
            </div>

            {/* Add more details as needed */}
        </div>
    );
}