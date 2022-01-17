import React from 'react';
import { useState } from 'react';
import Presult from './components/Presult';

const Pwg = () => {
    const [result, setResult] = useState();
    const [warn, setWarn] = useState(false);
    const [tick, setTick] = useState(false);

    const arrayGen = (low, high) => {
        let arr = [];
        for (let i = low; i < high; i++) {
            arr.push(i);
        }
        return arr;
    }

    const upperCodes = arrayGen(65, 90);
    const lowerCodes = arrayGen(97, 122)
    const numCodes = arrayGen(48, 57);
    const symCodes = arrayGen(32, 47).concat(arrayGen(58, 64));

    const generate = (e) => {
        e.preventDefault();
        setWarn(false);
        setTick(false);
        let chars = lowerCodes;
        let password = "";
        let length = e.target.length.value;
        let number = e.target.numbers.checked;
        let capital = e.target.capitals.checked;
        let symbol = e.target.symbols.checked;

        if (length < 1) {
            setWarn(true);
            return;
        }

        if (capital)
            chars.push(...upperCodes);
        if (number)
            chars.push(...numCodes);
        if (symbol)
            chars.push(...symCodes);

        for (let i = 0; i < length; i++) {
            const charcode = chars[Math.floor(Math.random() * chars.length)];
            password += String.fromCharCode(charcode);
        }
        setResult(password);
    }

    const showCopy = () => {
        setTick(true);
    }

    return (
        <div className="main">
            <h1>Password Generator</h1>
            {warn ? <p className="warn">- Enter a length more than 0</p> : null}
            <Presult showCopy={showCopy} result={result} />
            <div className="center">
                {tick ? <p className="green">Text copied ✓</p> : null}
            </div>
            <form onSubmit={generate}>
                <table className="pwgTable">
                    <tbody>
                        <tr>
                            <td>Length</td>
                            <td className="longInput">
                                <input type="number" name="length" placeholder="Enter length here..." />
                            </td>
                        </tr>
                        <tr>
                            <td>Numbers</td>
                            <td className="longInput">
                                <input type="checkbox" name="numbers" />
                            </td>
                        </tr>
                        <tr>
                            <td>Capitals</td>
                            <td className="longInput">
                                <input type="checkbox" name="capitals" />
                            </td>
                        </tr>
                        <tr>
                            <td>Symbols</td>
                            <td className="longInput">
                                <input type="checkbox" name="symbols" />
                            </td>
                        </tr>
                    </tbody>
                </table>
                <div className="center">
                <input className="centreLargeBtn" type="submit" value="Generate" />
                </div>
            </form>
        </div>
    )
}

export default Pwg
