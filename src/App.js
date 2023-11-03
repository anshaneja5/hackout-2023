import React from "react";
import Navbar from "./Components/Navbar";
import Hero from "./Pages/Hero";
import { Route, Routes } from "react-router-dom";
import AdBlocker from "./Pages/AdBlocker";
import Books from "./Pages/Books";
import Educational from "./Pages/Educational";
import Gaming from "./Pages/Gaming";
import MoviesTvAnime from "./Pages/MoviesTvAnime";
import Music from "./Pages/Music";
import Tools from "./Pages/Tools";
import AiTools from "./Pages/AiTools";
export default function App() {
  return (
    <div className="flex flex-col w-[100vw] h-[100vh] bg-[#050A15] overflow-x-hidden">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="*" element={<div>404 Not Found</div>} />
        <Route path="/Tools" element={<Tools />} />
        <Route path="/Gaming" element={<Gaming />} />
        <Route path="/AITools" element={<AiTools />} />
        <Route path="/Educational" element={<Educational />} />
        <Route path="/AdBlocker" element={<AdBlocker />} />
        <Route path="/MoviesTVAnime" element={<MoviesTvAnime />} />
        <Route path="/Gaming" element={<Gaming />} />
        <Route path="/Books" element={<Books />} />
        <Route path="/Music" element={<Music />} />
        {/* <Route path="/:domain" element={<AiTools />} /> */}
      </Routes>
    </div>
  );
}
