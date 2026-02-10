import React from "react";

export default function EmployeeList(props) {
    const keys = Object.keys(props.employees[0]);
  return (
    <div style={{ textAlign: "center" }}>
      <h1>Employee List</h1>
      <table className="table">
        <thead>
          <tr>
            {keys.map((key) => {
              return <th>{key}</th>
            })}
          </tr>
        </thead>
        <tbody>
            {
                props.employees.map((employee) => (
                    <tr>
                        {
                            keys.map((key) => (
                                <td>{employee[key]}</td>
                            ))
                        }
                    </tr>
                ))
            }
        </tbody>
      </table>
    </div>
  );
}
