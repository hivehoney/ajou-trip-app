import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom";
import Layout from "./components/Layout";
import Sidebars from './components/Sidebars';
import { Flexboard, FlexboardProvider, FlexboardFrame, ResizerType, Position } from '@dorbus/flexboard';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <BrowserRouter>
        <Layout />
            <div className="app">
                <Sidebars />
                <div className="main-content">
                    <App />
                </div>
            </div>
        </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
