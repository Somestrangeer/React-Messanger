import { React, useState } from "react";
import { useChatStore } from '../store/chatStore';
import { useSearchStore } from '../store/useSearchStore';
import { useCreationGroupStore } from '../store/useCreationGroupStore';
import { FetchMessages } from '../hooks/MessageHook';
import { http } from '../api/http';
import Chats from './Chats';
import Users from './Users';

function ChatSidebar(){
  console.log("WER IN ChatSidebar");
  const { chats, pickChat } = useChatStore();
  const { inSearchMode, searchData, searchSetter, disableSearchMode } = useSearchStore();
  const {showGroupCreateUI } = useCreationGroupStore();

  const setShowGroupCreateUI = useCreationGroupStore(state => state.setShowGroupCreateUI);

  const [searchLine, setSearchLine] = useState('');

  const startSearch = async () => {
    try 
    {
      if(searchLine.length < 1)
        return;
        pickChat(null);
      const response = await http.get('/users', {
        params: {
          name: searchLine
          } 
        });
      if(response.status === 200){
        console.log("Нашли что-то!", response.data);
        searchSetter(response.data);
      }
    } 
    catch (error) 
    {
      console.error('Error fetching users:', error); 
    }
  };

  const ControllShowCreateGroup = () => {

    if(showGroupCreateUI){
      setShowGroupCreateUI(false);
    }
    else{
      setShowGroupCreateUI(true);
    }
  }

  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <div className="sidebar-header-content">        
          <h2 className="sidebar-title">Chats</h2>
          <div>
            👥
          </div>
          <div className="btn-create-group" title="Create group chat" onClick={ControllShowCreateGroup}>➕</div>
        </div>
        <div className="search-container">
          <input 
            type="text"
            placeholder="Search conversations..." 
            className="search-input"
            value={searchLine}
            onChange={(e) => {setSearchLine(e.target.value)}}
          />
          { (!inSearchMode) ? <span className="search-icon" onClick={startSearch}>🔍</span> : <span className="search-icon" onClick={disableSearchMode}>❌</span>}
        </div>
      </div>
      
      {(chats.data.length > 0 && !inSearchMode) ? <Chats /> : ''}

      {(inSearchMode) ?  ( (searchData.length > 0) ? <Users /> : <div className="noFoundDiv"><span className="noFoundText">Nothing was found...</span></div>) : ''}
    </div>

  );
};

export default ChatSidebar;