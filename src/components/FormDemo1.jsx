import React, { useState } from 'react'

export default function FormDemo1() {
    const [name, setName] = useState("");
    function nameHandler(event){
        setName(event.target.value);
    }
  return (
    <div style={{textAlign:"center", margin:20}}>
        <label>Name : </label>
        <input type="text" onChange={(event) => {nameHandler(event)}}/><br/>
        {name}
    </div>
  )
}
