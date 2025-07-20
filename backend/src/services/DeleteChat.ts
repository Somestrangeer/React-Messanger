import { Chat } from '../types/Chats';
import { Error } from '../types/Error';
import { Container } from 'inversify';
import { PrismaClient } from '../generated/prisma/client';

export class DeleteChat
{

	private prisma: PrismaClient;

	constructor()
	{
		this.prisma = new PrismaClient();
	}

	public async startProcess(chat: Chat) : Promise<Chat | Error>
	{
		const members = chat.members;

		const deletedChat = await this.prisma.chats.delete({
			where:{
				id: chat.chatId
			}
		});
		console.log("deleted chat -  ", deletedChat);
		return chat;
		//const bakedMessage = this.structData(newMessage);
		//return bakedMessage;


	}

	// private structData(data: any): Messages 
	// // {
	// // 	let result: Messages = {
	// // 		chatId: data.chat_id,
	// // 		messages: [{
	// // 			messageId: data.id,
	// // 			senderId: data.sender_id,
	// // 			content: data.content
	// // 		}]
	// // 	};
	    
	// //     return result;
	// // }
	
}