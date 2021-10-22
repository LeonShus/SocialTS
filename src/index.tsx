import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {addNewPost, state, subscribe} from "./Redux/MyState";


export const rerenderEntireTree = () => {
    ReactDOM.render(
        <React.StrictMode>
            <App state={state} addNewPost={addNewPost}/>
        </React.StrictMode>,
        document.getElementById('root')
    );
}

rerenderEntireTree()

subscribe(rerenderEntireTree)

reportWebVitals();
