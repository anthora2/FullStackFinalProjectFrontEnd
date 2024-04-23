
import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "../reportWebVitals";
import Hero from "../components/Hero";
import Details from "../components/Details";
import FilterPage from "../components/FilterPage";
import ApartmentCard from "../components/ApartmentCard";
// import Dropdown from "../components/Dropdown";
import ApartmentGrid from "../components/ApartmentGrid";


function HomePage() {
  return (
    <div>

      <Hero />
      <Details />
      {/* <SearchPage /> */}
      {/* <FilterPage /> */}
      <ApartmentGrid />

    </div>
  );
}

export default HomePage;
