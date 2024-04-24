import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "../reportWebVitals";
import Hero from "../components/Hero";
import Details from "../components/Details";
import FilterPage from "../components/FilterPage";

function AboutPage() {
  return (
    <div>
      <Hero />
      <Details />
      {/* <SearchPage /> */}
      <FilterPage />
    </div>
  );
}

export default AboutPage;

// not real page just to see if the react router dom was working
