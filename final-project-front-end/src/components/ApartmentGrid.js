import React, { useEffect, useState } from "react";
import ApartmentCard from "./ApartmentCard"; // Assuming your ApartmentCard component is imported here
import apartment from "../images/default_apartment_img.jpg";
import Enclave from "../images/berkeley_enclave.jpg";
import SearchBar from "./SearchBar";

function ApartmentGrid() {
  const [apartments, setApartments] = useState([]);
  const [history, setHistory] = useState("");
  console.log(history)

  //   useEffect(() => {
  //     // Fetch apartments from backend when the component mounts
  //     fetchApartments();
  //   }, []);

  //   const fetchApartments = async () => {
  //     try {
  //       // Fetch apartments data from the backend
  //       const response = await fetch('YOUR_BACKEND_ENDPOINT');
  //       if (!response.ok) {
  //         throw new Error('Failed to fetch data');
  //       }
  //       const data = await response.json();
  //       setApartments(data); // Update state with fetched apartments data
  //     } catch (error) {
  //       console.error('Error fetching apartments:', error);
  //     }
  //   };
  
  const handleClick = async () => {
    const apiUrl = "http://127.0.0.1:8000/members/"
    fetch(apiUrl, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        // Handle API response
        setHistory(data.output)
        console.log("API response:", data);
      })
  }

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center relative"
      style={{ backgroundImage: `url(${Enclave})` }}
    >
      <div className="absolute inset-0 bg-gradient-to-t from-yellow-300 to-transparent z-0"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 relative z-10">
        <h1 className="text-5xl font-bold mb-8 py-16 text-white">
          Start Reviewing, Browsing, or Searching !
        </h1>
        <SearchBar />
        <div className="flex gap-5 mb-12">
          <button className="bg-white p-2 rounded-full font-semibold hover:scale-[1.05] duration-200" onClick={handleClick}> Search History</button>
          {history && <h1 className="bg-white p-2 rounded-full font-semibold">{ history}</h1>}
          </div>
        
        <div className="grid grid-cols-3 gap-x-32 gap-y-32">
          {/* Iterate over apartments array and render ApartmentCard for each
          {apartments.map((apartment, index) => (
            <ApartmentCard key={index} {...apartment} />
          ))} */}
          <ApartmentCard picture={apartment} />
          <ApartmentCard picture={apartment} />
          <ApartmentCard picture={apartment} />
          <ApartmentCard picture={apartment} />
          <ApartmentCard picture={apartment} />
          <ApartmentCard picture={apartment} />
        </div>
        <div className="mt-8 flex justify-center">
          <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
            Load More Apartments
          </button>
        </div>
      </div>
    </div>
  );
}

export default ApartmentGrid;
