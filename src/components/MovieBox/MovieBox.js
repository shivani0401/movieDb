import React from "react";
import MovieDetails from "../MovieDetails/MovieDetails";

import "./MovieBox.css";
import { Link } from "react-router-dom";
const IMG_URL = "https://image.tmdb.org/t/p/w500";
function MovieBox({
    id,
  title,
  poster_path,
  vote_average,
  release_date,
  overview,
})
 {
  return (
    <div className="movie-box">
        <Link to={`/movies/${id}`}>
        <img
        alt="movie poster"
        src={IMG_URL + poster_path}
      ></img>
      <h4>{title}</h4>
      <p>Rating {vote_average}</p>
        </Link>
      
    </div>
  );
}

export default MovieBox;
