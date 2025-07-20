export interface MessagesRequest
{
	token: string;
	chatId: number;
}

export interface MessageData
{
	messageId: number;
    senderId: number;
    content: string;
}

export interface Messages
{
	chatId: number;
	messages: MessageData[];
}

export interface RawMessageData
{
	content: string;
	senderId: number;
	chatId: number;
}