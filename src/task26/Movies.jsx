import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Movies() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/photos?_limit=10")
      .then((res) => res.json())
      .then((data) => setMovies(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="page-container">
      <h1>Movies</h1>
      <div className="movies-grid">
        {movies.map((movie) => (
          <div key={movie.id} className="movie-card">
            <img src={movie.thumbnailUrl} alt={movie.title} />
            <Link to={`/task6/movies/${movie.id}`}>{movie.title}</Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Movies;
