import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";
import {addNewPost, state} from "./redux/state";


ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <App state={state} addNewPost={addNewPost}/>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
);

reportWebVitals();


