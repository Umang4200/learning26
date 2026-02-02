import React from "react";
import c from "../assets/C.png"
import cpp from "../assets/CPP.png"
import js from "../assets/JS.png"
import py from "../assets/py.jpeg"

function MapDemo6() {
  let languages = [
    { id: 1, name: "C", author: "Dennis Ritchie", image: c  },
    { id: 2, name: "C++", author: "Bjarne Stroustrup", image: cpp  },
    { id: 3, name: "Javascript", author: "Brendan Eich", image: js  },
    { id: 4, name: "Python", author: "Guido van Rossum", image: py  },
  ];
  return (
    <div>
      <table border={2} className="table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Author</th>
            <th>Image</th>
          </tr>
        </thead>
        <tbody>
            {
                languages.map((lang) => {
                    return <tr>
                        <td>{lang.id}</td>
                        <td>{lang.name}</td>
                        <td>{lang.author}</td>
                        <td><img src={lang.image} alt={lang.name} width="30" /></td>
                    </tr>
                })
            }
        </tbody>
      </table>
    </div>
  );
}

export default MapDemo6;
