import React from 'react'
import Table from './Table'

export default function Teachers() {
    let teachers = [
        {id:101, name:"rahul", subject:"Maths"},
        {id:102, name:"samir", subject:"Science"},
        {id:103, name:"sandip", subject:"English"}
    ];
  return (
    <div style={{textAlign:"center"}}>
        <h1>Teachers Details</h1>
        <Table data={teachers}/>
    </div>
  )
}
