import React from "react";
import { NavLink } from "react-router-dom";
export default function Card(props) {
  return (
    <div
      className="flex flex-col items-center justify-center 
    hover:scale-110 transition duration-300 ease-in gap-3 p-4 ml-5 rounded-xl outline cursor-pointer "
    >
      <NavLink to={props.data.name}>
        <img
          src={props.data.link}
          alt={props.data.name}
          className="rounded-lg flex justify-center object-cover"
          height="200px"
          width="325px"
        ></img>
        <h1 className="text-white text-center">{props.data.name}</h1>
        <p className="text-white text-center">
          {props.data.description.substring(0, 60)}
        </p>
      </NavLink>
    </div>
  );
}
