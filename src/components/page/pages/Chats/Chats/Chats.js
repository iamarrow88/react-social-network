import React from 'react';
import ChatItem from "../chat-item/Chat-Item/Chat-Item";
import style from './Chats.module.css';


const Chats = ({ chatsData }) => {
  const chats = chatsData.map(chatInfo => <ChatItem username={chatInfo.username} lastMessageText={chatInfo.lastMessageText} isMale={chatInfo.isMale} key={chatInfo.id}/> )
  return (
      <section className={style.chats}>
        {chats}
      </section>
  );
};

export default Chats;