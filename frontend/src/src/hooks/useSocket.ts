import { useEffect, useRef } from 'react';
import { socket, updateSocketAuth } from '../api/socket';

export const useSocket = () => {


	const SendMessage = (messageData: any) => {

		updateSocketAuth();
		
		if(socket.connected)
		{
			socket.emit('message:send', messageData);
			console.log("ХОПАНА СООБЩЕНИЕ ОТПРАВИЛ", messageData);
		}
		else
		{
			
			console.error('Socket not connected');
		}
	};

	const CreateNewChat = (data: any) => {

		updateSocketAuth();

		if(socket.connected)
		{
			socket.emit('createChat:send', data);
			console.log("ХОПАНА СОЗДАЛИ ЧАТ", socket.id);
		}
		else
		{
			console.error("Socket not connected");
		}
	};

	const CreateGroup = (data: any) => {

		updateSocketAuth();

		if(socket.connected)
		{
			socket.emit('createGroup:send', data);
			console.log("ХОПАНА СОЗДАЛИ ГРУППУ", data);
		}
		else
		{
			console.error("Socket not connected");
		}
		
	};

	const deleteChatOrGroup = (data: any) => 
	{
		updateSocketAuth();

		if(socket.connected)
		{
			socket.emit('group:delete', data);
			console.log("ХОПАНА УДАЛИЛИЛ ЭТА У ВСЕХ НА КАВКАЗЕ", data);
		}
		else
		{	
			updateSocketAuth();
			console.error("Socket not connected");
		}
	}

	// const on = (event: string, callback: (data: any) => void) => {
	// 	socket.on(event, callback);

	// 	return () => socket.off(event, callback);
	// } ;

	return {SendMessage, CreateNewChat, CreateGroup, deleteChatOrGroup};
};

