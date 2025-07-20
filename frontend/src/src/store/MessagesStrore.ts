import {create} from "zustand";
import { persist } from 'zustand/middleware';
import { http } from '../api/http';
import { ChatMessage, MessageData } from '../types/Message';

interface IMessages
{
	messages: ChatMessage[]; // [{chatId: number, messages: [MessageData, MEssageData}]
	isLoading: boolean;
	error: string | null;
	setMessages: (messages: ChatMessage, data?: any) => void;
}



export const MessagesStore = create<IMessages>()(
	persist(
		(set) => ({

			
			isLoading: true,
			messages: [],
			error: null,
			setMessages: (newMessages, additionalData) => {

				if(newMessages.data.chatId === -1)
				{
					return;
				}

				if(additionalData !== undefined && additionalData.length > 0)
				{
					console.log("ОСН ДАТА", newMessages);
					console.log("ДОП ДАТА", additionalData);
					let found: boolean = false;
					additionalData.forEach(el => {
						if(el.chatId === newMessages.chatId)
						{
							console.log("НАШЛИ ДУБЛЬ БЛЯ И СООБЩЕНИЯ ПОМЕСТИТЬТЬ НАДО НОВЕНЬКИЕ БЛЯ");
							el.messages = [...el.messages, ...newMessages.messages]
							console.log("Проверка элемента", el);

							// let updated = additionalData.messages;
							// console.log("НАШЛИ", updated);
							// updated.messages = [...updated.messages, newMessages.messages];
							//set((state) => ({messages: updated}));
							found = true;
						}
					});
					if(found){
						console.log("GJVTCNBKB CJJ<OTYBT", additionalData);
						set({messages: additionalData});
						return;
					}
				}
				console.log("In the store", newMessages);
				set((state) => ({messages: [...state.messages,newMessages.data]}));
			}

			}),
        { name: "messages1-storage" } // Сохраняем в localStorage (опционально)
		)

	);