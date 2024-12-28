import { useEffect, useState } from "react";
import TaskForm from "./Components/TaskForm.jsx";
import "./Style.css";

function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks)); // to converted to the string
  }, [tasks]);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  return (
    <div className='App'>
      <header class="header">
        <div class="header-container">
          <h1 class="title">
            Task<span class="highlight"> Buddy</span>
          </h1>
          <p class="tagline">Your friendly task manager</p>
        </div>
      </header>
      <TaskForm addTask={addTask} />
    </div>
  );
}

export default App;
