import React, { useState } from "react";
import Hero from "../components/Hero";
import Details from "../components/Details";
import ApartmentGrid from "../components/ApartmentGrid";

function HomePage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Track login status

  // Handler for successful login
  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
  };

  return (
    <div>
      {/* Pass login status and login success handler to Hero component */}
      <Hero isLoggedIn={isLoggedIn} onLoginSuccess={handleLoginSuccess} />
      <Details />
      {/* Pass login status to ApartmentGrid component */}
      {isLoggedIn && <ApartmentGrid isLoggedIn={isLoggedIn} />}
    </div>
  );
}

export default HomePage;
