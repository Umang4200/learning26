import React from 'react'
import { Link } from 'react-router-dom'

export default function NetflixShows() {
      
  return (
    <div style={{textAlign:"center"}}>
        <h1>NetflixShows</h1>
        <li><Link to="/watch/moneyheist">Money Heist</Link></li>
        <li><Link to="/watch/xyz">XYZ</Link></li>
        <li><Link to="/watch/abc">ABC</Link></li>
    </div>
  )
}
