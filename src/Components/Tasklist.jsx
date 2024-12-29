import React from "react";

const Tasklist = ({ tasks, updateTask, deleteTask }) => {
  const toggleComplete = (index) => {
    const updatedTask = { ...tasks[index], completed: !tasks[index].completed };
    updateTask(index, updatedTask);
  };

  return (
    <ul className="task-list">
      {tasks.length === 0 ? (
        <p>No tasks available</p>
      ) : (
        tasks.map((task, index) => (
          <li key={index} className={task.completed ? "completed" : ""}>
            <div>
              <span>{task.text}</span>
              <small>
                ({task.priority}, {task.category})
              </small>
            </div>
            <div>
              <button onClick={() => toggleComplete(index)}>
                {task.completed ? "Undo" : "Complete"}
              </button>
              <button onClick={() => deleteTask(index)}>Delete</button>
            </div>
          </li>
        ))
      )}
    </ul>
  );
};

export default Tasklist;
