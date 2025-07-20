import { RawMessageData, Messages } from '../types/Messages';
import { Error } from '../types/Error';
import { Container } from 'inversify';
import { PrismaClient } from '../generated/prisma/client';

export class PutMessages
{

	private prisma: PrismaClient;

	constructor()
	{
		this.prisma = new PrismaClient();
	}

	public async startProcess(message: RawMessageData) : Promise<Messages | Error>
	{
		const newMessage = await this.prisma.messages.create({
			data:{
				content: message.content,
				sender_id: message.senderId,
				chat_id: message.chatId
			}
		});

		const bakedMessage = this.structData(newMessage);
		return bakedMessage;


	}

	private structData(data: any): Messages 
	{
		let result: Messages = {
			chatId: data.chat_id,
			messages: [{
				messageId: data.id,
				senderId: data.sender_id,
				content: data.content
			}]
		};
	    
	    return result;
	}
	
}