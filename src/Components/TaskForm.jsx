import React, { useState } from "react";

const TaskForm = () => {
  const [task, setTask] = useState("");

  const [priority, setPriority] = useState("Medium");

  const [category, setCategory] = useState("General");

  return (
    <form>
      <input
        type="text"
        placeholder="Enter your Task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        required
      />
      <span>
        <button>Add Task</button>
      </span>
      <h1>{task}</h1>

      <div>
        <select value={priority} onChange={(e) => setPriority(e.target.value)}>
          <option>Medium</option>
          <option>Low</option>
          <option>High</option>
        </select>

        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option>General</option>
          <option>Work</option>
          <option>Personal</option>
        </select>
      </div>
    </form>
  );
};

export default TaskForm;
