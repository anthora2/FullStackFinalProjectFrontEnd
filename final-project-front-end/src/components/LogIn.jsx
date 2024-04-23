import { GoogleLogin } from "@react-oauth/google";

function MyLoginComponent() {
  const responseMessage = (response) => {
    console.log("Success!");
    console.log(response);
  };
  const errorMessage = (error) => {
    console.log(error);
  };
  return (
    <div>
      <GoogleLogin
        onSuccess={responseMessage}
        onError={errorMessage}
        hostedDomain="berkeley.edu" // Correct prop name: hostedDomain
      />
    </div>
  );
}

export default MyLoginComponent;
