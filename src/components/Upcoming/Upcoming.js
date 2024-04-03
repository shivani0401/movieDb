import React from 'react';
import MovieBox from "../MovieBox/MovieBox";
import { useEffect, useState } from "react";

const API_URL =
  "https://api.themoviedb.org/3/movie/upcoming?api_key=e3baa70d55f6d5fdf45c457e55012445&page=1";

function Upcoming() {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.results);
      });
  });
  return (
    <div className="container">
      <div className="grid">
        {movies.map((movieReq) => (
          <MovieBox key={movieReq.id} {...movieReq} />
        ))}
      </div>
    </div>
  );
}

export default Upcoming
