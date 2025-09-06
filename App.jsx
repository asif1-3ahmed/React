import React, { useState } from "react";

function App() {
  const [employees] = useState([
    { name: "Alice", age: 25, salary: 40000, designation: "Developer" },
    { name: "Bob", age: 30, salary: 50000, designation: "Designer" },
    { name: "Charlie", age: 28, salary: 45000, designation: "Tester" }
  ]);

  const [product, setProduct] = useState({
    name: "Laptop",
    price: 60000,
    brand: "HP",
    stock: 20
  });

  const updateProduct = () => {
    setProduct({
      ...product,
      price: 55000,
      stock: 15
    });
  };

  return (
    <div className="container mt-4">
      <h2>Employee Data</h2>
      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Salary</th>
            <th>Designation</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((emp, i) => (
            <tr key={i}>
              <td>{emp.name}</td>
              <td>{emp.age}</td>
              <td>{emp.salary}</td>
              <td>{emp.designation}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h2 className="mt-4">Product Details</h2>
      <p><b>Name:</b> {product.name}</p>
      <p><b>Price:</b> {product.price}</p>
      <p><b>Brand:</b> {product.brand}</p>
      <p><b>Stock:</b> {product.stock}</p>

      <button onClick={updateProduct}>Update Product</button>
    </div>
  );
}

export default App;
