import { ChatRequest, Chat } from '../types/Chats';
import { Container } from 'inversify';
import { PrismaClient } from '../generated/prisma/client';

export class GetChats
{

	private prisma: PrismaClient;

	constructor()
	{
		this.prisma = new PrismaClient();
	}

	public async startProcess(userId: number) : Promise<Chat[]>
	{
		const chatData = await this.prisma.chats.findMany({
		  where: {
		    chat_members: {
		      some: {
		        user_id: userId
		      }
		    }
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
			const emptyChats: Chat[] = [];

			return emptyChats;
		}

		const bakedChatData = this.structData(chatData, userId);

		return bakedChatData;
	}

	private structData(data: any[], userId: number): Chat[] 
	{
	    return data.map((chat: any) => ({
	        chatId: chat.id,
	        chatName: this.defineChatName(chat,userId),
	        type: chat.chat_types?.type,
	        members: chat.chat_members?.map((member: any) => member.user_id) || [],
	        lastMessage: chat.messages?.[0]?.content
	    }));
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