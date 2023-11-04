import React from "react";
import { GoogleLogout } from "react-google-login";
import { Link, useNavigate } from "react-router-dom";
import { AUTH_GOOGLE_CLIENT_ID } from "../Pages/Auth/Login";

export default function Navbar() {
  const navigate = useNavigate();
  const isLoggedIn = localStorage.getItem("accessToken");
  function handleLogout() {
    localStorage.removeItem("accessToken");
    navigate("/");
  }

  return (
    <div className="flex justify-between bg-black text-white p-4 font-bold">
      <Link to="/">
        <h1>Resources GURU</h1>
      </Link>

      <div className="flex space-x-3">
        <button>Search</button>
        <button>Guide</button>
      </div>

      {/* <button>/</button> */}
      {isLoggedIn ? (
        <GoogleLogout
          clientId={AUTH_GOOGLE_CLIENT_ID}
          buttonText="Logout"
          onLogoutSuccess={handleLogout}
        />
      ) : (
        <button onClick={() => navigate("/login")}>Login</button>
      )}
    </div>
  );
}
