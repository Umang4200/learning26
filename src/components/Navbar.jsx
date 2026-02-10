import React from "react";
import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <Link class="navbar-brand" to="/">
          Netflix
        </Link>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item ">
              <Link className="nav-link" to="/netflixHome">
                Home
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/netflixMovies">
                Movies
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/netflixShows">
                Shows
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/netflixSports">
                Sports
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/netflixSparks">
                Sparks
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/teams">
                IPLTeams
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/fundemo">
                FunctionDemo
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/usestatedemo1">
                useStateDemo1
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/usestatedemo2">
                useStateDemo2
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/usestatedemo3">
                useStateDemo3
              </Link>
            </li>
                        <li class="nav-item">
              <Link class="nav-link" to="/employees">
                Employees
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/formdemo1">
                formdemo1
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/formdemo2">
                formdemo2
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/students">
                Students
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/teachers">
                Teachers
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
