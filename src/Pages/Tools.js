import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getLinks } from "../redux/slices/appConfigSlice";

const datea = [
  {
    domain: "AI",
    subdomain: "Horror",
    sitetitle: "title",
    siteurl: "url",
  },
  {
    domain: "AI",
    subdomain: "Horror",
    sitetitle: "titlew2",
    siteurl: "url2",
  },
  {
    domain: "AI",
    subdomain: "Comedy",
    sitetitle: "title",
    siteurl: "url",
  },
];
function Tools() {
  const data = useSelector((s) => s.appConfigReducer.data);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getLinks({ domain: "Tools" }));
  }, []);

  return (
    <div className="bg-[#050A15] w-[100%] h-[100%]">
      <div className="w-[100%] flex justify-center p-4 text-white text-4xl">
        Every Resource of Tools 👇

        <div className="cont">
          <p className="text-red">Cheat Sheets</p>
          {data
            ?.filter((e) => {
              if (e.subdomain == "Cheat Sheets") {
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
          <p>Courses / Tutorials</p>
          {data
            ?.filter((e) => {
              if (e.subdomain == "Courses / Tutorials") {
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
          <p>Game Development</p>
          {data
            ?.filter((e) => {
              if (e.subdomain == "Game Development") {
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
          <p>App Development</p>
          {data
            ?.filter((e) => {
              if (e.subdomain == "App Development") {
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

export default Tools;
