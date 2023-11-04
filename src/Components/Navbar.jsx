import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { googleLogout } from "@react-oauth/google";

export default function Navbar() {
  const navigate = useNavigate();
  const isLoggedIn = localStorage.getItem("accessToken");
  function handleLogout() {
    googleLogout()
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
        <button onClick={ handleLogout}>Logout</button>
        
      ) : (
        <button onClick={() => navigate("/login")}>Login</button>
      )}
    </div>
  );
}
