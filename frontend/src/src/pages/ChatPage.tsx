import { React, Component, useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { UserAuthStore } from '../store/userStore';
import { useChatStore } from '../store/chatStore';
import { useCreationGroupStore } from '../store/useCreationGroupStore';
import { useSearchStore } from '../store/useSearchStore';
import { socket } from '../api/socket';
import { http } from '../api/http';
import  ChatSidebar  from '../components/ChatSidebar';
import ChatMessages  from '../components/ChatMessages';
import { FetchMessages } from '../hooks/MessageHook';
import CreateGroupComponent  from '../components/CreateGroupComponent';


function ChatPage()
{

	//ЗАНЕСТИ В ЮЗ ЭФФЕКТ
	const token = UserAuthStore.getState().token;
	const navigate = useNavigate();

	const { isLoading, error, fetchChats, pickedChat, chats } = useChatStore();
	const { pickedFromSearch } = useSearchStore();

	const {showGroupCreateUI } = useCreationGroupStore();

	console.log("Из поиска выбран был= ", pickedFromSearch);

	useEffect(() => { 

	 	if(!token)
		{
			navigate('/auth');
			return;
		}
	 	console.log('We go to get all chats now');
	 	
        fetchChats(); // Загружаем чаты при монтировании
    }, []);

    FetchMessages();

	return (
		<div className="chat-grid">
		
		{ (chats.length < 1) ? '' : <ChatSidebar/> }
		{ (pickedChat || pickedFromSearch) ? <ChatMessages/> : ''}
		{ (showGroupCreateUI) ? <CreateGroupComponent />: ''}
	   </div>
	   
	  );
	}

export default ChatPage;