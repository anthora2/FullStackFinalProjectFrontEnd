import React from "react";
import Dropdown from "./Dropdown";
import Enclave from "../images/berkeley_enclave.jpg";

export default function DropdownSection() {
  return (
    <div className="relative bg-cover bg-center h-screen relative-h-screen">
      <div
        className="absolute inset-0 z-[-1] blur-sm"
        style={{
          backgroundImage: `url(${Enclave})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-yellow-300 to-transparent z-[-1]"></div>
      <h1 className="z-15 text-7xl absolute top-40 left-40 text-white font-extrabold">
        Let's Look!
      </h1>

      <div className="flex flex-wrap justify-center items-center h-full z-15">
        <div className="w-64 h-64 bg-white shadow-md rounded-md m-4 p-4">
          <h3 className="text-lg font-semibold mb-2"> Apartment Type</h3>
          <Dropdown
            label="Apartment Type"
            options={["Single", "Double", "Triple"]}
          />
        </div>
        <div className="w-64 h-64 bg-white shadow-md rounded-md m-4 p-4">
          <h3 className="text-lg font-semibold mb-2"> Minimum Price</h3>
          <Dropdown
            label="Minimum Price"
            options={[
              "$400",
              "$500",
              "$600",
              "$700",
              "$800",
              "$900",
              "$1000",
              "$1100",
              "$1200",
              "$1300",
              "$1400",
              "$1500",
              "$1600",
            ]}
          />
        </div>
        <div className="w-64 h-64 bg-white shadow-md rounded-md m-4 p-4">
          <h3 className="text-lg font-semibold mb-2">Maximum Price</h3>
          <Dropdown
            label="Maximum Price"
            options={[
              "$600",
              "$700",
              "$800",
              "$900",
              "$1000",
              "$1100",
              "$1200",
              "$1300",
              "$1400",
              "$1500",
              "$1600",
              "$1700",
              "$1800",
              "$1900",
              "$2000",
              "$2100",
              "$2200",
              "$2300",
              "$2400",
            ]}
          />
        </div>
        <div className="w-64 h-64 bg-white shadow-md rounded-md m-4 p-4">
          <h3 className="text-lg font-semibold mb-2">Rating</h3>
          <Dropdown label="Ratings" options={["1", "2", "3", "4", "5"]} />
        </div>
      </div>

      <div className="relative">
        <button className="absolute left-1/4 bottom-[230px] bg-blue-800 text-white text-xl font-extrabold py-5 px-10 rounded-full shadow-md hover:bg-blue-900">
          Apply Filter
        </button>
      </div>
    </div>
  );
}
