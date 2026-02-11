import React, { useState } from 'react'

export default function InputDemo3() {
  const [name,setName] = useState("");
  const [age,setAge] = useState(0);
  const [gender, setGender] = useState("");
  const [isSubmitted, setIssubmitted] = useState(false);

  return (
    <div style={{textAlign:"center"}}>
        <h1>Input Demo 3</h1>
        <div>
            <label>Name : </label>
            <input type="text" onChange={(event)=>{setName(event.target.value)}}/><br/>
        </div>
        <div>
            <label>Age : </label>
            <input type="number" onChange={(event)=>{setAge(event.target.value)}}/><br/>
        </div>
        <div>
            <label>Gender : </label><br />
            Male <input type="radio" onChange={(event)=>{setGender(event.target.value)}} name="male" value="male"/>
            Female <input type="radio" onChange={(event)=>{setGender(event.target.value)}} name="female" value="female"/>
            
        </div>

        <div><br />
          <button onClick={()=>{setIssubmitted(true)}}>Submit</button>
        </div>

        {isSubmitted &&<div style={{marginTop:80}}>
          <h1>-: Output :-</h1>
          <h2>Name : {name}</h2>
          <h3>Age : {age}</h3>
          <h3>Gender : {gender}</h3>

        </div>}
    </div>
  )
}
