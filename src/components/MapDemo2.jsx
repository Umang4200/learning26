import React from 'react'

function MapDemo2() {
    let users = [
        {id:1, name:"Umang", age:22, gender: "Male", city:"Patan"},
        {id:2, name:"Rohan", age:26, gender: "Male", city:"Ahmedabad"},
        {id:3, name:"Priya", age:24, gender: "Female", city:"Mehsana"}

    ];
  return (
    <div>
        <li>id - name - age - gender - city</li>
        <p>-------------------------------------</p>
        {
            users.map((user)=>{
                return <li>{user.id}  
                    {user.name} - 
                    {user.age} - 
                    {user.gender} - 
                    {user.city}</li> 
                
            })
        }
    </div>
  )
}

export default MapDemo2;