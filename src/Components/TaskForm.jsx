import React, { useState } from 'react';

const TaskForm = () => {

    const [task, setTask] = useState('');

    const [priority, setPriority] = useState('Medium');;

    const [category, setCategory] = useState('General');

  return (
    <form>
        <div id='inp'>
            <input type="text"
            placeholder='Enter your task'
            value={task}
            onChange={(e) => setTask(e.target.value)}
            required
            />
            <span><button type='submit'>Add Task</button></span>
            <h1>{task}</h1>
        </div>
        <div>
            <select value={priority} onChange={(e) => setPriority(e.target.value)}>
                <option value="High"></option>
                <option value=""></option>
                <option value=""></option>
            </select>
        </div>
    </form>
  )
}

export default TaskForm;