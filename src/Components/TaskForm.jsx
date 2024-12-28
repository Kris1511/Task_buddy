import React, { useState } from "react";

const TaskForm = ({addTask}) => {
  const [task, setTask] = useState("");

  const [priority, setPriority] = useState("Medium");

  const [category, setCategory] = useState("General");

  const handleSubmit = () => {
    addTask({text: task, priority, category, completed: false});
  }

  return (
    <form onSubmit={handleSubmit}>
      <div id="inp">
        <input
          type="text"
          placeholder="Enter your task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          required
        />
        <span>
          <button type="submit">Add Task</button>
        </span>
        <h1>{task}</h1>
      </div>
      <div>
        <select value={priority} onChange={(e) => setPriority(e.target.value)}>
          <option value="High">High</option>
          <option value="Medium">Medium</option>
          <option value="Low">Low</option>
        </select>
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="General">General</option>
          <option value="Work">work</option>
          <option value="Personal">Personal</option>
        </select>
      </div>
    </form>
  );
};

export default TaskForm;
