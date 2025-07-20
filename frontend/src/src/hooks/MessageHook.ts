import { http } from '../api/http';
import { React, Component, useState, useEffect } from 'react'
import { useChatStore } from '../store/chatStore';
import { MessagesStore } from '../store/MessagesStrore';
import { MessageData, ChatMessage } from '../types/Message'


export function FetchMessages()
{
	const { pickedChat } = useChatStore();
	const { messages }  = MessagesStore.getState();
	const { setMessages }  = MessagesStore.getState();

	const fetchMessages = async () => {
			
		console.log("fetchMessages",messages);

		if(messages == undefined || messages.length  < 1)
		{
			console.log("Выбран чат такой ", pickedChat.chatId);
			const res = await http.get(`/messages/${pickedChat.chatId}`);
			setMessages(res);
			return;
		}
		else
		{	
			console.log("Выбран чат и такой", pickedChat.chatId);
			const res = await http.get(`/messages/${pickedChat.chatId}`);


		// //найти сообщеняи сущсетвуюшего чата, а если нет, то добавить новый элемент, иначе доабвляем сообщеняи ещё
		console.log("РОШДПШГ", res);
		setMessages(res, messages);
		}

		// if(messages.data.findIndex(chat => chat.data.chatId === pickedChat.chatId) === -1)
		// {	console.log("Already got messages from the chat", messages.data.find(chat => chat.data.chatId === pickedChat.chatId));
		// 	return; 
		// }
		

		console.log("Сделали фетч на получение сообщений по чату ",messages);
		
		//console.log(res);

		
	};

	useEffect(() =>{
		console.log("New chat was2 selecred: ", pickedChat);
		if(pickedChat !== null)
		{
			let found = false;
			messages.forEach(message => { 

				if(message.chatId === pickedChat.chatId)
					{
						found = true;
					} 
				}
				);
			console.log("New chat was selecred: ", pickedChat);
			if(!found)
				fetchMessages();
		}
		
	}, [pickedChat]);
}