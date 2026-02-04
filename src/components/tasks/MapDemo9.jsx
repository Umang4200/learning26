import React from "react";

function MapDemo9() {
  const students = [
    { id: 1, name: "Anu", marks: 85, city: "Patan", gender: "Female", attendance: 92 },
    { id: 2, name: "Jay", marks: 40, city: "Mehsana", gender: "Male", attendance: 60 },
    { id: 3, name: "Riya", marks: 72, city: "Ahmedabad", gender: "Female", attendance: 88 },
    { id: 4, name: "Mohit", marks: 33, city: "Patan", gender: "Male", attendance: 55 },
    { id: 5, name: "Sara", marks: 90, city: "Surat", gender: "Female", attendance: 95 },
  ];

  return (
    <table border="1" align="center" className="table">
      <thead>
        <tr>
          <th>Id</th><th>Name</th><th>Marks</th><th>City</th><th>Gender</th><th>Attendance</th>
        </tr>
      </thead>
      <tbody>
        {students.map(s => (
          <tr key={s.id}
              style={{backgroundColor: s.marks < 35 ? "#f8d7da" : ""}}>
            <td>{s.id}</td>
            <td style={{fontWeight: s.marks > 80 ? "bold" : ""}}>{s.name}</td>
            <td>{s.marks}</td>
            <td style={{color: s.city === "Patan" ? "blue" : ""}}>{s.city}</td>
            <td>{s.gender}</td>
            <td style={{backgroundColor: s.attendance > 90 ? "yellow" : ""}}>
              {s.attendance}%
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default MapDemo9;
