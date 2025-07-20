import {create} from "zustand";
import { persist } from 'zustand/middleware';
import { http } from '../api/http';
import { Chat } from '../types/Chat';
import { UserAuthStore } from './userStore';

interface ChatStore
{
	chats: Chat[];
	isLoading: boolean;
	error: string | null;
    pickedChat: Chat | null;
    pickChat: (chat: any) => void;
    deletePickedChat: () => void;
	fetchChats: () => Promise<void>;
	setChats: (chats: Chat[]) => void;
}

export const useChatStore = create<ChatStore>()(
    persist(
        (set) => ({
            chats: [],
            isLoading: false,
            error: null,
            pickedChat: null,
            pickChat: (chat) =>{
                console.log("В харнилище выбран новый чат", chat);
                set({pickedChat: chat});
            },
            deletePickedChat: () => { console.log("Убрали выбранный чат!");set({pickedChat: null})},
            // Загрузка чатов
            fetchChats: async () => {
                set({ isLoading: true, error: null });
                try 
                {   
                    const userId = UserAuthStore.getState().userId;
                    const response = await http.get(`/chats/${userId}`);

                    set({ chats: response.data, isLoading: false });
                } 
                catch (error) 
                {
                    set({ error: "Ошибка загрузки чатов", isLoading: false });
                }
            },
            
            // Ручное обновление чатов
            setChats: (chats) => set({ chats }),
        }),
        { name: "chat-storage" } // Сохраняем в localStorage (опционально)
    )
);