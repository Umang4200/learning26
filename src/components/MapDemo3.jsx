import React from 'react'

function MapDemo3() {

    var students =[
        {id:1,name:"Umang",age:22,marks:90,city:"Patan",gender:"Male"},
        {id:2,name:"Rohan",age:27,marks:65,city:"Mehsana",gender:"Male"},
        {id:3,name:"Priya",age:23,marks:77,city:"Ahmedabad",gender:"Female"},
    ]

  return (
    <div style={{textAlign:"center"}}>
        <table border="1">
            <thead>
                <tr>
                 <th>Id</th><th>Name</th><th>Age</th><th>Marks</th><th>City</th><th>Gender</th>
                </tr>
            </thead>
            <tbody>
                {
                    students.map((s)=>{
                        return (
                        <tr>
                            <td>{s.id}</td>
                            <td>{s.name}</td>
                            <td>{s.age}</td>
                            <td>{s.marks}</td>
                            <td>{s.city}</td>
                            <td>{s.gender}</td>
                        </tr>
                        )
                    })
                }
            </tbody>
        </table>
    </div>
  )
}

export default MapDemo3;