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
import { GoogleOAuthProvider } from "@react-oauth/google";

function App() {
  return (
    <GoogleOAuthProvider clientId="902392435040-p5qiakp27sos24bi1n5932ehp7021cg2.apps.googleusercontent.com">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/about" element={<AboutPage />} />
        </Routes>
      </BrowserRouter>
    </GoogleOAuthProvider>
  );
}

export default App;
