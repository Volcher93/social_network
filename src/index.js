import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

//SERVER DATA SIMULATION
let posts = [
    {id: 1, message: 'It`s my first post', likesCount: 6},
    {id: 2, message: 'Hi, how are you?', likesCount: 1}
];
let dialogs = [
    {id: 1, name: 'Ben'},
    {id: 2, name: 'Nuke'},
    {id: 3, name: 'Adgarh'},
    {id: 4, name: 'Niko'},
    {id: 5, name: 'Greenleaf'},
    {id: 6, name: 'Frost'}
];
let messages = [
    {id: 1, message: 'Hello'},
    {id: 2, message: 'When will we go hiking?'},
    {id: 3, message: 'We will go to Naroch?'}
];
//END OF DATA

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App posts={posts} dialogs={dialogs} messages={messages}/>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
