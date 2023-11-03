import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getLinks } from "../redux/slices/appConfigSlice";


function Gaming() {
  const data = useSelector((s) => s.appConfigReducer.data);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getLinks({ domain: "Gaming" }));
  }, []);

  return (
    <div className="bg-[#050A15] w-[100%] h-[100%]">
      <div className="w-[100%] flex justify-center p-4 text-white text-4xl">
        {/* Every Resource of AI Tools 👇 */}

        <div className="cont">
          <p className="text-red">Download Games</p>
          {data
            ?.filter((e) => {
              if (e.subdomain == "Download Games") {
                return e;
              }
            })
            ?.map((d, i) => {
              return (
                <div key={i} className="">
                  <p className="text-red">{d.sitetitle}</p>
                  <p className="text-red">{d.sitelink}</p>
                </div>
              );
            })}
        </div>

        <div className="cont">
          <p>Single Games</p>
          {data
            ?.filter((e) => {
              if (e.subdomain == "Single Games") {
                return e;
              }
            })
            ?.map((d, i) => {
              return (
                <div key={i} className="">
                  
                  <p className="text-red">{d.sitetitle}</p>
                  <p className="text-red">{d.sitelink}</p>
                </div>
              );
            })}
        </div>

        <div className="cont">
          <p>ROM Sites</p>
          {data
            ?.filter((e) => {
              if (e.subdomain == "ROM Sites") {
                return e;
              }
            })
            ?.map((d, i) => {
              return (
                <div key={i} className="">
                  
                  <p className="text-red">{d.sitetitle}</p>
                  <p className="text-red">{d.sitelink}</p>
                </div>
              );
            })}
        </div>

        <div className="cont">
          <p>Browser Emulators</p>
          {data
            ?.filter((e) => {
              if (e.subdomain == "Browser Emulators") {
                return e;
              }
            })
            ?.map((d, i) => {
              return (
                <div key={i} className="">
                  
                  <p className="text-red">{d.sitetitle}</p>
                  <p className="text-red">{d.sitelink}</p>
                </div>
              );
            })}
        </div>

        <div className="cont">
          <p>Arcade / Retro</p>
          {data
            ?.filter((e) => {
              if (e.subdomain == "Arcade / Retro") {
                return e;
              }
            })
            ?.map((d, i) => {
              return (
                <div key={i} className="">
                 
                  <p className="text-red">{d.sitetitle}</p>
                 <p className="text-red">{d.sitelink}</p>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}

export default Gaming;
