import { WebSocketController } from './WebSocketController';
import { DeleteChat } from '../services/DeleteChat';
import { Chat } from '../types/Chats';
import { Error } from '../types/Error';

export class SocketDeleteChats extends WebSocketController
{
	async handle(data: Chat, userId: number) : Promise<Chat | Error>
	{
		if(!this.validation(data, userId))
		{
			return {errorMessage: "Некорректные данные!", success: false};
		}

		const deleted = await new DeleteChat().startProcess(data);

		return deleted;
	}

	validation(data: Chat, userId: number) : boolean
	{
		if(!data)
		{
			return false;
		}

		if(!data.chatId || !data.chatName || !data.type || !data.lastMessage || data.members.length < 0)
		{
			return false;
		}

		return true;
	}
}