import React from 'react';
import { useState } from 'react';

const Pwc = () => {
    let warning;
    let current;
    const [warn, setWarn] = useState();

    const onPchange = (e) => {
        warning = "";
        setWarn();
        current = e.target.value;
        if (current === "")
            return;
        if (current.length < 8)
            warning += "- Password must be longer than 7 characters \n";
        let num = false, spec = false, upper = false;
        for (let c of current){
            if ("0123456789".includes(c))
                num = true;
            if ("!@#$%^&*()-_=+".includes(c))
                spec = true;
            if ("QWERTYUIOPASDFGHJKLZXCVBNM".includes(c))
                upper = true;
        }
        if (num === false)
            warning += "- Password must have a number\n";
        if (spec === false)
            warning += "- Password must have a special character\n";
        if (upper === false)
            warning += "- Password must have a uppercase character\n";
        if (warning === "")
            warning = "- Password is valid"
        setWarn(warning);
    }

    return (
        <div className="main">
            <h1>Password checker</h1>
            <input className="pwcInput" type="text" name="pwd" onChange={onPchange} placeholder="Enter password..."/>
            <br />
            <pre className={warn === "- Password is valid" ? "green" : "warn"}>{warn}</pre>
        </div>
    )
}

export default Pwc
