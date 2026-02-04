import React from 'react'
import { useParams } from 'react-router-dom'

export default function Watch() {
    let name = useParams().name;
  return (
    <div style={{textAlign:"center"}}>
        <h1>Watching... {name}</h1>
    </div>
  )
}
