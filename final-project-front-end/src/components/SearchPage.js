import React from "react";
import Dropdown from "./Dropdown";
import Enclave from "../images/berkeley_enclave.jpg";

export default function SearchPage() {
  return (
    <div className="relative h-screen">
      <div
        className="absolute inset-0 z-0 blur-sm"
        style={{
          backgroundImage: `url(${Enclave})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="flex flex-col items-center justify-center relative z-10 h-full">
        <h1 className="text-3xl font-semibold text-white mb-6">Let's Look!</h1>
        <div className="flex justify-between max-w-lg w-1/4 items-center">
          <Dropdown
            // label="Apartment Type"
            options={["Single", "Double", "Triple"]}
          />
          <Dropdown
            // label="Minimum Price"
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
          <Dropdown
            // label="Maximum Price"
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
          <Dropdown options={["1", "2", "3", "4", "5"]} />
        </div>
        <button className="mt-6 bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700">
          Apply Filter
        </button>
      </div>
    </div>
  );
}
