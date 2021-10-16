import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {PostDataType} from "./Components/Profile/MyPosts/MyPosts";
import {MessagesType, UsersType} from "./Components/Dialogs/Dialogs";

export type StateType = {
    postData: Array<PostDataType>
    message: Array<MessagesType>
    users: Array<UsersType>
}

const state: StateType = {
    postData: [
        { id: 1, message: 'Hello, Boy', likeCount: 10},
        { id: 2, message: 'Boy', likeCount: 33}
    ],
    message: [
        { id: 1, message: "Im your father" },
        { id: 2, message: "Hello Boy!" },
        { id: 2, message: "It's a joke;3" }
    ],
    users: [
        {id: 1, name: "Leon"},
        {id: 2, name: "Alex"}
    ]
}

ReactDOM.render(
  <React.StrictMode>
    <App state={state}/>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
