import React from "react";
import { GoogleLogin } from "@react-oauth/google";

function MyLoginComponent({ onLoginSuccess }) {
  const responseMessage = (response) => {
    console.log("Success!");
    console.log(response);
    // Call the onLoginSuccess handler if it exists
    if (onLoginSuccess && typeof onLoginSuccess === "function") {
      onLoginSuccess();
    }
  };

  const errorMessage = (error) => {
    console.log(error);
  };

  return (
    <div>
      <GoogleLogin
        onSuccess={responseMessage}
        onError={errorMessage}
        hostedDomain="berkeley.edu"
      />
    </div>
  );
}

export default MyLoginComponent;
