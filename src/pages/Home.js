import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';
import Layout from "../components/Layout";
import axios from "axios";

function Home() {
    
    axios({
        //request
        method: "get",
        url: "http://127.0.0.1:8000/place/sigs",
        responseType: "type"
    }).then(function (response) {
        console.log(response)
        // response Action
    });

    return (
        <>
            
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
            <>
                    <Link className="App-link" to="/Map">네이버지도</Link>
                </>
            <div className="main"> </div>
        </>

    );
}

export default Home;
