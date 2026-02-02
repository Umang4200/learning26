import React from 'react'
import vc from '../assets/vc.jpeg'
export default function ContentComponent() {

  return (
    <div style={{padding:"5px", margin:"5px", maxHeight:500, height:"auto", width:"100%", border:"1px solid black"}}>
        <div style={{display:"flex", justifyContent:"center"}}>
            <h1 style={{marginRight:100}}>Indian Right-handed Batsman</h1>
            <img style={{height:400}} src={vc}  alt="svg" />
        </div>
    </div>
  )
}
