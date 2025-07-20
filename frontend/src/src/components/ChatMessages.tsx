import { React, useState } from "react";
import { MessagesStore } from "../store/MessagesStrore";
import { useChatStore } from "../store/chatStore";
import { UserAuthStore } from "../store/userStore"
import { useSearchStore } from "../store/useSearchStore";
import { useSocket } from '../hooks/useSocket';
import  Messages  from './Messages';
import  MessageHeaderUser  from './MessageHeaderUser';
import  MessageHeaderGroup  from './MessageHeaderGroup';


function ChatMessages(){

  const { messagesAll } = MessagesStore();
  const { pickedChat } = useChatStore();
  const { userId } = UserAuthStore();

  const [ messageContent, setMessageContent ] = useState<string>('');

  const { SendMessage } = useSocket();
  const { CreateNewChat } = useSocket();

  const { pickedFromSearch } = useSearchStore();

  console.log("Из поска выбран был " , pickedFromSearch);
  console.log("Просто был выбран " , pickedChat);

  let headerComponent;

  if (pickedChat && pickedChat.type === 'private') 
  { 
    console.log("1");
    headerComponent = <MessageHeaderUser />;
  } 
  else if (pickedChat && pickedChat.type === 'group') 
  {
    console.log("2");
    headerComponent = <MessageHeaderGroup />;
  } 
  else if (pickedFromSearch && pickedFromSearch.type === 'private') 
  { 
    console.log("3");
    headerComponent = <MessageHeaderUser />;
  } 
  else if (pickedFromSearch && pickedFromSearch.type === 'group') 
  { 
    console.log("3");
    headerComponent = <MessageHeaderUser />;
  } 
  else 
  { 
    headerComponent = null;
  }

  const SendMessageBySocket = () =>
  {

    setMessageContent("");
    const fromSearch = (pickedFromSearch) ? true : false;

    console.log("Идём из сёрча?", fromSearch);

    if(!fromSearch)
      SendMessage({content: messageContent, senderId: userId, chatId: pickedChat.chatId}, fromSearch);
    else
      CreateNewChat({members:[pickedFromSearch.id],message:messageContent});
    
  };

  return (
    <div className="messages-container">
      {(headerComponent === null) ? "" : headerComponent}
      <div className="messages-list">
        {(pickedChat) ? <Messages /> : ''}
      </div>
      <div className="input-area">
        <div className="message-form">
          <button className="icon-button">
            📎
          </button>
          
          <input 
            type="text"
            placeholder="Type a message..." 
            className="message-input"
            value={messageContent}
            onChange={(e) => setMessageContent(e.target.value)}
          />
          
          <button className="icon-button">
            😊
          </button>
          
          <button className="send-button" onClick={() => SendMessageBySocket()}>
            ↗️
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatMessages;