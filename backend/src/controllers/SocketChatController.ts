import { WebSocketController } from './WebSocketController';
import { PutMessages } from '../services/PutMessages';
import { CreateChat } from '../services/CreateChat';
import { SocketChatRaw, Chat } from '../types/Chats';
import { RawMessageData } from '../types/Messages';
import { Error } from '../types/Error';

export class SocketCreateChatController extends WebSocketController
{
	async handle(data: SocketChatRaw, userId: number) : Promise<{chatId: number} | Error>
	{
		if(!this.validation(data, userId))
		{
			return {errorMessage: "Некорректные данные!", success: false};
		}

		const createdChat = await new CreateChat().startProcess(data,userId);

		if('errorMessage' in createdChat)
		{
			return createdChat;
		}

		return createdChat;
	}

	validation(data: SocketChatRaw,  userId: number) : boolean
	{
		if(!userId || userId === -1)
		{
			return false;
		}

		if(!data.members || data.members.length < 1)
		{
			return false;
		}

		if(!data.type)
		{
			if(!data.message || data.message.trim() === "")
			{
				return false;
			}
		}
		else
		{
			if(!data.name)
			{
				return false;
			}
		}
		

		return true;
	}
}