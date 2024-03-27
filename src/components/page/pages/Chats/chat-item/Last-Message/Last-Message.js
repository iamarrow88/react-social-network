import React from 'react';
import style from './Last-Message.module.css';

const LastMessage = ({lastMessageText}) => {
  return (
      <div className={style.unselectedDialogMessage}>{lastMessageText}</div>
  );
};

export default LastMessage;