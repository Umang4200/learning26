import React, { useState } from 'react'

export default function UsestateDemo1() {
    const [count, setCount] = useState(0);

    function incCount(){
        setCount(count+1);
    }
    function decCount(){
        setCount(count-1);
    }
  return (
    <div style={{textAlign:"center"}}>
        <h1>Count : {count}</h1>
        <button onClick={incCount}>+</button>&nbsp;
        <button onClick={decCount}>-</button>
    </div>
  )
}
