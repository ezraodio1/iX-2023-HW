import './App.css';
import { useState, useEffect } from 'react';
import { Task } from './models/task';

import 'bootstrap/dist/css/bootstrap.min.css';
import TaskForm from './components/TaskForm';
import TaskTable from './components/TaskTable';

function App() {
  const[tasks, setTasks] = useState([]);

  function onTaskCreated(task) {
    setTasks([...tasks, task]);
  }

  function onTaskDelete(task) {
    setTasks(tasks.filter((x) => x.description !== task.description));
  }

  useEffect(() => {
    loadTasksFromLocalStorage();
  }, []);

  useEffect(() => {
    saveTasksToLocalStorage();
  }, [tasks]);

  function saveTasksToLocalStorage() {
    const json = JSON.stringify(tasks);
    localStorage.setItem('tasks', json);
  }

  function loadTasksFromLocalStorage() {
    const json = localStorage.getItem('tasks');
    if (json) {
      const taskArr = JSON.parse(json);
      if (taskArr.length) {
        setTasks(taskArr.map((x) => Task.fromJSON(x)));
      }
    }
  }

  return (
    <div className='m-5'>
      <div className='card p-4'>
        <TaskForm onTaskCreated={onTaskCreated} tasks={tasks}/>
        <TaskTable
          tasks={tasks}
          onTaskDelete = {onTaskDelete}
        />
      </div>
    </div>
  );
}

export default App;
