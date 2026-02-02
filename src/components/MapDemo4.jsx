import React from "react";

function MapDemo4(){
  var cities = [
    { id: 1, name: "Ahmedabad", pop: 8000000, AQI: 302 },
    { id: 2, name: "Delhi", pop: 10000000, AQI: 400 },
    { id: 3, name: "Dehradun", pop: 8000000, AQI: 150 },
  ];
  return (
    <div style={{ textAlign: "center" }}>
      
      <table className="table">
        <thead>
            <tr>
               <th>Id</th><th>Name</th><th>Population</th><th>AQI</th>
            </tr>
        </thead>
        <tbody>
            {
                cities.map((city)=>{
                    return <tr>
                        <td>{city.id}</td>
                        <td>{city.name}</td>
                        <td>{city.pop}</td>
                        <td>{city.AQI}</td>
                    </tr>
                })
            }
        </tbody>
      </table>
    </div>
  );
};

export default MapDemo4;