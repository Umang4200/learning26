import React from 'react'
import { Link } from 'react-router-dom';

export default function NetflixMovies() {
  let movies = [{id:1,name:"pk"},{id:2,name:"bahubali"},{id:3,name:"pushpa"}];
  return (
    <div style={{textAlign:"center"}}>
        <h1>NetflixMovies</h1>
        {
          movies.map((movie)=>{
            return <li><Link to={`/watch/${movie.name}`}>{movie.name}</Link></li>
          })
        }
    </div>
  )
}
