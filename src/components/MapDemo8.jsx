import React from "react";

function MapDemo8() {
  const products = [
    { id: 1, name: "Laptop", category: "Electronics", price: 60000, stock: 5, rating: 4.5 },
    { id: 2, name: "Shoes", category: "Fashion", price: 2000, stock: 0, rating: 3.8 },
    { id: 3, name: "Phone", category: "Electronics", price: 30000, stock: 10, rating: 4.8 },
    { id: 4, name: "Watch", category: "Fashion", price: 5000, stock: 2, rating: 4.0 },
    { id: 5, name: "Bag", category: "Fashion", price: 1500, stock: 0, rating: 3.5 },
  ];

  return (
    <table border="1" align="center" className="table">
      <thead>
        <tr>
          <th>Id</th><th>Name</th><th>Category</th><th>Price</th><th>Stock</th><th>Rating</th>
        </tr>
      </thead>
      <tbody>
        {products.map(p => (
          <tr key={p.id}>
            <td>{p.id}</td>
            <td style={{color: p.rating > 4.5 ? "green" : ""}}>{p.name}</td>
            <td style={{fontWeight: p.category === "Electronics" ? "bold" : ""}}>{p.category}</td>
            <td style={{backgroundColor: p.price > 50000 ? "yellow" : ""}}>{p.price}</td>
            <td style={{color: p.stock === 0 ? "red" : ""}}>
              {p.stock === 0 ? "Out of Stock" : p.stock}
            </td>
            <td>{p.rating}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default MapDemo8;
