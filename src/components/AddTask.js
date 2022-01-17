import React from 'react';
import { useState } from 'react';

const AddTask = ({ addTask }) => {

    const [warn, setWarn] = useState(false);

    const onSubmit = (e) => {
        e.preventDefault();
        let name = e.target.name.value;
        let date = e.target.date.value;
        if (name === "" || date === "") {
            setWarn(true);
            return;
        }
        addTask(name, date);
    }

    return (
        <form className="addForm" onSubmit={onSubmit}>
            {warn ? <p className="warn">Please fill in both name and date</p> : null}
            <table className="addTable">
                <tbody>
                    <tr>
                        <td>Name</td>
                        <td className="longInput"><input name="name" type="text" placeholder="Enter a name..."></input></td>
                    </tr>
                    <tr>
                        <td>Date</td>
                        <td className="longInput"><input name="date" type="date"></input></td>
                    </tr>
                </tbody>
            </table>
            <input type="submit" value="Submit" />
        </form>
    )
}

export default AddTask
