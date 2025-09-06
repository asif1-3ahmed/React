import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./task26/Home";
import About from "./task26/About";
import Movies from "./task26/Movies";
import MovieDetail from "./task26/MovieDetail";
import Contact from "./task26/Contact";
import "./task26/Task26.css";

function Task26() {
  return (
    <div className="task26-container">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:id" element={<MovieDetail />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default Task26;
