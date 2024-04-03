import React, { useEffect, useState } from "react";

function MovieDetails(id) {
  const [movie, setMovie] = useState();
  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`
    )
      .then((res) => res.json())
      .then((data) => {
        setMovie(data.results);
      });
  });
  return <div>
    <h1>{movie?.title}</h1>
    <img src={`http://image.tmdb.org/t/p/w500${movie?.poster_path}`} alt="" />
    <section>
        <strong>Overview:</strong>
    </section>
    <p>{movie?.overview}</p>
    
  </div>;
}
export default MovieDetails;
