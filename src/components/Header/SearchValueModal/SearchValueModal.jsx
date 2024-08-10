import { useContext } from 'react';
import { LocationContext, SearchContext } from '../../../context';
import getLocationByName from '../../../data/location-data';



const SearchValueModal = () => {
    const { setSelectedLocation } = useContext(LocationContext);
    const { filteredData, searchText, setSearchText, handleRecentSearch } = useContext(SearchContext);

    const handleLocationFind = (location) => {
        const fetchedLocation = getLocationByName(location);
        setSelectedLocation({ ...fetchedLocation });
        handleRecentSearch(location);
        setSearchText("") //clear the search filed after finding the location
    }

    return (
        <div className="">
            <div className="flex justify-center items-start absolute md:top-[60px] top-[120px] md:left-[45%] right-[0%] md:w-[300px] w-[280px]">
                <div className="bg-white p-3 rounded-md shadow-lg  overflow-y-auto h-[300px] custom-scrollbar w-full">
                    <>
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
                    </>
                </div>
            </div>
        </div>

    )
}

export default SearchValueModal;
