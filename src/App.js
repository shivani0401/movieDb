import './App.css';

import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Popular from './components/Popular/Popular';
import TopRated from './components/TopRatedd/TopRated';
import Upcoming from './components/Upcoming/Upcoming';
import MovieDetails from './components/MovieDetails/MovieDetails';




function App() {
  
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/popular" element={<Popular />} />
        <Route path="/top-rated" element={<TopRated />} />
        <Route path="/upcoming" element={<Upcoming />} />
        <Route path='/movies/${id}' element={<MovieDetails />}/>
        
      </Routes>
     
    </div>
  );
}

export default App;
