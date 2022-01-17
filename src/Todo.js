import React from 'react';
import { useState, useEffect } from 'react';
import Task from './components/Task';
import AddTask from './components/AddTask';

const Todo = () => {
    const setting = () => {
        const check = localStorage.getItem("tasks")
        if (check === null || check === "")
            return []
        return JSON.parse(localStorage.getItem("tasks"))
    }

    const [tasks, setTasks] = useState(setting())
    const [showAdd, setShowAdd] = useState(false)

    useEffect(() => {
        localStorage.setItem("tasks", JSON.stringify(tasks))
    })

    const clickShow = () => {
        setShowAdd(!showAdd)
    }

    const addTask = (name, date) => {
        let id = 1
        if (tasks.length > 0)
            id = tasks[tasks.length - 1].id + 1
        const task = {
            id: id,
            name: name,
            date: date
        }
        setTasks(tasks => [...tasks, task])
        setShowAdd(false)
    }

    const manageDelete = (id) => {
        let temp = tasks.filter((value, index, arr) => {
            return value.id !== id
        })
        setTasks(temp)
    }

    return (
        <div className="main">
            <div className="list">
                <div className="header">
                    <h1>Todo List</h1>
                    <button onClick={clickShow}>{showAdd ? "Close" : "Add Task"}</button>
                </div>
                {showAdd ? <AddTask addTask={addTask} /> : null}
                <div className="tasks">
                    {tasks.length === 0 ? <p className="noTasks">You have no tasks</p> :
                        tasks.map(task => {
                            return (
                                <Task key={task.id} task={task} manageDelete={manageDelete} />
                            )
                        })
                    }
                </div>
            </div>
        </div>
    );
}

export default Todo
