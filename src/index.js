import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const chatsData = [
  { id: 0, username: 'Nick', lastMessageText: 'Hello',
    isMale: true },
  { id: 1, username: 'Marina', lastMessageText: 'Yes, I do',
    isMale: false },
  { id: 2, username: 'Syntia Sparks', lastMessageText: 'So, We\'ll be waiting for you tomorrow at 2 pm! Till tomorrow!',
    isMale: false },
  { id: 3, username: 'Alex', lastMessageText: 'I learn Vue and you?',
    isMale: true },
  { id: 4, username: 'Sonya', lastMessageText: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
    isMale: false },
  { id: 5, username: 'Tex', lastMessageText: 'Quam.',
    isMale: true },
];

const userData = {
  username: 'Nicolas',
  age: 18,
  isMale: true,
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App chats={chatsData} userInfo={userData} />
  </React.StrictMode>
);

