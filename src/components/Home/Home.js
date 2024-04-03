import React from "react";
import MovieBox from "../MovieBox/MovieBox";
import '../Navbar/Navbar';
import { useEffect, useState } from "react";

const API_URL =
  "https://api.themoviedb.org/3/movie/now_playing?api_key=e3baa70d55f6d5fdf45c457e55012445&page=1";

//const SEARCH_URL = 'https://api.themoviedb.org/3/search/movie?&query';


function Home() {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState('');

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.results);
      });
  });

  // const searchMovie = async(e)=>{
  //   e.preventDefault();
  //   console.log("searching...");
  //   try {
  //     const url=`https://api.themoviedb.org/3/search/movie?api_key=e3baa70d55f6d5fdf45c457e55012445&query=${query}`
  //     const res = await fetch(url);
  //     const data = await res.json();

  //   } catch (error) {
      
  //   }
  // }

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

export default Home;
