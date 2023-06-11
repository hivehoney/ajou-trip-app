import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Button from 'react-bootstrap/Button';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom";
import Layout from "./components/Layout";
import { Outlet } from 'react-router-dom';
import Sidebars from './components/Sidebars';
import { Flexboard, FlexboardProvider, FlexboardFrame, ResizerType, Position } from '@dorbus/flexboard';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
    <BrowserRouter>
        <Layout />
        <FlexboardProvider>
            <Flexboard
                direction={Position.left}
                draggable={false}
                width={300}
                minWidth={300}
                maxWidth={500}
                flexboardStyle={{ backgroundColor: "#f2f3f4" }}
                resizerStyle={{ backgroundColor: "#f2f3f4" }}
                resizerType={ResizerType.gutterlane}
            >
            <Sidebars />
            </Flexboard>
            <FlexboardFrame>
                <App />
            </FlexboardFrame>
        </FlexboardProvider>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
