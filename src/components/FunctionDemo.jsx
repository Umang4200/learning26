import React from 'react'

export default function FunctionDemo() {
    function sayHello(){
        alert("Hello Umang");
    }
  return (
    <div style={{textAlign:"center"}}>
        <h1>FunctionDemo</h1>
        <button onClick={sayHello}>Say Hello</button>
    </div>
  )
}
