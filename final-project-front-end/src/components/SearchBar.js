import React from "react";
// import { SearchIcon } from "@heroicons/react/solid";

const SearchBar = () => {
  return (
    <div className="relative w-full pb-16">
      <input
        type="text"
        placeholder="ex. 2520 Benvenue Ave"
        className="w-full py-2 pl-3 pr-10 text-gray-700 placeholder-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none focus:border-purple-500 "
      />
      <div className="absolute inset-y-0 right-0 flex items-center pr-3">
        <button className="bg-yellow-300 hover:bg-yellow-500 -translate-y-8 p-3 rounded-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-search"
            viewBox="0 0 16 16"
          >
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
          </svg>

          {/* <div className="h-8 w-8 flex justify-center items-center rounded-full bg-yellow-500 -translate-y-8">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-search"
            viewBox="0 0 16 16"
          >
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
          </svg>
        </div> */}
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
