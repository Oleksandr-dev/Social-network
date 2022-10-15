import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";

let dialogsData = [
    {id:1, name:'Sasha',},
    {id:2, name:'Frost',},
    {id:3, name:'Andrew',},
    {id:4, name:'Tania',},
    {id:5, name:'Dima',},
    {id:6, name:'Roman Zap',},
    {id:7, name:'Sasha Avr',},
]
let messageData=[
    {id: 1, message: "Hi",},
    {id: 2, message: "How are you?",},
    {id: 3, message: "Hi, great! And you?",},
]

let postData =[
    {id:1, message:"Hi, how are You?", likeCount:101},
    {id:2, message:"It's my first post", likeCount:51},
]

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <BrowserRouter>
          <App postData={postData} messageData={messageData} dialogsData={dialogsData}/>
      </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
