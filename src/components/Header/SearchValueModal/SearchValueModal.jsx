import { useContext } from 'react';
import { LocationContext, SearchContext } from '../../../context';
import getLocationByName from '../../../data/location-data';



const SearchValueModal = () => {
    const { setSelectedLocation } = useContext(LocationContext);
    const { filteredData } = useContext(SearchContext);

    const handleLocationFind = (location) => {
        const fetchedLocation = getLocationByName(location);
        setSelectedLocation({ ...fetchedLocation })
    }

    return (
        <div className="max-w-2xl py-4 bg-white rounded-md border-gray-500 absolute right-24 top-12 text-black shadow-lg ">
            <h3 className="text-lg font-bold px-4 underline">Location</h3>
            <ul className="space-y-2 mt-4 *:py-2 *:px-4 *:cursor-pointer">
                {
                    filteredData.map((data) => (
                        <li
                            key={data.longitude}
                            className="hover:bg-gray-200"
                            onClick={() => handleLocationFind(data.location)}>
                            {data.location}
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default SearchValueModal;
