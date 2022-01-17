import React from 'react'

const Task = ({ task, manageDelete }) => {

    return (
        <div className="task">
            <h3>{task.name}</h3>
            <p>{task.date}</p>
            <button onClick={() => manageDelete(task.id)}>Delete</button>
        </div>
    )
}

export default Task
