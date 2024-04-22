import React, { useState } from "react";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faSearch } from '@fortawesome/free-solid-svg-icons';

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleChange = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <div className="flex items-center bg-white rounded-full p-2 shadow-md">
      {/* <FontAwesomeIcon  className="text-gray-500 mr-2" /> */}
      <input
        type="text"
        placeholder="Search..."
        value={searchQuery}
        onChange={handleChange}
        className="flex-1 bg-transparent focus:outline-none"
      />
    </div>
  );
};

export default SearchBar;
