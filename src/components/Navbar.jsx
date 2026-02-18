import React from "react";
import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
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
            {/* <li class="nav-item">
              <Link class="nav-link" to="/netflixMovies">
                Movies
              </Link>
              <Link class="nav-link" to="/netflixShows">
                Shows
              </Link>
            </li>

            <li class="nav-item">
              <Link class="nav-link" to="/netflixSports">
                Sports
              </Link>
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
             </li> */}
            {/* <li class="nav-item">
              <Link class="nav-link" to="/usestatedemo1">
                useStateDemo1
              </Link>
              <Link class="nav-link" to="/usestatedemo2">
                useStateDemo2
              </Link>
            </li>

            <li class="nav-item">
              <Link class="nav-link" to="/usestatedemo3">
                useStateDemo3
              </Link>
            </li> */}
            {/* <li class="nav-item">
              <Link class="nav-link" to="/employees">
                Employees
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/inputdemo1">
                inputdemo1
              </Link>
              <Link class="nav-link" to="/inputdemo2">
                inputdemo2
              </Link>
            </li>

            <li class="nav-item">
              <Link class="nav-link" to="/students">
                Students
              </Link>
              <Link class="nav-link" to="/teachers">
                Teachers
              </Link>
            </li>

            <li class="nav-item">
              <Link class="nav-link" to="/inputdemo3">
                inputdemo3
              </Link>
            </li> */}
            <li class="nav-item">
              <Link class="nav-link" to="/dropdown">
                Dropdown
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/formdemo1">
                FormDemo1
              </Link>
              <Link class="nav-link" to="/formdemo2">
                FormDemo2
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/formdemo3">
                FormDemo3
              </Link>
              <Link class="nav-link" to="/formdemo4">
                FormDemo4
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/formvalidationdemo1">
                formvalidationdemo1
              </Link>
              <Link class="nav-link" to="/formvalidationdemo2">
                formvalidationdemo2
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/passvalidation">
                passvalidation
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/comparepassword">
                comparepassword
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/apidemo1">
                ApiDemo1
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/apidemo2">
                ApiDemo2
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/apidemo3">
                ApiDemo3
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/omdbapi">
                OmdbApi
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/postapidemo1">
                PostApiDemo1
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/postapidemo2">
                PostApiDemo2
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
