import React, { useState, useEffect } from 'react';
import { Task } from '../models/task';

export default function TaskForm(props) {

    const[description, setDescription] = useState('');

    function onTaskFormSubmit(e) {
        e.preventDefault();

        console.log(description);
        console.log(props.tasks);
        
        if (description === '') {
            return;
        }

        let task = new Task(description);
        props.onTaskCreated(task);

        document.getElementById("task").value = '';
        console.log(description);
    }

    return (
        <div>
            <h1 className='text-center'>Task List</h1>
            <hr/>
            <p className='text-center'>Our firebase task list</p>

            <form id='form' onSubmit={onTaskFormSubmit}>
                <div className="input-group mb-3">
                    <input 
                        id="task" 
                        type="text" 
                        className="form-control" 
                        placeholder="Task" 
                        onChange={(e) => setDescription(e.target.value)}/>
                    <div className="input-group-append">
                        <button className="btn btn-outline-secondary" type="submit">+</button>
                    </div>
                </div>
            </form>
        </div>
    )
}
