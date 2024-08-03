import { useEffect, useState } from 'react';
import districtData from '../../public/data';
import { SearchContext, } from '../context';
import { useSearchLocation } from '../Hooks';
import useLocalStorage from '../Hooks/useLocalstorage';

const SearchProvider = ({ children }) => {
    const [filteredData, setFilteredData] = useState([]);
    const { searchText, handleSearchTextChange, setSearchText, matchingLocation } = useSearchLocation(); //from hook
    // declare state and save to local storage
    const [searchHistory, setSearchHistory] = useLocalStorage("recentSearchHistory", []);


    // recent search history
    const handleRecentSearch = (location) => {

        const newHistory = [location, ...searchHistory].slice(0, 4); // Keep only the last 10 searches
        setSearchHistory(newHistory);
        setSearchText('');
    };


    // sync the districtData by the searchText
    useEffect(() => {
        if (searchText) {
            const results = districtData.filter(item =>
                item.location.toLowerCase().includes(searchText.toLowerCase()));
            setFilteredData(results);
        }
        else {
            setFilteredData([])

        }
    }, [searchText]);






    return (
        <SearchContext.Provider value={{ searchText, handleRecentSearch, searchHistory, setSearchText, handleSearchTextChange, filteredData, matchingLocation, setFilteredData }}>
            {children}
        </SearchContext.Provider>
    )
}

export default SearchProvider;
