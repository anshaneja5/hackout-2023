import React, { useEffect } from "react";
import Navbar from "./Components/Navbar";
import Hero from "./Pages/Hero";
import { Route, Routes } from "react-router-dom";
import AdBlocker from "./Pages/AdBlocker";
import LinuxTools from "./Pages/LinuxTools";
import Educational from "./Pages/Educational";
import Gaming from "./Pages/Gaming";
import MoviesTvAnime from "./Pages/MoviesTvAnime";
import AudioTools from "./Pages/AudioTools";
import Tools from "./Pages/Tools";
import AiTools from "./Pages/AiTools";
import Login, { AUTH_GOOGLE_CLIENT_ID } from "./Pages/Auth/Login";
import { gapi } from "gapi-script";
import AuthStack from "./Pages/Auth/AuthStack";
export default function App() {
  useEffect(() => {
    function start() {
      gapi.client.init({
        clientId: AUTH_GOOGLE_CLIENT_ID,
        scope: "",
      });
    }
    gapi.load("client:auth2", start);
  }, []);

  return (
    <div className="flex flex-col w-[100vw] h-[100vh] bg-[#050A15] overflow-x-hidden">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/Tools" element={<Tools />} />
        <Route path="/Gaming" element={<Gaming />} />
        <Route path="/AITools" element={<AiTools />} />
        <Route path="/Educational" element={<Educational />} />
        <Route path="/AdBlocker" element={<AdBlocker />} />
        <Route path="/MoviesTVAnime" element={<MoviesTvAnime />} />
        <Route path="/Gaming" element={<Gaming />} />
        <Route path="/AudioTools" element={<AudioTools />} />
        <Route path="/LinuxTools" element={<LinuxTools />} />
        <Route element={<AuthStack />}>
          <Route path="/login" element={<Login />} />
        </Route>
        <Route path="*" element={<div>404 Not Found</div>} />
      </Routes>
    </div>
  );
}
