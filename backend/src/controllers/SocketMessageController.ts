import { WebSocketController } from './WebSocketController';
import { PutMessages } from '../services/PutMessages';
import { RawMessageData, Messages } from '../types/Messages';
import { Error } from '../types/Error';

export class SocketMessageController extends WebSocketController
{
	async handle(data: RawMessageData, userId: number) : Promise<Messages | Error>
	{
		if(!this.validation(data, userId))
		{
			return {errorMessage: "Некорректные данные!", success: false};
		}

		const savedMessage = await new PutMessages().startProcess(data);

		return savedMessage;
	}

	validation(data: RawMessageData, userId: number) : boolean
	{
		if(!data)
		{
			return false;
		}

		if(!data.content || !data.senderId || !data.chatId)
		{
			return false;
		}

		return true;
	}
}