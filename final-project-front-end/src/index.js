import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Hero from "./components/Hero";
import Details from "./components/Details";
import SearchPage from "./components/SearchPage";
import FilterPage from "./components/FilterPage";
import HomePage from "../src/pages/HomePage";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <Hero />
    <Details />
    {/* <SearchPage /> */}
    {/* <FilterPage />  */}
    {/* <HomePage /> */}
    <App />
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
