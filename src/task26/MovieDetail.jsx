import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function MovieDetail() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/photos/${id}`)
      .then((res) => res.json())
      .then((data) => setMovie(data))
      .catch((err) => console.error(err));
  }, [id]);

  if (!movie) return <p>Loading...</p>;

  return (
    <div className="page-container">
      <h1>{movie.title}</h1>
      <img src={movie.url} alt={movie.title} />
      <p>ID: {movie.id}</p>
    </div>
  );
}

export default MovieDetail;
