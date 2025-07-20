import { Server as SocketServer } from 'socket.io';
import { ChatMembers } from './ChatMembers';
import { Error } from '../types/Error';

export class BroadcastService
{
	constructor(private io: SocketServer, private activeSockets: Map<number, string>){}

	async broadcast(chatId: number | number[], eventName: string, data: any) : Promise<void | Error>
	{
		let users: number | number[] | Error;
		if(!Array.isArray(chatId))
		{
			users = await new ChatMembers().startProcess(chatId);
		}
		else
		{
			users = chatId;
		}

		if(!this.validation(users))
		{
			return {errorMessage: "Smth went wrong", success: false};
		}

		if(Array.isArray(users))
		{
			console.log("Check activeSockets", this.activeSockets);
			users.forEach((user: number) => {
				const socketId = this.activeSockets.get(user);
				if(socketId)
				{
					console.log("Юзеру отправляем", socketId);
					console.log("Event is ", eventName);
					this.io.to(socketId).emit(eventName, data);
				}
			});
		}
	}

	private validation(data: any) : boolean
	{
		if(!data)
		{
			return false;
		}
		if('errorMessage' in data)
		{
			return false;
		}

		

		return true;
	}

}