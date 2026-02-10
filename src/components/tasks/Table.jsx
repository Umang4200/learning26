import React from "react";

export default function Table({ data }) {
  let keys = Object.keys(data[0]);

  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            {keys.map((key) => (
              <th>{key}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((obj) => (
            <tr>
              {keys.map((key) => (
                <td>{obj[key]}</td>
              ))}
            </tr> 
          ))}
        </tbody>
      </table>
    </div>
  );
}
