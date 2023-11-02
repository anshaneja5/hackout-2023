import React from "react";

export default function Navbar() {
  return (
    <div className="flex justify-between bg-black text-white p-4 font-bold">
      <h1>Resources GURU</h1>

      <div className="flex space-x-3">
        <button>Search</button>
        <button>Guide</button>
      </div>

      <button>/</button>
    </div>
  );
}
