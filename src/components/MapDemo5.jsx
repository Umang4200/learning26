import React from 'react'

export const MapDemo5 = () => {
    var students =[
        {id:1,name:"Umang",age:23,marks:78,city:"Patan",gender:"Male"},
        {id:2,name:"Rohan",age:25,marks:81,city:"Ahmedabad",gender:"Male"},
        {id:3,name:"Priya",age:22,marks:72,city:"Mehsana",gender:"Female"},
    ]
   return (
    <div style={{textAlign:"center"}}>
        <table className='table'>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Marks</th>
                    <th>City</th>
                    <th>Gender</th>
                </tr>
            </thead>
            <tbody>
                {
                    students.map((st)=>{
                        return <tr style={{backgroundColor:st.gender =="female" && "pink"}}>
                            <td>{st.id}</td>
                            <td>{st.name}</td>
                            <td style={{color: st.age>24 ? "red" :"black"}}>{st.age}</td>
                            <td style={{backgroundColor:st.marks>80 && "yellow"}}>{st.marks}</td>
                            <td>{st.city}</td>
                            <td>{st.gender}</td>
                        </tr>
                    })
                }
            </tbody>
        </table>
    </div>
  )
}