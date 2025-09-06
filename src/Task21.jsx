import React, { useState } from "react";
import "./Task21.css";

function Task21() {
  const [employees] = useState([
    { name: "Asif", age: 22, salary: 25000, designation: "Developer" },
    { name: "Rahul", age: 25, salary: 30000, designation: "Designer" },
    { name: "Priya", age: 28, salary: 35000, designation: "Manager" },
    { name: "Amit", age: 30, salary: 40000, designation: "Team Lead" },
  ]);

  const [product, setProduct] = useState({
    name: "Laptop",
    price: 60000,
    brand: "Dell",
    stock: 10
  });

  const updateProduct = () => {
    setProduct({ ...product, price: 55000, stock: 8 });
  };

  return (
    <div className="task-container">
      <h2>Task 21: Employees & Product in Box Model</h2>

      {/* Employee Grid */}
      <div className="employee-grid">
        {employees.map((emp, index) => (
          <div key={index} className="employee-box">
            <h3>{emp.name}</h3>
            <p><b>Age:</b> {emp.age} yrs</p>
            <p><b>Salary:</b> ₹{emp.salary}</p>
            <p><b>Designation:</b> {emp.designation}</p>
          </div>
        ))}
      </div>

      <hr />

      {/* Product Box */}
      <div className="product-details">
        <h3>Product Details</h3>
        <p><b>Name:</b> {product.name}</p>
        <p><b>Price:</b> ₹{product.price}</p>
        <p><b>Brand:</b> {product.brand}</p>
        <p><b>Stock:</b> {product.stock}</p>
        <button onClick={updateProduct}>Update Product</button>
      </div>
    </div>
  );
}

export default Task21;
