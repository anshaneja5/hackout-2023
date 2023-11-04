import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getLinks } from "../redux/slices/appConfigSlice";
import pic from "../Images/Robot face-bro.png";
function Tools() {
  const data = useSelector((s) => s.appConfigReducer.data);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getLinks({ domain: "AI Tools" }));
  }, []);

  return (
    <div className="bg-[#050A15] w-[100%] h-[100%] flex flex-col items-center">
      <div className="flex">
        <div className="w-[80%] flex justify-center p-4 text-white text-4xl flex-col">
          Every Resource of AI Tools 👇
          <div className="cont mt-3 mb-3">
            <p className="font-bold underline mb-2">AI Chatbots</p>
            {data
              ?.filter((e) => {
                if (e.subdomain == "AI Chatbots") {
                  return e;
                }
              })
              ?.map((d, i) => {
                return (
                  <div key={i} className="">
                    {/* <p className="text-red">{d.sitetitle}</p>
                  <p className="text-red">{d.sitelink}</p> */}
                    <a
                      href={d.sitelink}
                      target="_blank"
                      className="text-blue-500 text-[25px]"
                    >
                      {d.sitetitle}
                    </a>
                  </div>
                );
              })}
          </div>
          <div className="cont mt-3">
            <p className="font-bold underline mb-2">Roleplaying Bots</p>
            {data
              ?.filter((e) => {
                if (e.subdomain == "Roleplaying Bots") {
                  return e;
                }
              })
              ?.map((d, i) => {
                return (
                  <div key={i} className="">
                    {/* <p className="text-red">{d.sitetitle}</p>
                  <p className="text-red">{d.sitelink}</p> */}
                    <a
                      href={d.sitelink}
                      target="_blank"
                      className="text-blue-500 text-[25px]"
                    >
                      {d.sitetitle}
                    </a>
                  </div>
                );
              })}
          </div>
          <div className="cont mt-3">
            <p className="font-bold underline mb-2">ChatGPT Tools</p>
            {data
              ?.filter((e) => {
                if (e.subdomain == "ChatGPT Tools") {
                  return e;
                }
              })
              ?.map((d, i) => {
                return (
                  <div key={i} className="">
                    {/* <p className="text-red">{d.sitetitle}</p>
                  <p className="text-red">{d.sitelink}</p> */}
                    <a
                      href={d.sitelink}
                      target="_blank"
                      className="text-blue-500 text-[25px]"
                    >
                      {d.sitetitle}
                    </a>
                  </div>
                );
              })}
          </div>
          <div className="cont mt-3">
            <p className="font-bold underline mb-2">Text Generators</p>
            {data
              ?.filter((e) => {
                if (e.subdomain == "Text Generators") {
                  return e;
                }
              })
              ?.map((d, i) => {
                return (
                  <div key={i} className="">
                    {/* <p className="text-red">{d.sitetitle}</p>
                  <p className="text-red">{d.sitelink}</p> */}
                    <a
                      href={d.sitelink}
                      target="_blank"
                      className="text-blue-500 text-[25px]"
                    >
                      {d.sitetitle}
                    </a>
                  </div>
                );
              })}
          </div>
          <div className="cont mt-3">
            <p className="font-bold underline mb-2">SD Models / Prompts</p>
            {data
              ?.filter((e) => {
                if (e.subdomain == "SD Models / Prompts") {
                  return e;
                }
              })
              ?.map((d, i) => {
                return (
                  <div key={i} className="">
                    {/* <p className="text-red">{d.sitetitle}</p>
                  <p className="text-red">{d.sitelink}</p> */}
                    <a
                      href={d.sitelink}
                      target="_blank"
                      className="text-blue-500 text-[25px]"
                    >
                      {d.sitetitle}
                    </a>
                  </div>
                );
              })}
          </div>
        </div>
        <div>
          <img
            src={pic}
            className="lg:h-[450px] lg:w-[550px] md:w-[450px] md:h-[350px] w-0 h-0 sm:w-[350px] sm:h-[250px] xs:w-[250px] xs:w-[150px]"
          ></img>
        </div>
      </div>
    </div>
  );
}

export default Tools;
