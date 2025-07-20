
export interface MessageData
{
    messageId: number;
    senderId: number;
    content: string;
}

//relation with chats
export interface ChatMessage
{
    chatId: number;
    messages: MessageData[];
}