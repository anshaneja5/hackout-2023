import React from "react";
import Typed from "react-typed";
import pic from "../Images/Server-amico.png";
import Card from "../Components/Card";
import { datas } from "../data";
export default function Hero() {
  const style = {
    fontFamily: "Playpen Sans, cursive", // Using Gloria Hallelujah
  };
  return (
    <div className="bg-[#050A15] w-[100%] h-[100%]">
      <div className="w-[100%] flex justify-center p-4">
        <div>
          <h1
            className={`text-[#D292FF] text-2xl sm:text-3xl md:text-5xl lg:text-6xl mb-3`}
            style={style}
          >
            One Stop Solution for your <br></br>EVERY NEED
          </h1>
          <h1 className="text-white text-2xl sm:text-3xl lg:text-5xl md:text-4xl font-bold">
            Find
          </h1>
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
            className="text-white text-2xl sm:text-3xl lg:text-5xl font-bold md:text-4xl"
          />
          <h1 className="text-white text-md sm:text-xl lg:text-3xl font-bold md:text-4xl mt-5">
            Dive Down in OCEAN of RESOURCES 👇
          </h1>
        </div>
        <div className="flex items-start">
          <img
            src={pic}
            alt=""
            className="sm:w-[400px] md:w-[450px] min-[320px]:w-[300px] s:w-[300px] w-0"
          ></img>
        </div>
      </div>
      <div className="bg-[#050A15] w-[100vw] h-[100vh] ">
        <div className="grid  xs:gridcols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-6xl p-2 mx-auto space-y-10 space-x-5 min-h-[80vh]">
          {datas.map((data) => {
            return <Card data={data}></Card>;
          })}
        </div>
      </div>
    </div>
  );
}
