import React from "react";

function MapDemo7() {
  const employees = [
    { id: 1, name: "Amit", age: 30, dept: "HR", salary: 25000, exp: 2 },
    { id: 2, name: "Neha", age: 45, dept: "IT", salary: 80000, exp: 12 },
    { id: 3, name: "Raj", age: 28, dept: "Sales", salary: 40000, exp: 4 },
    { id: 4, name: "Pooja", age: 35, dept: "IT", salary: 90000, exp: 10 },
    { id: 5, name: "Karan", age: 50, dept: "HR", salary: 30000, exp: 20 },
  ];

  return (
    <table border="1" align="center" className="table">
      <thead>
        <tr>
          <th>Id</th><th>Name</th><th>Age</th><th>Dept</th><th>Salary</th><th>Exp</th>
        </tr>
      </thead>
      <tbody>
        {employees.map(e => (
          <tr key={e.id}
            style={{
              backgroundColor: e.salary > 70000 ? "skyblue" : "",
              color: e.age > 40 ? "red" : "",
            }}>
            <td>{e.id}</td>
            <td>{e.name}</td>
            <td>{e.age}</td>
            <td style={{fontWeight: e.dept === "IT" ? "bold" : ""}}>{e.dept}</td>
            <td>{e.salary}</td>
            <td style={{backgroundColor: e.exp > 10 ? "yellow" : ""}}>{e.exp}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default MapDemo7;
