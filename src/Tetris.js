import React from 'react';
import { useState, useEffect } from 'react';

const Tetris = () => {

    const Lshape = [
        [[0, 0], [1, 0], [2, 0], [2, 1]],
        [[0, 0], [0, 1], [0, 2], [1, 0]],
        [[0, 0], [0, 1], [1, 1], [2, 1]],
        [[0, 2], [1, 0], [1, 1], [1, 2]]
    ];

    const Jshape = [
        [[0, 1], [1, 1], [2, 0], [2, 1]],
        [[0, 0], [1, 0], [1, 1], [1, 2]],
        [[0, 0], [0, 1], [1, 0], [2, 0]],
        [[0, 0], [0, 1], [0, 2], [1, 2]]
    ];

    const Ishape = [
        [[0, 0], [1, 0], [2, 0], [3, 0]],
        [[0, 0], [0, 1], [0, 2], [0, 3]],
        [[0, 0], [1, 0], [2, 0], [3, 0]],
        [[0, 0], [0, 1], [0, 2], [0, 3]]
    ];

    const Oshape = [
        [[0, 0], [0, 1], [1, 0], [1, 1]],
        [[0, 0], [0, 1], [1, 0], [1, 1]],
        [[0, 0], [0, 1], [1, 0], [1, 1]],
        [[0, 0], [0, 1], [1, 0], [1, 1]]
    ]

    const Sshape = [
        [[0, 1], [0, 2], [1, 0], [1, 1]],
        [[0, 0], [1, 0], [1, 1], [2, 1]],
        [[0, 1], [0, 2], [1, 0], [1, 1]],
        [[0, 0], [1, 0], [1, 1], [2, 1]]
    ];

    const Zshape = [
        [[0, 0], [0, 1], [1, 1], [1, 2]],
        [[0, 1], [1, 0], [1, 1], [2, 0]],
        [[0, 0], [0, 1], [1, 1], [1, 2]],
        [[0, 1], [1, 0], [1, 1], [2, 0]]
    ];

    const Tshape = [
        [[0, 1], [1, 0], [1, 1], [1, 2]],
        [[0, 0], [1, 0], [1, 1], [2, 0]],
        [[0, 0], [0, 1], [0, 2], [1, 1]],
        [[0, 1], [1, 0], [1, 1], [2, 1]]
    ];

    const shapes = [Lshape, Jshape, Ishape, Oshape, Sshape, Zshape, Tshape];

    let current = [];
    let currentpos = [];
    let rotation = 0;


    const moveDown = () => {
        let table = document.getElementById("table");
        for (let i of currentpos) {
            if (i[0] + 1 > 19) {
                return;
            }
            if (table.rows[i[0] + 1].cells[i[1]].classList.contains("taken")) {
                let count = 0;
                for (let x of currentpos) {
                    if (i[0] + 1 !== x[0])
                        count++;
                }
                if (count === 0) {
                    return;
                }
            }

        }
        for (let i of currentpos) {
            table.rows[i[0]].cells[i[1]].classList.remove("taken");
            i[0] += 1;
        }
        for (let i of currentpos) {
            table.rows[i[0]].cells[i[1]].classList.add("taken");
        }
    }

    const moveLeft = () => {
        let table = document.getElementById("table");
        for (let i of currentpos) {
            if (i[1] - 1 < 0) {
                return;
            }
            if (table.rows[i[0]].cells[i[1] - 1].classList.contains("taken")) {
                let count = 0;
                for (let x of currentpos) {
                    if (i[1] - 1 !== x[1])
                        count++;
                }
                if (count === 0) {
                    return;
                }
            }
        }

        for (let i of currentpos) {
            table.rows[i[0]].cells[i[1]].classList.remove("taken");
            i[1] -= 1;
        }
        for (let i of currentpos) {
            table.rows[i[0]].cells[i[1]].classList.add("taken");
        }
    }

    const moveRight= () => {
        let table = document.getElementById("table");
        for (let i of currentpos) {
            if (i[1] + 1 > 9) {
                return;
            }
            if (table.rows[i[0]].cells[i[1] + 1].classList.contains("taken")) {
                let count = 0;
                for (let x of currentpos) {
                    if (i[1] + 1 !== x[1])
                        count++;
                }
                if (count === 0) {
                    return;
                }
            }
        }

        for (let i of currentpos) {
            table.rows[i[0]].cells[i[1]].classList.remove("taken");
            i[1] += 1;
        }
        for (let i of currentpos) {
            table.rows[i[0]].cells[i[1]].classList.add("taken");
        }
    }

    const rotate = () => {
        let table = document.getElementById("table");
        let root = currentpos[0][0];
        for (let i of currentpos) {
            table.rows[i[0]].cells[i[1]].classList.remove("taken");
        }
        rotation += 1;
        if (rotation === 4) rotation = 0;
        currentpos = JSON.parse(JSON.stringify(current[rotation]));
        for (let i of currentpos){
            console.log(i);
            i[0] += root;
            table.rows[i[0]].cells[i[1]].classList.add("taken");
        }
    }

    //Offset check on rotation, find lowest point and rotate around that

    document.addEventListener('keydown', (e) => {
        switch(e.code) {
            case "ArrowLeft":  moveLeft(); break;
            case "ArrowDown": moveDown(); break;
            case "ArrowUp": rotate(); break;
            case "ArrowRight": moveRight(); break;
        }
    });

    const start = () => {
        current = Tshape;
        currentpos = current[0];
        let table = document.getElementById("table");
        for (let i of currentpos) {
            table.rows[i[0]].cells[i[1]].classList.add("taken");
        }
        const inter = setInterval(moveDown, 1000);
    }

    return (
        <div className="main">
            <div className="center">
                <h1>Tetris</h1>
            </div>
            <br />
            <div className="tetriscol"></div>
            <div className="tetriscol">
                <table id="table" className="tetrisTable">
                    <tbody>
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="tetriscol">
                <button onClick={start}>Start</button>
            </div>
        </div>
    )
}

export default Tetris
