import { useEffect, useState } from "react";
import TaskForm from "./Components/TaskForm.jsx";
import "./Style.css";
import Tasklist from "./Components/Tasklist.jsx";
import ProgressTracker from "./Components/ProgressTracker.jsx";

function App() {
  const [tasks, setTasks] = useState([]);

  
  
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks)); // to converted to the string
  }, [tasks]);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  const updateTask = (index, updatedTask) => {
    const updatedTasks = [...tasks];
    updatedTasks[index] = updatedTask;
    setTasks(updatedTasks);
  };

  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index)); // absence of first argument
  };

  const clearTasks = () => {
    setTasks([]);
  };

  return (
    <div className="App">
      <header class="header">
        <div class="header-container">
          <h1 class="title">
            Task<span class="highlight"> Buddy</span>
          </h1>
          <p class="tagline">Your friendly task manager</p>
        </div>
      </header>
      <TaskForm addTask={addTask} />
      <Tasklist tasks={tasks} updateTask={updateTask} deleteTask={deleteTask} />
      <ProgressTracker tasks={tasks} />
      {tasks.length > 0 && (
        <button className="clear-btn" onClick={clearTasks}>
          Clear All Tasks
        </button>
      )}
    </div>
  );
}

export default App;
