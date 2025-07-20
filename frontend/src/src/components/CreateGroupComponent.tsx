import { React, useState } from "react";
import Chats from './Chats';
import { useCreationGroupStore } from '../store/useCreationGroupStore';
import { UserAuthStore } from '../store/userStore';
import { useSocket } from '../hooks/useSocket';

function CreateGroupComponent(){

   const [groupName, setGroupName] = useState('');
   const { users } = useCreationGroupStore();
   const { userId } = UserAuthStore();

   const { CreateGroup } = useSocket();

   const CreateNewGroup = () => {
    if(groupName.trim() === '')
    {
      return;
    }

    const bakedMembers: number[] = users.map((member: number) => member.id);

    const data = {
      members: bakedMembers,
      name: groupName,
      type: 2
    };

    CreateGroup(data);
   }



  return (
      <div className="create-group-container">
        <div className={`chat-item `}>
            <div className="avatar-create-chat">
              📷
            </div>
            <div className="chat-info">
              <div className="chat-header">
                <p className="chat-name">Название чата</p>
              </div>
              <input placeholder="Type a message..." className="message-input" type="text" 
              value={groupName} onChange={(e) => setGroupName(e.target.value)}/>
            </div>
          </div>
          <div >Add people:</div>
          <div className="all-contacts">
            <Chats CreateMode={true} />
          </div>
          <div className="create-group-btn" onClick={CreateNewGroup}>
            <p>Create chat</p>
          </div>
      </div>
  );
};

export default CreateGroupComponent;