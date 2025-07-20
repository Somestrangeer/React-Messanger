import { React, useState } from "react";
import { useChatStore } from '../store/chatStore';
import { useSearchStore } from '../store/useSearchStore';
import { FetchMessages } from '../hooks/MessageHook';
import { http } from '../api/http';

function Users(){

  const { chats, deletePickedChat } = useChatStore();

  const { searchData, pick } = useSearchStore();

  const PickFromSearch = (chat: any) => {
    pick(chat);
    deletePickedChat();
  };


  return (
      <div className="chat-list">
        {searchData.map(chat => (
          <div key={chat.id} className={`chat-item `} onClick={() => PickFromSearch(chat)}>
            <div className="avatar">

            </div>
            <div className="chat-info">
              <div className="chat-header">
                <p className="chat-name">{chat.name}</p>
                <span className="chat-time"></span>
              </div>
            </div>
            {/*{chat.unread > 0 && (
              <div className="unread-badge">
                {chat.unread}
              </div>
            )}*/}
          </div>
        ))}
      </div>
  );
};

export default Users;