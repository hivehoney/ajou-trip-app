import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';
import axios from "axios";

function Home() {
    axios({
        //request
        method: "get",
        url: "http://127.0.0.1:8000/hello/ddd",
        responseType: "type"
    }).then(function (response) {
        console.log(response)
        // response Action
    });

    return (
        <div className="main">
            <p>
                Edit <code>src/App.tsx</code> and save to reload.
            </p>
            <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
            >
                Learn React
            </a>
            <header />
            <>
                <Link className="App-link" to="/Map">네이버지도</Link>
            </>
        </div>
    );
}

export default Home;
