export default function CountryTile({ onClick, flag, name, population, region, capital }){
    return(
        <div onClick={onClick} className="w-3/4 flex flex-col h-84 bg-white dark:bg-[#2b3743] dark:text-white rounded-xl shadow-lg font-nunito mt-8">
            <img
                src={flag}
                alt="Germany Flag"
                className="rounded-t-xl max-h-1/2"
            />

            <div className="font-nunito p-6">
                <h1 className="font-bold text-xl">{name}</h1>
                <p className="mt-2">
                    <span className="font-bold mr-1">
                        Population:
                    </span>
                    {population}
                </p>
                <p className="">
                    <span className="font-bold mr-1">
                        Region:
                    </span>
                    {region}
                </p>
                <p className="">
                    <span className="font-bold mr-1">
                        Capital:
                    </span>
                    {capital}
                </p>
            </div>

        </div>
    )
}