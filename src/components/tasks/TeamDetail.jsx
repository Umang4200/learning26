import React from 'react'
import { useParams } from 'react-router-dom'

export default function TeamDetail() {
    let teamName = useParams().name;
  return (
    <div style={{textAlign:"center"}}>
        <h1>{teamName} is Playing...</h1>
    </div>
  )
}
