import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
// import './App.css'
import { HeaderComponent } from "./components/HeaderComponent";
import { FooterComponent } from "./components/FooterComponent";
import ContentComponent from "./components/ContentComponent";
import MapDemo10 from "./components/tasks/MapDemo10";
import { Route, Routes } from "react-router-dom";
import NetflixHome from "./components/NetflixHome";
import NetflixMovies from "./components/NetflixMovies";
import NetflixShows from "./components/NetflixShows";
import Navbar from "./components/Navbar";
import NetflixSports from "./components/NetflixSports";
import NetflixSparks from "./components/NetflixSparks";
import HomeComponent from "./components/HomeComponent";
import ErrorPage from "./components/ErrorPage";
import Watch from "./components/Watch";
import Teams from "./components/tasks/teams";
import TeamDetail from "./components/tasks/TeamDetail";
import FunctionDemo from "./components/FunctionDemo";
import UsestateDemo1 from "./components/UsestateDemo1";
import UsestateDemo2 from "./components/UsestateDemo2";
import UsestateDemo3 from "./components/UsestateDemo3";
import InputDemo1 from "./components/InputDemo1";
import InputDemo2 from "./components/tasks/InputDemo2";
import Students from "./components/tasks/Students";
import Teachers from "./components/tasks/Teachers";
import Employees from "./components/Employees";
import Dropdown from "./components/tasks/Dropdown";
import InputDemo3 from "./components/InputDemo3";
import FormDemo1 from "./components/forms/FormDemo1";
import FormDemo2 from "./components/forms/FormDemo2";
import FormDemo3 from "./components/forms/FormDemo3";
import FormDemo4 from "./components/forms/FormDemo4";
import FormValidationDemo1 from "./components/forms/FormValidationDemo1";
import FormValidationDemo2 from "./components/forms/FormValidationDemo2";
import PasswordValidationDemo from "./components/forms/PasswordValidationDemo";
import ComparePassword from "./components/forms/ComparePassword";
import ApiDemo1 from "./components/Apis/ApiDemo1";
import ApiDemo2 from "./components/Apis/ApiDemo2";
import ApiDemo3 from "./components/Apis/ApiDemo3";
import OmdbApi from "./components/Apis/OmdbApi";
import MovieDetail from "./components/Apis/MovieDetail";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/netflixHome" element={<NetflixHome />}></Route>
        <Route path="/netflixMovies" element={<NetflixMovies />}></Route>
        <Route path="/netflixShows" element={<NetflixShows />}></Route>
        <Route path="/netflixSports" element={<NetflixSports />}></Route>
        <Route path="/netflixSparks" element={<NetflixSparks />}></Route>
        <Route path="/watch/:name" element={<Watch />}></Route>
        <Route path="/teams" element={<Teams />}></Route>
        <Route path="/teamsdetails/:name" element={<TeamDetail />}></Route>
        <Route path="/fundemo" element={<FunctionDemo />}></Route>
        <Route path="/usestatedemo1" element={<UsestateDemo1 />}></Route>
        <Route path="/usestatedemo2" element={<UsestateDemo2 />}></Route>
        <Route path="/usestatedemo3" element={<UsestateDemo3 />}></Route>
        <Route path="/employees" element={<Employees />} />
        <Route path="/inputdemo1" element={<InputDemo1 />}></Route>
        <Route path="/inputdemo2" element={<InputDemo2 />}></Route>
        <Route path="/students" element={<Students />}></Route>
        <Route path="/teachers" element={<Teachers />}></Route>
        <Route path="/inputdemo3" element={<InputDemo3 />}></Route>
        <Route path="/dropdown" element={<Dropdown />}></Route>
        <Route path="/formdemo1" element={<FormDemo1 />}></Route>
        <Route path="/formdemo2" element={<FormDemo2 />}></Route>
        <Route path="/formdemo3" element={<FormDemo3/>}></Route>
        <Route path="/formdemo4" element={<FormDemo4/>}></Route>
        <Route path="/formvalidationdemo1" element={<FormValidationDemo1/>}></Route>
        <Route path="/formvalidationdemo2" element={<FormValidationDemo2/>}></Route>
        <Route path="/passvalidation" element={<PasswordValidationDemo/>}></Route>
        <Route path="/comparepassword" element={<ComparePassword/>}></Route>
        <Route path="/apidemo1" element={<ApiDemo1/>}></Route>
        <Route path="/apidemo2" element={<ApiDemo2/>}></Route>
        <Route path="/apidemo3" element={<ApiDemo3/>}></Route>
        <Route path="/omdbapi" element={<OmdbApi/>}></Route>
        <Route path="/moviedetail/:imdbID" element={<MovieDetail/>}></Route>
        <Route path="/" element={<HomeComponent />}></Route>
        <Route path="/*" element={<ErrorPage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
