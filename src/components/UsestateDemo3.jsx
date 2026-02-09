import React, { useState } from 'react'

export default function UsestateDemo3() {
    const [names, setNames] = useState(["Umang", "Jash"]);
    function pushName(){
        setNames([...names, "Abc"]);
    }
  return (
    <div style={{textAlign:"center"}}>
        {
            names.map((name)=>{
                return <li>{name}</li>
            })
            
        }
        <button onClick={pushName}>push</button>
    </div>
  )
}
