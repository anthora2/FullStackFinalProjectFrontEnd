// import logo from "./logo.svg";
// import "./App.css";

// import React from "react";
// import ReactDOM from "react-dom/client";
// import "./index.css";
// import App from "./App";
// import reportWebVitals from "./reportWebVitals";
// import Hero from "./components/Hero";
// import Details from "./components/Details";
// import SearchPage from "./components/SearchPage";
// import FilterPage from "./components/FilterPage";
import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "../reportWebVitals";
import Hero from "../components/Hero";
import Details from "../components/Details";
import FilterPage from "../components/FilterPage";


function HomePage() {
  return (
    <div>

      <Hero />
      <Details />
      {/* <SearchPage /> */}
      <FilterPage />
    </div>
  );
}

export default HomePage;
