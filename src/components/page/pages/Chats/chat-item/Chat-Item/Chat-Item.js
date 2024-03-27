import React from 'react';
import LastMessage from "../Last-Message/Last-Message";
import style from './Chat-Item.module.css';
import maleAvatar from './avatar-male.png';
import femaleAvatar from './avatar-female.png';
const ChatItem = ({ username, lastMessageText, isMale }) => {
  return (
      <div className={style.chatItem}>
        <div className={style.avatarWrapper}>
          <img src={isMale
              ? maleAvatar : femaleAvatar} className={style.avatar} alt="user's avatar"/>
        </div>
        <div className={style.userInfo}>
          <div className={style.name}>{username}</div>
          <LastMessage lastMessageText={lastMessageText}/>
        </div>
      </div>
  );
};

export default ChatItem;