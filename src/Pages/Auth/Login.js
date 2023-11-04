import { GoogleLogin, GoogleOAuthProvider } from "@react-oauth/google";
// import { GoogleLogin } from "react-google-login";
import React from "react";
import { useNavigate } from "react-router-dom";
import pic from "../../Images/Computer login-bro.png";
export const AUTH_GOOGLE_CLIENT_ID =
  "322357275545-4nkll6oa2oivdb4oc4eakp8aibjf4pie.apps.googleusercontent.com";
export const AUTH_CLIENT_SECRET = "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";
export const AUTH_GITHUB_CLIENT_ID = "865d2cb224eb6f8a83c6";

function Login() {
  const navigate = useNavigate();
  function handleSuccess(res) {
    const accessToken = res.credential;
    localStorage.setItem("accessToken", accessToken);
    navigate("/");
  }

  function handleFailure(res) {
    console.log("failed", res);
  }
  return (
    <div className="w-[100vw] h-[100vh] justify-center items-center flex flex-col">
      <div>
        <img src={pic} className="w-[400px] h-[400px]"></img>
      </div>
      <GoogleOAuthProvider clientId={AUTH_GOOGLE_CLIENT_ID}>
        <GoogleLogin onSuccess={handleSuccess} onError={handleFailure} />
      </GoogleOAuthProvider>
    </div>
  );
}

export default Login;
