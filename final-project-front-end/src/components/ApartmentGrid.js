import React, { useEffect, useState } from 'react';
import ApartmentCard from './ApartmentCard'; // Assuming your ApartmentCard component is imported here
import apartment from "../images/default_apartment_img.jpg"
import Enclave from "../images/berkeley_enclave.jpg";


function ApartmentGrid() {
  const [apartments, setApartments] = useState([]);

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

  return (
    <div className= "min-h-screen flex items-center justify-center bg-cover bg-center relative" style={{backgroundImage: `url(${Enclave})`}}>
      <div className="absolute inset-0 bg-gradient-to-t from-yellow-300 to-transparent z-0"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 relative z-10">
        <h1 className="text-5xl font-bold mb-8 py-16 text-white">Lets Start Reviewing and Browsing !</h1>
        <div className="grid grid-cols-3 gap-x-32 gap-y-32">
          {/* Iterate over apartments array and render ApartmentCard for each
          {apartments.map((apartment, index) => (
            <ApartmentCard key={index} {...apartment} />
          ))} */}
          <ApartmentCard picture={apartment}/>
          <ApartmentCard picture={apartment}/>
          <ApartmentCard picture={apartment}/>
          <ApartmentCard picture={apartment}/>
          <ApartmentCard picture={apartment}/>
          <ApartmentCard picture={apartment}/>

          
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
