import React from 'react'
import Table from './Table';

export default function Students() {
    let students = [
        {rollno:1, name:"Umang", age:22},
        {rollno:2, name:"Xyz", age:21},
        {rollno:3, name:"Abc", age:22}
    ];
  return (
    <div style={{textAlign:"center"}}>
        <h1>Students Details</h1>
        <Table data={students}/>
    </div>
  )
}
