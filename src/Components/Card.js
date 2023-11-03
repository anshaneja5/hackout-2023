import React from "react";
import { NavLink } from "react-router-dom";
export default function Card(props) {


  
  return (
    <div
      className="flex flex-col items-center justify-between 
    hover:scale-110 transition duration-300 ease-in gap-3 p-4 mt-10 ml-5 rounded-xl outline cursor-pointer"
    
    >
      <NavLink to={props.data.name}>
        <img src={props.data.link} alt={props.data.name}></img>
        <h1 className="text-white">{props.data.name}</h1>
        <p className="text-white">{props.data.description}</p>
      </NavLink>
    </div>
  );
}
