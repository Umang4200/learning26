import React from 'react'
import { Link } from 'react-router-dom';

export default function Teams() {
    const iplTeams = [
  { id: 1, name: "Chennai Super Kings" },
  { id: 2, name: "Mumbai Indians" },
  { id: 3, name: "Royal Challengers Bengaluru" },
  { id: 4, name: "Kolkata Knight Riders" },
  { id: 5, name: "Rajasthan Royals" },
  { id: 6, name: "Sunrisers Hyderabad" },
  { id: 7, name: "Delhi Capitals" },
  { id: 8, name: "Punjab Kings" },
  { id: 9, name: "Lucknow Super Giants" },
  { id: 10, name: "Gujarat Titans" }
];

  return (
    <div style={{textAlign:"center"}}>
        <h1>IPL Teams</h1>
        {
            iplTeams.map((team)=>{
                return <li><Link to={`/teamsdetails/${team.name}`}>{team.name}</Link></li>
            })
        }
    </div>
  )
}
