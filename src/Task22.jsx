import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Task22.css";

function Task22() {
  const [users, setUsers] = useState([
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
    { name: "Charlie", age: 35 },
  ]);

  const updateSecondUser = () => {
    const newUsers = [...users];
    newUsers[1] = { ...newUsers[1], name: "Robert", age: 31 };
    setUsers(newUsers);
  };

  const [product, setProduct] = useState({
    name: "Laptop",
    price: 60000,
    stock: 10,
  });

  const updateProduct = () => {
    setProduct({ ...product, price: 55000, stock: 8 });
  };

  const [name, setName] = useState("Asif"); // string
  const [age, setAge] = useState(22); // number
  const [isLoggedIn, setIsLoggedIn] = useState(false); // boolean
  const [numbers, setNumbers] = useState([1, 2, 3]); // array
  const [user, setUser] = useState({ name: "Alice", email: "alice@example.com" }); // object

  const updateState = () => {
    setIsLoggedIn(!isLoggedIn);
    setNumbers([...numbers, numbers.length + 1]);
    setUser({ ...user, email: "alice123@example.com" });
  };

  return (
    <div className="container my-4">
      <h2 className="mb-4 text-center">Task 22: ReactJS State Practice & Styling</h2>

      <div className="card mb-4">
        <div className="card-header bg-primary text-white">Array of Objects</div>
        <div className="card-body">
          <ul className="list-group mb-2">
            {users.map((user, i) => (
              <li key={i} className="list-group-item">
                {user.name} – {user.age} yrs
              </li>
            ))}
          </ul>
          <button className="btn btn-primary" onClick={updateSecondUser}>
            Update Second User
          </button>
        </div>
      </div>

      <div className="card mb-4">
        <div className="card-header bg-success text-white">Object Update</div>
        <div className="card-body">
          <p><b>Name:</b> {product.name}</p>
          <p><b>Price:</b> ₹{product.price}</p>
          <p><b>Stock:</b> {product.stock}</p>
          <button className="btn btn-success" onClick={updateProduct}>
            Update Product
          </button>
        </div>
      </div>

      <div className="card mb-4">
        <div className="card-header bg-warning text-dark">All Data Types</div>
        <div className="card-body">
          <p><b>Name (String):</b> {name}</p>
          <p><b>Age (Number):</b> {age}</p>
          <p><b>Logged In (Boolean):</b> {isLoggedIn.toString()}</p>
          <p><b>Numbers (Array):</b> {numbers.join(", ")}</p>
          <p><b>User (Object):</b> {user.name} – {user.email}</p>
          <button className="btn btn-warning" onClick={updateState}>
            Update States
          </button>
        </div>
      </div>
    </div>
  );
}

export default Task22;
