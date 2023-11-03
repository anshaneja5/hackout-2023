import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getLinks } from "../redux/slices/appConfigSlice";

export default function AdBlocker() {
  const data = useSelector((s) => s.appConfigReducer.data);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getLinks({ domain: "AdBlocker" }));
  }, []);

  return (
    <div className="bg-[#050A15] w-[100%] h-[100%]">
      <div className="w-[100%] flex justify-center p-4 text-white text-4xl">
        {/* Every Resource of AI Tools 👇 */}

        <div className="cont">
          <p className="text-red">Adblocking</p>
          {data
            ?.filter((e) => {
              if (e.subdomain == "Adblocking") {
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
          <p>Adblocking Extension</p>
          {data
            ?.filter((e) => {
              if (e.subdomain == "Adblocking Extension") {
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
          <p>DNS Adblocking</p>
          {data
            ?.filter((e) => {
              if (e.subdomain == "DNS Adblocking") {
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
          <p>Antivirus</p>
          {data
            ?.filter((e) => {
              if (e.subdomain == "Antivirus") {
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
          <p>Browser Tools</p>
          {data
            ?.filter((e) => {
              if (e.subdomain == "Browser Tools") {
                return e;
              }
            })
            ?.map((d, i) => {
              return (
                <div key={i} className="">
                  <p className="text-red">{d.siteTitle}</p>
                  <p className="text-red">{d.siteLink}</p>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}
