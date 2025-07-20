import { WebSocketController } from './WebSocketController';
import { PutMessages } from '../services/PutMessages';
import { SocketGetChat } from '../services/SocketGetChatService';
import { SocketChatRaw, Chat } from '../types/Chats';
import { RawMessageData } from '../types/Messages';
import { Error } from '../types/Error';

export class SocketGetChatController extends WebSocketController
{
	async handle(chatId: number, userId: number) : Promise<Chat| Error>
	{
		if(!this.validation(chatId, userId))
		{
			return {errorMessage: "Некорректные данные!", success: false};
		}

		const gotChat = await new SocketGetChat().startProcess(chatId, userId);

		if('errorMessage' in gotChat)
		{
			return gotChat;
		}

		return gotChat;
	}

	validation(chatId: number, userId: number) : boolean
	{
		if(!userId || userId === -1)
		{
			return false;
		}

		if(!chatId || chatId === -1)
		{
			return false;
		}

		return true;
	}
}