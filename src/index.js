import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom";
import Layout from "./components/Layout";
import Sidebars from './components/Sidebars';
import {Provider} from "react-redux";
import store from "./reducers/store"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Provider store={store}>
                <Layout />
                    <div className="app">
                        <Sidebars />
                        <div className="main-content">
                            <App />
                        </div>
                    </div>
            </Provider>
        </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
