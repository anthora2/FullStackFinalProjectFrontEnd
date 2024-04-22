

import React from 'react';
import Dropdown from "./Dropdown";
import Enclave from "../images/berkeley_enclave.jpg";

export default function SearchPage() {
  return (
    <div className="relative h-screen">
      <div
        className="absolute inset-0 z-0 blur-sm"
        style={{ backgroundImage: `url(${Enclave})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
      />
      <div className="flex flex-col items-center justify-center relative z-10 h-full">
        <div className="flex justify-between max-w-lg">
          <Dropdown label="Apartment Type" options={['Single', 'Double', 'Triple']} />
          <div className="w-10"></div>
          <Dropdown label="Minimum Price" options={['$400', '$500', '$600', '$700', '$800', '$900', '$1000', '$1100', '$1200', '$1300', '$1400', '$1500', '$1600']} />
          <div className="w-10"></div>
          <Dropdown label="Maximum Price" options={['$600', '$700', '$800', '$900', '$1000', '$1100', '$1200', '$1300', '$1400', '$1500', '$1600', '$1700', '$1800', '$1900', '$2000', '$2100', '$2200', '$2300', '$2400']} />
          <div className="w-10"></div>
          <Dropdown label="Ratings" options={['1', '2', '3', '4', '5']} />
        </div>
      </div>
    </div>
  );
}
