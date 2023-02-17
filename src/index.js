import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let postData = [
    {id: 1, message: 'Текст поста 1', likesCount: 5},
    {id: 2, message: 'Текст поста 2', likesCount: 16},
    {id: 3, message: 'Текст поста 3', likesCount: 11},
    {id: 4, message: 'Текст поста 4', likesCount: 634},
    {id: 5, message: 'Текст поста 5', likesCount: 1},
    {id: 6, message: 'Текст поста 6', likesCount: 2},
]
let dialogsData = [
    {id: 1, name: 'Артёмка'},
    {id: 2, name: 'Валера'},
    {id: 3, name: 'Николай'},
    {id: 4, name: 'Влад'},
    {id: 5, name: 'Путин'},
]
let messagesData = [
    {id: 1, message: 'Message 1'},
    {id: 2, message: 'Message 2'},
    {id: 3, message: 'Message 3'},
    {id: 4, message: 'Message 4'},
    {id: 5, message: 'Message 5'},
]





const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App postData = {postData} dialogData = {dialogsData} messageData = {messagesData}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
