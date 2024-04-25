import React, { useState } from "react";

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSearch = () => {
    setIsLoading(true);

    // Dummy API endpoint
    const apiUrl = "https://jsonplaceholder.typicode.com/posts";

    // Make API call
    fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ query: searchQuery }),
    })
      .then((response) => response.json())
      .then((data) => {
        // Handle API response
        console.log("API response:", data);
        setIsLoading(false);
      })
      .catch((error) => {
        // Handle errors
        console.error("Error fetching data:", error);
        setIsLoading(false);
      });
  };

  const handleChange = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <div className="relative w-full pb-16">
      <input
        type="text"
        placeholder="ex. 2520 Benvenue Ave"
        className="w-full py-2 pl-3 pr-10 text-gray-700 placeholder-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none focus:border-purple-500"
        value={searchQuery}
        onChange={handleChange}
      />
      <div className="absolute inset-y-0 right-0 flex items-center pr-3">
        <button
          className={`bg-yellow-300 hover:bg-yellow-500 -translate-y-8 p-3 rounded-full ${
            isLoading && "opacity-50 pointer-events-none"
          }`}
          onClick={handleSearch}
          disabled={isLoading}
        >
          {isLoading ? (
            <svg
              className="animate-spin h-5 w-5 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647zm14-2.582A7.963 7.963 0 0120 12h-4a7.965 7.965 0 01-2.646 5.937l3 2.647zm-6-7.896V4a8.008 8.008 0 015.373 1.987l-3 2.646A3.963 3.963 0 0012 8c-2.206 0-4 1.794-4 4h4c0-1.102.447-2.098 1.17-2.82l3-2.646A7.973 7.973 0 0112 4z"
              ></path>
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-search"
              viewBox="0 0 16 16"
            >
              <path
                d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"
              />
            </svg>
          )}
        </button>
      </div>
    </div>
  );
};

export default SearchBar;


//last thing changed before commit, if broken comment out the API endpoint