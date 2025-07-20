import { React, useState } from "react";
import { MessagesStore } from "../store/MessagesStrore";
import { useChatStore } from "../store/chatStore";
import { UserAuthStore } from "../store/userStore"

import { useSocket } from '../hooks/useSocket';


function Messages(){

  const { messages } = MessagesStore();
  const { pickedChat } = useChatStore();
  const { userId } = UserAuthStore();
  
  console.log("MESSAHESSS",messages);

  if(messages)
  {
    if(messages.length < 1)
    {
      console.log("Пока сообщенйи нет!1");
      return '';
    }
  }
  else
  {
    console.log("Пока сообщенйи нет!");
    return '';
  }
  console.log("ferere",pickedChat);
  let foundIndex = -1;

    for (let i = 0; i < messages.length; i++) {

      // console.log(i,'iteration');
      // console.log("messages[i].chatId", messages[i].data.chatId);
      // console.log('pickedChat.chatId', pickedChat.chatId);
      console.log("СМОТРИМ!!!", messages[i]);
      console.log("СМОТРИМ!!!1", pickedChat);
      if (messages[i].chatId === pickedChat.chatId) 
      {

          foundIndex = i;

          break; // Выход из цикла, если найден элемент
      }
  }
  console.log("all message", messages);
  console.log("HERE", foundIndex);
  if(foundIndex === -1){
    console.log("НЕт сообщений");
    return (<div className="messages-container no_message"> No messages yet...</div>);
  }
  

  

  return (

      <>
        {(foundIndex !== -1 ) ?messages[foundIndex].messages.map((message) => (
          <div key={message.messageId} 
                className={`message message-${(message.senderId == userId) ? 'outgoing' : 'incoming'}`}>
            <div className="message-content">{message.content}</div>
            <div className="message-time"></div>
          </div>
        )) : ""}
      </>
  );
};

export default Messages;