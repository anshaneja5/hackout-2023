import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getLinks } from "../redux/slices/appConfigSlice";
import Spinner from "../Components/Spinner";
import pic from "../Images/desktop computer-amico.png";
function Tools() {
  const data = useSelector((s) => s.appConfigReducer.data);
  const isLoading = useSelector((s) => s.appConfigReducer.isLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getLinks({ domain: "Linux Tools" }));
  }, [dispatch]);
  if (isLoading) {
    return <Spinner />;
  }
  return (
    <div className="bg-[#050A15] w-[100%] h-[100%] flex flex-col items-center">
      <div className="flex">
        <div className="w-[80%] flex justify-center p-4 text-white text-4xl flex-col">
          Every Resource of Linux Tools 👇
          <div className="cont mt-3 mb-3">
            <p className="font-bold underline mb-2">Linux Apps</p>
            {data
              ?.filter((e) => {
                if (e.subdomain == "Linux Apps") {
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
            <p className="font-bold underline mb-2">Software Sites</p>
            {data
              ?.filter((e) => {
                if (e.subdomain == "Software Sites") {
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
            <p className="font-bold underline mb-2">Linux Video</p>
            {data
              ?.filter((e) => {
                if (e.subdomain == "Linux Video") {
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
            <p className="font-bold underline mb-2">Linux Audio</p>
            {data
              ?.filter((e) => {
                if (e.subdomain == "Linux Audio") {
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
            <p className="font-bold underline mb-2">Linux Image</p>
            {data
              ?.filter((e) => {
                if (e.subdomain == "Linux Image") {
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
