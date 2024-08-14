import { useContext } from 'react';
import searchIcon from '../../../assets/search.svg';
import { LocationContext, SearchContext } from '../../../context';
import SearchValueModal from '../SearchValueModal/SearchValueModal';

const SearchWeather = () => {
    const { setSelectedLocation } = useContext(LocationContext)  //get the search result by context for updater function
    const { searchText, setSearchText, handleSearchTextChange, filteredData, matchingLocation, handleRecentSearch } = useContext(SearchContext);

    const handleSubmit = (e, location) => {
        e.preventDefault();
        if (searchText && !matchingLocation) {
            alert('Search location is wrong')
        }
        // handleRecentSearch(location)
        setSearchText('')
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
        <form action="#" onSubmit={handleSubmit} className="">
            <div className=" flex items-center  space-x-2 py-2 px-2 outline-none   transition-all  dark:border-white/50 border-black/50   border-2 dark:border-gray-300 border-gray-800  rounded-xl ">
                <input
                    className=" bg-transparent  dark:placeholder:text-white dark:text-white text-black w-full text-xs md:text-base outline-none  "
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
