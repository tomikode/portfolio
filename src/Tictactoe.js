import Grid from './components/Grid';
import { useState, useEffect, useRef } from 'react';

const Tictactoe = () => {

    const [bot, setBot] = useState(false);
    const [values, setValues] = useState([[], [], []]);
    const [turns, setTurns] = useState(0);
    const [gameWin, setWin] = useState(false);
    const [tie, setTie] = useState(false);
    const firstMount = useRef(true);

    useEffect(() => {
        if (firstMount.current) {
            firstMount.current = false;
            return;
        }
        if (turns === 9 && gameWin === false) {
            setTie(true);
        }
        if (bot && turns % 2 === 1 && turns < 9 && gameWin === false)
            botTurn();
    }, [values]);

    const changeBot = () => {
        setBot(!bot);
    }

    const handleClick = (row, col) => {
        document.getElementById('botBut').setAttribute('disabled', 'disabled');
        if (gameWin || tie)
            return;
        let temp = values;
        personTurn(row, col, temp);
    }

    const personTurn = (row, col, temp) => {
        let turn = turns % 2 === 0 ? 'X' : 'O';
        temp[row][col] = turn;
        setValues([...temp]);
        checkWin(turn);
        setTurns(turns + 1);
    }


    const botTurn = () => {
        let temp = values;
        while (true) {
            let botRow, botCol;
            botRow = Math.floor(Math.random() * 3);
            botCol = Math.floor(Math.random() * 3);
            if (typeof (temp[botRow][botCol]) === 'undefined') {
                temp[botRow][botCol] = 'O';
                setValues([...temp]);
                checkWin('O');
                setTurns(turns + 1);
                break;
            }
        }
    }

    const checkWin = (player) => {
        let count = 0;
        if (turns === 9) {
            setTie(true);
        }
        for (let i = 0; i < 3; i++) {
            for (let x = 0; x < 3; x++) {
                if (values[i][x] !== player) {
                    break;
                }
                count++;
            }
            if (count === 3) {
                win();
                return;
            }
            count = 0;
        }
        for (let i = 0; i < 3; i++) {
            for (let x = 0; x < 3; x++) {
                if (values[x][i] !== player) {
                    break;
                }
                count++;
            }
            if (count === 3) {
                win();
                return;
            }
            count = 0;
        }

        for (let i = 0; i < 3; i++) {
            if (values[i][i] !== player) {
                break;
            }
            count++;
        }
        if (count === 3) {
            win();
            return;
        }
        count = 0;

        for (let i = 0; i < 3; i++) {
            if (values[2 - i][i] !== player) {
                break;
            }
            count++;
        }
        if (count === 3) {
            win();
            return;
        }
    }

    const win = () => {
        setWin(true);
    }

    const reset = () => {
        document.getElementById('botBut').removeAttribute('disabled');
        setValues([[], [], []]);
        setTurns(0);
        setTie(false);
        setWin(false);
    }

    return (
        <div className="main">
            <div className="center">
                <h1>Tic Tac Toe</h1>
                <div className="ticButs">
                    <button id="botBut" onClick={changeBot}>{bot ? 'VS Player' : 'VS Bot'}</button>
                    <button onClick={reset}>Reset</button>
                </div>
                {gameWin ? <h2>{turns % 2 === 0 ? 'O' : 'X'} wins!</h2> : null}
                {tie ? <h2>Tie!</h2> : null}
                <Grid values={values} handleClick={handleClick} />
            </div>
        </div >
    );
}

export default Tictactoe
