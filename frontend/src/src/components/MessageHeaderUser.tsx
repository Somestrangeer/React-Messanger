import { React } from "react";
import { useChatStore } from "../store/chatStore";
import { useSearchStore } from "../store/useSearchStore";


function MessageHeaderUser(){

  const { pickedChat } = useChatStore();

  const { pickedFromSearch } = useSearchStore();


  return (
    <div className="messages-header">
        <div className="user-info">
          <div className="avatar">
            A
          </div>
          <div>
            <h2 className="user-name">{(pickedChat) ? pickedChat.chatName : pickedFromSearch.name}</h2>
            <p className="user-status">Online</p>
          </div>
        </div>
    </div>
  );
};

export default MessageHeaderUser;