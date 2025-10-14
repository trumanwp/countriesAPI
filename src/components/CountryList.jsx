import { useQuery } from "@tanstack/react-query";
import {useState} from "react";
import CountryTile from "./CountryTile.jsx";
import Search from "./Search.jsx";
import Filter from "./Filter.jsx";
import CountryDetail from "./CountryDetail.jsx";

function fetchCountries(searchTerm, region) {
    const baseUrl = "https://restcountries.com/v3.1";
    const fields = "fields=name,flags,population,region,capital,cca3,subregion,languages,currencies";
    let url = region
        ? `${baseUrl}/region/${region}?${fields}`
        : `${baseUrl}/all?${fields}`;
    return fetch(url)
        .then(res => res.json())
        .then(countries => {
            if (searchTerm) {
                return countries.filter(c =>
                    c.name.common.toLowerCase().includes(searchTerm.toLowerCase())
                );
            }
            return countries;
        });
}



export default function CountryList() {
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedRegion, setSelectedRegion] = useState("");
    const [selectedCountry, setSelectedCountry] = useState(null);

    const { data: countries = [], isLoading, error } = useQuery({
        queryKey: ["countries", searchTerm, selectedRegion],
        queryFn: () => fetchCountries(searchTerm, selectedRegion),
    });

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error loading countries</div>;

    const countryArray = Array.isArray(countries) ? countries : [];

    if (selectedCountry) {
        return (
            <CountryDetail
                country={selectedCountry}
                onBack={() => setSelectedCountry(null)}
            />
        );
    }

    return (
            <div className="w-full sm:w-2/3 md:w-1/3">
                <div className="flex flex-col items-center gap-4 mb-6">
                    <Search value={searchTerm} onChange={e => setSearchTerm(e.target.value)} />
                    <Filter selected = {selectedRegion} onSelect = {setSelectedRegion}/>
                </div>


                <div className="flex flex-wrap justify-center">
                    {countryArray.length === 0 ? (
                        <div>No countries found</div>
                    ) : (
                        countryArray.map(country => (
                            <CountryTile
                                onClick={() => setSelectedCountry(country)}
                                className="cursor-pointer"
                                key={country.cca3}
                                flag={country.flags.png}
                                name={country.name.common}
                                population={country.population.toLocaleString()}
                                region={country.region}
                                capital={country.capital?.[0] || "N/A"}
                                subregion={country.subregion}
                                lang={country.languages}
                                currency={country.currency}
                        />
                    )))}
                </div>
            </div>
    );
}