import React, { useState } from "react";
import "./Todo.css";

function Todo() {
  const [task, setTask] = useState(""); 
  const [tasks, setTasks] = useState([]); 
  const [editIndex, setEditIndex] = useState(null); 

  // Add or update task
  const handleAddOrUpdate = () => {
    if (task.trim() === "") return;

    if (editIndex !== null) {
      const updatedTasks = tasks.map((t, i) =>
        i === editIndex ? { ...t, text: task } : t
      );
      setTasks(updatedTasks);
      setEditIndex(null);
    } else {
      setTasks([...tasks, { text: task, completed: false }]);
    }
    setTask("");
  };

  const startEdit = (index) => {
    setTask(tasks[index].text);
    setEditIndex(index);
  };

  const toggleComplete = (index) => {
    const newTasks = tasks.map((t, i) =>
      i === index ? { ...t, completed: !t.completed } : t
    );
    setTasks(newTasks);
  };

  const deleteTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
    if (editIndex === index) setEditIndex(null);
  };

  return (
    <div className="todo-container">
      <h2>Todo App</h2>
      <div className="todo-input">
        <input
          type="text"
          value={task}
          placeholder="Enter a task"
          onChange={(e) => setTask(e.target.value)}
          onKeyPress={(e) => e.key === "Enter" && handleAddOrUpdate()}
        />
        <button onClick={handleAddOrUpdate}>{editIndex !== null ? "Update" : "Add"}</button>
      </div>

      <ul className="todo-list">
        {tasks.map((t, index) => (
          <li key={index} className={t.completed ? "completed" : ""}>
            <span onClick={() => toggleComplete(index)}>{t.text}</span>
            <div className="task-buttons">
              <button className="edit-btn" onClick={() => startEdit(index)}>Edit</button>
              <button className="delete-btn" onClick={() => deleteTask(index)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Todo;
