import { SocketChatRaw } from '../types/Chats';
import { Error } from '../types/Error';
import { Container } from 'inversify';
import { PrismaClient } from '../generated/prisma/client';

export class CreateChat
{

	private prisma: PrismaClient;

	constructor()
	{
		this.prisma = new PrismaClient();
	}

	public async startProcess(chat: SocketChatRaw, userId: number) : Promise<{chatId: number} | Error>
	{
		
		const data = await this.StartCreatingChat(chat);

		if(data.chatId === - 1)
		{
			return {errorMessage: "Не смогли чат создать!", success: false};
		}

		const allMembers: number[] = [...chat.members, userId]; 
		console.log("Все юзеры:", allMembers);

		for(let i = 0; i < allMembers.length; i++)
		{
			const res = await this.InsertMembersIntoChat({chatId: data.chatId, memberId: allMembers[i]});
			if(!res)
			{
				return {errorMessage: "Не смогли добавить юзеров в чат!", success: false};
			}
		}


		return {chatId: data.chatId};


	}
	private async StartCreatingChat(chat: SocketChatRaw) : Promise<{chatId: number}>
	{
		try
		{
			let type = 1; //private
			if(chat.type)
				type = 2;
			const newChat = await this.prisma.chats.create({
				data:{
					type_id: type,
					name: (type === 2) ? chat.name : null
				}
			});
			if(newChat.id > 0)
			{
				return {chatId: newChat.id};
			}
			return {chatId: -1};

		}
		catch(e)
		{
			console.log("Не смогли создать чат! ");
			return {chatId: -1};
		}
	}

	private async InsertMembersIntoChat(data:{chatId: number, memberId: number}) : Promise<boolean>
	{
		try
		{
			const inserted = await this.prisma.chat_members.create({
				data:{
					chat_id: data.chatId,
					user_id: data.memberId
				}
			});

			if(inserted.chat_id === null)
			{
				return false
			}
			return true;
		}
		catch(e)
		{
			console.log("Не смогли добавить юхзера с озданный чат!", data);
			return false;
		}
	}

	private validation()
	{

	}

	private structData(data: any)
	{
		
	}
	
}