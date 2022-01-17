import React from 'react'
import { Link } from 'react-router-dom';

const NavBar = () => {

    const show = () => {
        document.getElementById("dropdown").classList.toggle("show");
        let val = document.getElementById("dropBtn").innerHTML;
        if (val === "▼") val = "▲";
        else val = "▼";
        document.getElementById("dropBtn").innerHTML = val;
    }

    return (
        <nav>
            <div className="logo">
                    <h1>PW / TP</h1>
                    <button className="droparrow" id="dropBtn" onClick={show}>▼</button>
            </div>
            <div className="dropdown" id="dropdown">
                <ul>
                    <li>
                        <h1 className="bigScreen">PW / TP</h1>
                    </li>
                    <li>
                        <Link className="link" to="/">Home</Link>
                    </li>
                    <li>
                        <Link className="link" to="/todolist">To-do List</Link>
                    </li>
                    <li>
                        <Link className="link" to="/pwg">Password Generator</Link>
                    </li>
                    <li>
                        <Link className="link" to="/pwc">Password Checker</Link>
                    </li>
                    <li>
                        <Link className="link" to="/tictactoe">Tic Tac Toe</Link>
                    </li>
                    <li>
                        <Link className="link" to="/nasaapi">NASA Picture Of Day</Link>
                    </li>
                    {/* <li>
                        <Link className="link" to="/tetris">Tetris</Link>
                    </li> */}
                </ul>
            </div>
        </nav>
    )
}

export default NavBar
