import React from 'react'

export default function TaskTable(props) {
  return (
    <div>
        <table className='table mt-5'>
            <thead style={{fontWeight: "bold"}}>
                <tr>
                    <th>Task</th>
                    <th>Complete</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody id='table-body'>
                {props.tasks.map((task) => {
                    return (
                        <tr key={task.description}>
                            <td>{task.description}</td>
                            <td>
                                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                            </td>
                            <td>
                            <button
                                className="btn btn-danger btn-sm me-1" onClick={() => props.onTaskDelete(task)}>
                                Delete
                            </button>
                            </td>
                        </tr>
                    );
                })}
            </tbody>
        </table>
    </div>
  )
}
