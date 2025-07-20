import { Messages, MessageData } from '../types/Messages';
import { Container } from 'inversify';
import { PrismaClient } from '../generated/prisma/client';

export class GetMessages
{

	private prisma: PrismaClient;

	constructor()
	{
		this.prisma = new PrismaClient();
	}

	public async startProcess(chatId: number) : Promise<Messages>
	{

		const messagesData = await this.prisma.messages.findMany({
			where:{
				chat_id: chatId
			}
		});

		if(!this.validation(messagesData))
		{
			const emptyMessages = {
				chatId: -1,
				messages: []
			};

			return emptyMessages;
		}
		
		const bakedMessages = this.structData(messagesData, chatId);

		return bakedMessages;

	}

	private structData(data: any[], chatId: number): Messages 
	{
		let result: Messages = {
			chatId: chatId,
			messages: []
		};

		data.forEach((message) => {
			result.messages.push({
				messageId: message.id,
			    senderId: message.sender_id,
			    content: message.content,
			});
		});
	    
	    return result;
	}
	

	private validation(data: any) : boolean
	{
		if(Array.isArray(data))
		{
			if(data.length > 0)
			{
				return true;
			}
		}

		return false;
	}
}