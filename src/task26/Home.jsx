import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="page-container">
      <h1>Welcome to Movie App</h1>
      <p>Explore movies and learn about our team!</p>
      <nav>
        <Link to="/task6/about">About</Link> |{" "}
        <Link to="/task6/movies">Movies</Link> |{" "}
        <Link to="/task6/contact">Contact</Link>
      </nav>
    </div>
  );
}

export default Home;
