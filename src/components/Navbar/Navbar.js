import React from "react";
import '../Home/Home';
import { Link } from "react-router-dom";

import './Navbar.css';
export default function Navbar(searchMovie) {
  return (
    <nav>
      <ul>
        <li className="title">
          <Link to="/">MovieDb</Link>
        </li>
        <li>
          <Link to='/popular'>Popular</Link>
        </li>
        <li>
          <Link to='/top-rated'>Top Rated</Link>
        </li>
        <li>
          <Link to='/upcoming'>Upcoming</Link>
        </li>
        <form>
          <input type="text" placeholder="Search" />
          <button>Search</button>
        </form>
      </ul>
    </nav>
  );
}