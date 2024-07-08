import { useEffect, useState } from 'react';
import districtData from '../../public/data';
import { SearchContext, } from '../context';
import { useSearchLocation } from '../Hooks';

const SearchProvider = ({ children }) => {
    const [filteredData, setFilteredData] = useState([]);
    const { searchText, handleSearchTextChange } = useSearchLocation(); //from hook


    useEffect(() => {
        if (searchText) {
            const results = districtData.filter(item =>
                item.location.toLowerCase().includes(searchText.toLowerCase()));
            setFilteredData(results);
        } else {
            setFilteredData([])
        }
    }, [searchText]);





    return (
        <SearchContext.Provider value={{ searchText, handleSearchTextChange, filteredData }}>
            {children}
        </SearchContext.Provider>
    )
}

export default SearchProvider;
