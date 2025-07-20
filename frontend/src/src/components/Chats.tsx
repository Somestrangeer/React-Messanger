import { React, useState, useRef } from "react";
import { useChatStore } from '../store/chatStore';
import { useCreationGroupStore } from '../store/useCreationGroupStore';
import { UserAuthStore } from '../store/userStore';
import { http } from '../api/http';
import { useSocket } from '../hooks/useSocket';

function Chats(props){
  console.log('WER IN Chats');
  const { chats, pickedChat } = useChatStore();
  const pickChat = useChatStore(state => state.pickChat);
  const {deleteChatOrGroup} = useSocket();

  const { users, setUsers } = useCreationGroupStore();
  const { userId } = UserAuthStore();

  const [contextMenu, setContextMenu] = useState<{
    visible: boolean;
    x: number;
    y: number;
    chat: any | null;
  }>({
    visible: false,
    x: 0,
    y: 0,
    chat: null,
  });
  

  const ProcessAction = (chat: any) =>
  {
    if(props.CreateMode)
    {
      const user = chat.members.find((user: number) => user !== userId);

      const alreadyAdded = users.find((userfromUsers: any) => userfromUsers.id === user);

      if(alreadyAdded)
      {
        const addedUsers = users.filter(member => member.id !== alreadyAdded.id);
        setUsers(addedUsers);
        return;
      }
        
      const addedUsers = [...users, {id: user}];

      setUsers(addedUsers);

      console.log(users); 

    }
    else
    {
      console.log("Выбрал чат", chat);
      pickChat(chat);
      console.log("Выбранный чат", pickedChat);
    }
  }

  const ControlActiveState = (chat: any): string => 
  {
    if(props.CreateMode)
    {
      //find the user we picked to add to the group
      const userIdFromchat = chat.members.find((user: number) => user !== userId);

      if(userIdFromchat)
      {
        const foundUserInSelected = users.find((user: any) => user.id === userIdFromchat);
        if(foundUserInSelected)
        {
          return 'active';
        }
      }
    }
    else
    {
      return (pickedChat) ? (chat.chatId == pickedChat.chatId ? 'active': '') : '';
    }
  }
  const handleContextMenu = (e: React.MouseEvent, chat: any) => {
    e.preventDefault(); // Отключаем стандартное контекстное меню
    
    setContextMenu({
      visible: true,
      x: e.clientX,
      y: e.clientY,
      chat: chat,
    });
  };

  const handleMenuAction = (action: string) => {
    console.log(`${action} для чата ${contextMenu.chat}`);
    switch (action){
      case "delete": 
        deleteChatOrGroup(contextMenu.chat)
    }
  };

  const renderChatItem = (chat) => {
    if (chat.type === 'group' && props.CreateMode) {
      return null; // Не рендерим ничего для групповых чатов
    }

    return (
      <div key={chat.chatId} className={`chat-item ${ControlActiveState(chat)}`}
                onClick={() => ProcessAction(chat)} onContextMenu={(e) => handleContextMenu(e, chat)}>
        <div className="avatar">
          А
        </div>
        <div className="chat-info">
          <div className="chat-header">
            <p className="chat-name">{chat.chatName}</p>
            <span className="chat-time"></span>
          </div>
          <p className="chat-message">{(!props.CreateMode) ? chat.lastMessage : ''}</p>
        </div>
            {/*{chat.unread > 0 && (
              <div className="unread-badge">
                {chat.unread}
              </div>
            )}*/}
      </div>
    );
  };

  return (
  <div className="chat-list">
        {chats.data.map(renderChatItem)}
        {contextMenu.visible && (
        <div

          className="context-menu"
          style={{
            position: 'fixed',
            left: `${contextMenu.x}px`,
            top: `${contextMenu.y}px`,
            zIndex: 1000,
          }}
        >
          <div className="menu-header">Что делаем с {contextMenu.chat.type === 'group' ? 'группой?' : "чатом?"} </div>
          <div className="menu-item" onClick={() => handleMenuAction('delete')}>Удалить</div>
          <div className="menu-item" >Закрепить</div>
        </div>
      )}
      </div>
      
  );
};

export default Chats;