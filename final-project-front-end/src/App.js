// import logo from "./logo.svg";
// import "./App.css";

// function App() {
//   return (
//     <div className="App">
      
//     </div>
//   );
// }

// export default App;

import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import HomePage from "./pages/HomePage"; // Import your HomePage component here
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<HomePage />} />
      <Route exact path="/about" element={<AboutPage />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
