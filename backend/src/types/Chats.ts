export interface ChatRequest
{
	token: string;
	userId: number;
}

export interface ChatModeration
{
	userIdFromQuery: number;
	userIdFromToken: number;
}

export interface Chat
{
	chatId: number;
	chatName: string;
	members: number[];
	lastMessage: string;
	type: string;
}

export interface SocketChatRaw
{
	members: number[];
	message?: string;
	type?: number;
	name?: string;
}

export interface SocketMessageRaw
{
	content: string;
	chatId: number;
	senderId: number;
}