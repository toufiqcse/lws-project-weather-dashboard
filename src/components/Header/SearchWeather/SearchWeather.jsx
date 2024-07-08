import { useContext } from 'react';
import searchIcon from '../../../assets/search.svg';
import { LocationContext, SearchContext } from '../../../context';
import getLocationByName from '../../../data/location-data';
import SearchValueModal from '../SearchValueModal/SearchValueModal';


const SearchWeather = () => {
    const { setSelectedLocation } = useContext(LocationContext)  //get the search result by context for updater function
    const { searchText, handleSearchTextChange, filteredData } = useContext(SearchContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        const fetchedLocation = getLocationByName(searchText);   //pass the search text to the districtData JSON by getLocationByName()
        setSelectedLocation({ ...fetchedLocation })
    }

    // For debounce
    // const doSearch = useDebounce((searchText) => {
    //     const fetchedLocation = getLocationByName(searchText);   //pass the search text to the Data JSON by getLocationByName()
    //     setSelectedLocation({ ...fetchedLocation })
    // }, 1000)

    // const handleChange = (e) => {
    //     const value = e.target.value;
    //     doSearch(value)
    // }

    return (
        <form action="#" onSubmit={handleSubmit}>
            <div className="flex items-center space-x-2 py-2 px-3 group focus-within:bg-black/30 transition-all border-b border-white/50 focus-within:border-b-0 focus-within:rounded-md">
                <input
                    className="bg-transparent  placeholder:text-white text-white w-full text-xs md:text-base outline-none border-none"
                    type="search"
                    placeholder="Search Location"
                    required
                    value={searchText}
                    onChange={handleSearchTextChange}
                // for debouncing
                // onChange={handleChange}

                />
                <button type="submit">
                    <img src={searchIcon} alt="submit" />
                </button>
                {
                    filteredData.length > 0 && (
                        <SearchValueModal />
                    )
                }
            </div>
        </form>
    )
};

export default SearchWeather;
