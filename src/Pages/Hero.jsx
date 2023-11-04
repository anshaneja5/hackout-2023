import React, { useCallback} from "react";
import Typed from "react-typed";
import pic from "../Images/Server-amico.png";
import Card from "../Components/Card";
import { datas } from "../data";
import { useNavigate } from "react-router-dom";
import { loadSlim } from "tsparticles-slim";

import Particles from "react-particles";
export default function Hero() {
  const style = {
    fontFamily: "Roboto Slab, cursive", // Using Gloria Hallelujah
  };
 
  const navigate = useNavigate();

  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    await console.log(container);
  }, []);

  return (
    <>
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        style={{ zIndex: 0, position: "absolute", height: "100vh" }}
        options={{
         
          fpsLimit: 120,
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: "push",
              },
              onHover: {
                enable: true,
                mode: "repulse",
              },
              resize: true,
            },
            modes: {
              push: {
                quantity: 4,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: "#ffffff",
            },
            links: {
              color: "#ffffff",
              distance: 150,
              enable: true,
              opacity: 0.5,
              width: 1,
            },
            move: {
              direction: "none",
              enable: true,
              outModes: {
                default: "bounce",
              },
              random: false,
              speed: 6,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 80,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: "circle",
            },
            size: {
              value: { min: 1, max: 5 },
            },
          },
          detectRetina: true,
        }}
      />
      <div className=" w-[100%] h-[100%] z-[100]">
        <div className="w-[100%] flex justify-center p-4">
          <div className="flex flex-col justify-center">
            <h1
              className={`text-[#FF04AA] text-xl sm:text-2xl md:text-4xl lg:text-5xl mb-3`}
              style={style}
            >
              Your Multiverse of{" "}
              <span className="text-[#FFB904]">Resources</span>
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
        <div className=" w-[100vw] h-[100vh] ">
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
    </>
  );
}
