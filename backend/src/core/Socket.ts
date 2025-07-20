import { Server as SocketServer } from 'socket.io';
import { Server as HttpServer } from 'http';
import { Application as ExpressApp } from 'express';
import { verifyJwtToken } from '../utils/TokenGeneration';
import { SocketMessageController } from '../controllers/SocketMessageController';
import { SocketCreateChatController } from '../controllers/SocketChatController';
import { SocketGetChatController } from '../controllers/SocketGetChatController';
import { SocketDeleteChats } from '../controllers/SocketDeleteChats';
import { BroadcastService } from '../services/BroadcastService';


export class Socket{

	private io: SocketServer;
	private activeSockets = new Map<number, string>();//userId: sokcetId

	private broadcastService: BroadcastService;

	constructor(private httpServer: HttpServer){
		this.io = new SocketServer(this.httpServer, {
			cors: {origin: '*'}
		});

		this.broadcastService = new BroadcastService(this.io, this.activeSockets);
	}


	public initSocket(){
		this.io.on('connection', (socket) => {
			const token = socket.handshake.auth.token;

			if(!token){
				console.log("No token in Socket!");
				socket.emit('error:noToken', {error: 'no token!', success: false});
				return;
				throw new Error('Token required');
			}
			try
			{
				const data = verifyJwtToken(token);

				if ('userId' in data)
    				this.activeSockets.set(Number(data.userId), socket.id);
    			else{
    				return;
    			}

    			socket.on('message:send', async (messageData: any) =>
    			{
    				console.log("По сокету поулчили данные от юзера", messageData);
    				const savedMessage = await new SocketMessageController().handle(messageData,Number(data.userId));
    				console.log("По сокету отдаю сообзение ", savedMessage);
    				this.broadcastService.broadcast(messageData.chatId, "message:get", savedMessage);

    			});

    			socket.on('createChat:send', async (newChat: any) =>
    			{
    				console.log("По сокету поулчили данные от юзера на созданеи чата", newChat);
    				const chatId = await new SocketCreateChatController().handle(newChat, Number(data.userId));

    				if('errorMessage' in chatId)
					{
						console.log(chatId);
						return;
					}

    				const savedMessage = await new SocketMessageController().handle({
    					content:newChat.message, 
    					senderId: Number(data.userId), 
    					chatId: Number(chatId.chatId)}, 
    					Number(data.userId));
    				console.log("Сохраненное сообщение - ", savedMessage);
    				const chat = await new SocketGetChatController().handle(Number(chatId.chatId), Number(data.userId));

    				this.broadcastService.broadcast(Number(chatId.chatId), "createChat:get", chat);

    			});

    			socket.on('createGroup:send', async (newGroup: any) => {
    				console.log("По сокету поулчили данные от юзера на созданеи группы", newGroup);
    				const chatId = await new SocketCreateChatController().handle(newGroup, Number(data.userId));
    				if('errorMessage' in chatId)
					{
						console.log(chatId);
						return;
					}
    				const chat = await new SocketGetChatController().handle(Number(chatId.chatId), Number(data.userId));

    				this.broadcastService.broadcast(Number(chatId.chatId), "createGroup:get", chat);

    			});

    			socket.on('group:delete', async (Group: any) => {
    				console.log("По сокету поулчили данные от юзера на удаление группы", Group);
    				const deletedChat = await new SocketDeleteChats().handle(Group, Number(data.userId));
    				console.log("ЧЕТ ПОЛУКЧИЛИ", deletedChat);
    				if('members' in deletedChat)
    					this.broadcastService.broadcast(deletedChat.members, "group:get-delete", deletedChat);

    			});


				console.log('Socket connected:', this.activeSockets);
			}
			catch(e)
			{
				console.log("idi nahui");
			}
			
		});
	}

	// private async broadcastChatMembers(chatId: number, eventName: string, messageData: any) : Promise<void>
	// {
	// 	const chatMembers = await new ChatMembers().startProcess(chatId);

	// 	if('errorMessage' in chatMembers)
	// 	{
	// 		return;
	// 	}

	// 	console.log("Вот мы отправляем данные и все сокеты за юзерайди", this.activeSockets);
	// 	chatMembers.forEach((userId: number) => {
	// 		const userIdStr = userId as unknown as string;
	// 		const socketId = this.activeSockets.get(userIdStr);
	// 		if(socketId)
	// 		{	
	// 			console.log("Вот данные по сокету отправляем", messageData);
	// 			this.io.to(socketId).emit(eventName, messageData);
	// 			return;
	// 		}
	// 	});


	// }

}