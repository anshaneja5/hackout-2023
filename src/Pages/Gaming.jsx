import React, { useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { getLinks } from "../redux/slices/appConfigSlice";
import pic from "../Images/Card game-bro.png";
import Spinner from "../Components/Spinner";
function Tools() {
  const isLoading = useSelector((s) => s.appConfigReducer.isLoading);
  const data = useSelector((s) => s.appConfigReducer.data);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getLinks({ domain: "Gaming" }));
  }, [dispatch]);
  if (isLoading) {
    return <Spinner />;
  }
  return (
    <div className="bg-[#050A15] w-[100%] h-[100%] flex flex-col items-center">
      <div className="flex">
        <div className="w-[80%] flex justify-center p-4 text-white text-4xl flex-col">
          Every Resource of Tools 👇
          <div className="cont mt-3 mb-3">
            <p className="font-bold underline mb-2">Download Gamess</p>
            {data
              ?.filter((e) => {
                if (e.subdomain === "Download Games") {
                  return e;
                }
                else{
                  return null
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
                      rel="noreferrer"
                      className="text-blue-500 text-[25px]"
                    >
                      {d.sitetitle}
                    </a>
                  </div>
                );
              })}
          </div>
          <div className="cont mt-3">
            <p className="font-bold underline mb-2">Single Games</p>
            {data
              ?.filter((e) => {
                if (e.subdomain === "Single Games") {
                  return e;
                }

                else{
                  return null
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
                      rel="noreferrer"
                      className="text-blue-500 text-[25px]"
                    >
                      {d.sitetitle}
                    </a>
                  </div>
                );
              })}
          </div>
          <div className="cont mt-3">
            <p className="font-bold underline mb-2">ROM Sitest</p>
            {data
              ?.filter((e) => {
                if (e.subdomain === "ROM Sites") {
                  return e;
                }
                else{
                  return null
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
                      rel="noreferrer"
                      className="text-blue-500 text-[25px]"
                    >
                      {d.sitetitle}
                    </a>
                  </div>
                );
              })}
          </div>
          <div className="cont mt-3">
            <p className="font-bold underline mb-2">Browser Emulators</p>
            {data
              ?.filter((e) => {
                if (e.subdomain === "Browser Emulators") {
                  return e;
                }
                else{
                  return null
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
                      rel="noreferrer"
                      className="text-blue-500 text-[25px]"
                    >
                      {d.sitetitle}
                    </a>
                  </div>
                );
              })}
          </div>
          <div className="cont mt-3">
            <p className="font-bold underline mb-2">Arcade / Retro</p>
            {data
              ?.filter((e) => {
                if (e.subdomain === "Arcade / Retro") {
                  return e;
                }
                else{
                  return null
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
                      rel="noreferrer"
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
            alt=""
            className="lg:h-[450px] lg:w-[550px] md:w-[450px] md:h-[350px] w-0 h-0 sm:w-[350px] sm:h-[250px] xs:w-[250px] xs:w-[150px]"
          ></img>
        </div>
      </div>
    </div>
  );
}

export default Tools;
