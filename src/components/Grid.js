import React from 'react';

const Grid = ({ values, handleClick }) => {

    return (
        <table className="grid">
            <tbody>
                <tr>
                    <td onClick={() => handleClick(0, 0)}>{values[0][0]}</td>
                    <td onClick={() => handleClick(0, 1)}>{values[0][1]}</td>
                    <td onClick={() => handleClick(0, 2)}>{values[0][2]}</td>
                </tr>
                <tr>
                    <td onClick={() => handleClick(1, 0)}>{values[1][0]}</td>
                    <td onClick={() => handleClick(1, 1)}>{values[1][1]}</td>
                    <td onClick={() => handleClick(1, 2)}>{values[1][2]}</td>
                </tr>
                <tr>
                    <td onClick={() => handleClick(2, 0)}>{values[2][0]}</td>
                    <td onClick={() => handleClick(2, 1)}>{values[2][1]}</td>
                    <td onClick={() => handleClick(2, 2)}>{values[2][2]}</td>
                </tr>
            </tbody>
        </table>
    )
}

export default Grid
