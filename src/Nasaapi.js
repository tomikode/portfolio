import React from 'react';
import { useEffect, useState } from 'react';

const Nasaapi = () => {

    const fetchNASA = async () => {
        const res = await fetch('https://api.nasa.gov/planetary/apod?api_key=JGhr810XJpkY24hX8GIM80BznqZ4ax29SXaqs5mU');
        return await res.json();
    }

    const [pic, setPic] = useState(null);
    const [err, setErr] = useState();

    useEffect(() => {
        fetchNASA()
            .then(data => { console.log(data); setPic(data); });
    }, []);

    return (
        <div className="main">
            <div>
                <h1>NASA Picture of the day</h1>
            </div>
            {pic !== null ?
                <div className="nasaPic">
                    <img src={pic.url}></img>
                    <p>{pic.title}</p>
                    <p>{pic.explanation}</p>
                    <p>{pic.date}</p>
                </div>
                : <p>Loading..</p>}
        </div>
    )
}

export default Nasaapi
