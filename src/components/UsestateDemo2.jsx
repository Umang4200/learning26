import React, { useState } from 'react'

export default function UsestateDemo2() {
    const [loading, setLoading] = useState(true);
    function stopLoading(){
        setLoading(false);
    }
    function startLoading(){
        setLoading(true );
    }
  return (
    <div style={{textAlign:"center", margin:10}}>
        {
            loading && <h1>Loading...</h1>
        }
        <button onClick={stopLoading}>stop</button>&nbsp;
        <button onClick={startLoading}>start</button>
    </div>
  )
}
