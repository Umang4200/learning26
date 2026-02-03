import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import { HeaderComponent } from './components/HeaderComponent';
import { FooterComponent } from './components/FooterComponent';
import ContentComponent from './components/ContentComponent';
import MapDemo10 from './components/MapDemo10';
import { Route, Routes } from 'react-router-dom';
import NetflixHome from './components/NetflixHome';
import NetflixMovies from './components/NetflixMovies';
import NetflixShows from './components/NetflixShows';
import Navbar from './components/Navbar';
import NetflixSports from './components/NetflixSports';
import NetflixSparks from './components/NetflixSparks';
import HomeComponent from './components/HomeComponent';

function App() {

  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<HomeComponent/>}></Route>
        <Route path="/netflixHome" element={<NetflixHome/>}></Route>
        <Route path="/netflixMovies" element={<NetflixMovies/>}></Route>
        <Route path="/netflixShows" element={<NetflixShows/>}></Route>
        <Route path="/netflixSports" element={<NetflixSports/>}></Route>
        <Route path="/netflixSparks" element={<NetflixSparks/>}></Route>
      </Routes>
    </div>
  )
}

export default App;
