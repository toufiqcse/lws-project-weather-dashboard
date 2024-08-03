import { useState } from "react";
import districtData from "../../public/data";
const useSearchLocation = () => {
  //   const { searchText, setSearchText } = useContext(SearchContext);
  const [searchText, setSearchText] = useState("");

  // compare search text to  the location server
  const matchingLocation = districtData.find(
    (item) => item.location.toLowerCase() === searchText.toLowerCase()
  );

  // handle input change
  function handleSearchTextChange(e) {
    const value = e.target.value;
    setSearchText(value);
  }

  return {
    searchText,
    handleSearchTextChange,
    setSearchText,
    matchingLocation,
  };
};

export default useSearchLocation;
