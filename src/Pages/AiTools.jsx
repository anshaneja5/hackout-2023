import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
const data = [
  
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

export default function AiTools() {
  const params = useParams();
  async function fetchData() {
    // const data = await axios.get("http://localhost:8000/api/getLink",{domain:"aitools"});
    // console.log(data.data);
    // console.log(params.domain);
  }

  useEffect(() => {
    fetchData();
  }, [params.domain, fetchData]);

  // const newdata = data.filter()

  return (
    <div className="bg-[#050A15] w-[100%] h-[100%]">
      <div className="w-[100%] flex justify-center p-4 text-white text-4xl">
        {/* Every Resource of AI Tools 👇 */}
        <div className="cont">
          <p>Horro</p>
          {data
            .filter((e) => {
              if (e.subdomain == "Horror") {
                return e;
              }
            })
            .map((d, i) => {
              return (
                <div key={i} className="">
                  <p>{d.siteurl}</p>
                  <p>{d.sitetitle}</p>
                </div>
              );
            })}
        </div>
        <div className="cont">
          <p>Chatbot</p>
          {data
            .filter((e) => {
              if (e.subdomain == "Horror") {
                return e;
              }
            })
            .map((d, i) => {
              return (
                <div key={i} className="">
                  <p>{d.siteurl}</p>
                  <p>{d.sitetitle}</p>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}
