import React from 'react'
import EmployeeList from './EmployeeList';

export default function Employees() {
    const employees = [
        {id:101, name:"Umang", salary:20000},
        {id:102, name:"Abc", salary:22000},
        {id:103, name:"Xyz", salary:25000}
    ];
  return (
    <div style={{textAlign:"center"}}>
        <h1>Employees</h1>
        <EmployeeList employees={employees}/>
    </div>
  )
}
