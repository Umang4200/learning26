import React from "react";

function MapDemo10() {
  const orders = [
    { id: 1, customer: "Ravi", amount: 12000, status: "Delivered", payment: "Online", priority: "Low" },
    { id: 2, customer: "Sneha", amount: 5000, status: "Pending", payment: "COD", priority: "High" },
    { id: 3, customer: "Arjun", amount: 22000, status: "Cancelled", payment: "Online", priority: "Medium" },
    { id: 4, customer: "Meera", amount: 8000, status: "Delivered", payment: "COD", priority: "Low" },
    { id: 5, customer: "Vikram", amount: 15000, status: "Pending", payment: "Online", priority: "High" },
  ];

  return (
    <table border="1" align="center" className="table">
      <thead>
        <tr>
          <th>Id</th><th>Customer</th><th>Amount</th><th>Status</th><th>Payment</th><th>Priority</th>
        </tr>
      </thead>
      <tbody>
        {orders.map(o => (
          <tr key={o.id}>
            <td>{o.id}</td>
            <td>{o.customer}</td>
            <td style={{backgroundColor: o.amount > 15000 ? "yellow" : ""}}>
              {o.amount}
            </td>
            <td style={{color: o.status === "Cancelled" ? "red" : o.status === "Pending" ? "orange" : "green"}}>
              {o.status}
            </td>
            <td style={{fontWeight: o.payment === "Online" ? "bold" : ""}}>
              {o.payment}
            </td>
            <td style={{backgroundColor: o.priority === "High" ? "#f8d7da" : ""}}>
              {o.priority}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default MapDemo10;
