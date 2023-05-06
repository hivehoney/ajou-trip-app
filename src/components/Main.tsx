import React from 'react';
import Data from './Data';
import logo from '../img/logo.svg';
import '../App.css';
import { Link } from 'react-router-dom';

function Main() {
  return (
    <div className="main">
        <img src={logo} className="App-logo" alt="logo" />
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
            <Link className="App-link" to="/Data">Data 체크</Link>
        </>
    </div>
  );
}

export default Main;
