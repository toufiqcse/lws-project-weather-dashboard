import { useState } from "react";

const useSearchLocation = () => {
  //   const { searchText, setSearchText } = useContext(SearchContext);
  const [searchText, setSearchText] = useState("");

  function handleSearchTextChange(e) {
    const value = e.target.value;
    setSearchText(value);
  }

  return { searchText, handleSearchTextChange };
};

export default useSearchLocation;
