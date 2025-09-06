import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Task21 from "./Task21.jsx";
import Task22 from "./Task22.jsx";
import Task23 from "./Task23.jsx";
import Task24 from "./Task24.jsx";
import Task25 from "./Task25.jsx";
import Task26 from "./Task26.jsx";
import Todo from "./Todo.jsx";
import Ecommerce from "./Ecommerce/Ecommerce.jsx";

function Task({ number }) {
  return <h2 style={{ padding: "20px" }}>This is Task {number}</h2>;
}

function App() {
  return (
    <BrowserRouter>
      <nav
        style={{
          background: "#000000ff",
          padding: "10px",
          position: "sticky", // makes it stick on top
          top: 0,
          zIndex: 1000
        }}
      >
        <ul
          style={{
            display: "flex",
            gap: "15px",
            listStyle: "none",
            margin: 0,
            padding: 0,
            overflowX: "auto"
          }}
        >
          <li><Link to="/task1" style={{ color: "white", textDecoration: "none" }}>Task 21</Link></li>
          <li><Link to="/task2" style={{ color: "white", textDecoration: "none" }}>Task 22</Link></li>
          <li><Link to="/task3" style={{ color: "white", textDecoration: "none" }}>Task 23</Link></li>
          <li><Link to="/task4" style={{ color: "white", textDecoration: "none" }}>Task 24</Link></li>
          <li><Link to="/task5" style={{ color: "white", textDecoration: "none" }}>Task 25</Link></li>
          <li><Link to="/task6" style={{ color: "white", textDecoration: "none" }}>Task 26</Link></li>
          <li><Link to="/task7" style={{ color: "white", textDecoration: "none" }}>TO-DO</Link></li>
          <li><Link to="/task8" style={{ color: "white", textDecoration: "none" }}>E-Commerce</Link></li>
        </ul>
      </nav>


      <Routes>
        <Route path="/task1" element={<Task21 />} />
        <Route path="/task2" element={<Task22 />} />
        <Route path="/task3" element={<Task23 />} />
        <Route path="/task4" element={<Task24 />} />
        <Route path="/task5" element={<Task25 />} />
        <Route path="/task6/*" element={<Task26 />} />
        <Route path="/task7" element={<Todo />} />
        <Route path="/task8/*" element={<Ecommerce />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
