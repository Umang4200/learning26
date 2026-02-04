import React from 'react'
import { Link } from 'react-router-dom';

export default function NetflixSports() {
  let sports = [{id:1,name:"Cricket"}, {id:2,name:"Football"},{id:3,name:"Kabaddi"}];
  return (
    <div style={{textAlign:"center"}}>
        <h1>NetflixSports</h1>
        {
          sports.map((sport)=>{
            return <li><Link to={`/watch/${sport.name}`}>{sport.name}</Link></li>
          })
        }
    </div>
  )
}
