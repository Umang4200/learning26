import React from 'react'

function MapDemo1() {
    let languages = ["C", "C++", "Javascript", "Python"];
  return (
    <div>
        {
            languages.map((lang)=>{
                return <li>{lang}</li>
            })
        }
    </div>
  )
}

export default MapDemo1;