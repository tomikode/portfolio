import React from 'react'
import { useState } from 'react';

const Presult = ({ showCopy, result }) => {


    const copy = () => {
        let text = document.getElementById("resText").innerHTML;
        let temp = document.createElement("input");
        document.body.appendChild(temp);
        temp.setAttribute("id", "tempid");
        document.getElementById("tempid").value = text;
        temp.select();
        document.execCommand("copy");
        document.body.removeChild(temp);
        showCopy();
    }

    return (
        <div>
            <div className="resSection">
                <div className="result">
                    <h3 className="resText" id="resText">{result}</h3>
                </div>
                <button className="copyPwd" onClick={copy}>Copy</button>
            </div>
        </div>
    )
}

export default Presult