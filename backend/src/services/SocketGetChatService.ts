import { ChatRequest, Chat } from '../types/Chats';
import { Container } from 'inversify';
import { PrismaClient } from '../generated/prisma/client';

export class SocketGetChat
{

	private prisma: PrismaClient;

	constructor()
	{
		this.prisma = new PrismaClient();
	}

	public async startProcess(chatId: number, userId: number) : Promise<Chat>
	{
		const chatData = await this.prisma.chats.findMany({
		  where: {
		    id: chatId
		  },
		  include: {
		    chat_types: {
		      select: {
		        type: true
		      }
		    },
		    chat_members: {
		      include: {
		        users: {
		          select: {
		            id: true,
		            name: true
		          }
		        }
		      }
		    },
		    messages: {
		      orderBy: {
		        timestamp: 'desc'
		      },
		      take: 1
		    }
		  }
		});

		if(!this.validation(chatData))
		{
			return <Chat>{};
		}

		const bakedChatData = this.structData(chatData, userId);

		if(!this.moderation(bakedChatData, userId))
		{
			console.log("Чел хочет получить чат, ноего там нет!", userId);
			return <Chat>{};
		}

		return bakedChatData;
	}

	private structData(data: any[], userId: number): Chat
	{
		return {
			chatId: data[0].id,
			chatName: this.defineChatName(data[0], userId),
			type: data[0].chat_types?.type,
			members: data[0].chat_members?.map((member: any) => member.user_id) || [],
			lastMessage: data[0].messages?.[0]?.content
		};
	}

	private defineChatName(chatData: any, userId: number) : string
	{
		const chatName: string = chatData.name;

		if(!chatName)
		{
			for(const item of chatData.chat_members)
			{
				if(item.user_id == userId)
				{
					continue;
				}

				return item.users.name as string;
			}
		}
		return chatName;
	}

	private moderation(chat: Chat, userId: number) : boolean
	{
		if(chat.members.includes(userId))
		{
			return true;
		}

		return false;
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