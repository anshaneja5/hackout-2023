import React, { useEffect } from "react";
import Typed from "react-typed";
import pic from "../Images/Server-amico.png";
import Card from "../Components/Card";
import { datas } from "../data";
import { useNavigate } from "react-router-dom";
import Spinner from "../Components/Spinner";
export default function Hero() {
  const style = {
    fontFamily: "Roboto Slab, cursive", // Using Gloria Hallelujah
  };
  const style2 = {
    fontFamily: "Mulish, cursive", // Using Gloria Hallelujah
  };
  const navigate = useNavigate();

  return (
    <div className="bg-[#050A15] w-[100%] h-[100%]">
      <div className="w-[100%] flex justify-center p-4">
        <div className="flex flex-col justify-center">
          <h1
            className={`text-[#FF04AA] text-xl sm:text-2xl md:text-4xl lg:text-5xl mb-3`}
            style={style}
          >
            Your Multiverse of <span className="text-[#FFB904]">Resources</span>
          </h1>
          <h1
            className="text-white text-lg sm:text-xl lg:text-3xl md:text-2xl font-bold"
            style={style2}
          ></h1>
          <Typed
            strings={[
              " AI-Tools",
              " Web-D Tools",
              " Books/Manga/etc",
              " Movies/Anime/etc",
            ]}
            typeSpeed={100}
            backSpeed={80}
            backDelay={1000}
            loop
            smartBackspace
            className="text-white text-lg sm:text-xl lg:text-3xl md:text-2xl font-bold "
          />
          <h1
            className="text-white text-md sm:text-xl lg:text-3xl font-bold md:text-4xl mt-5"
            style={style}
          >
            Dive Down in OCEAN of RESOURCES 👇
          </h1>
        </div>
        <div className="flex items-start">
          <img
            src={pic}
            alt=""
            className="sm:w-[350px] md:w-[400px] min-[320px]:w-[250px] w-0"
          ></img>
        </div>
      </div>
      <div className="bg-[#050A15] w-[100vw] h-[100vh] ">
        <div className="grid   sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-6xl p-2 mx-auto space-y-10 space-x-5 min-h-[0vh]">
          {datas.map((data, i) => {
            function handleClick() {
              navigate(`/${data.name}`);
            }
            return <Card key={i} onClick={handleClick} data={data}></Card>;
          })}
        </div>
      </div>
    </div>
  );
}
