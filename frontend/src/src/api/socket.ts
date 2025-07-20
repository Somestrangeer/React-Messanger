import { io } from 'socket.io-client';
import { UserAuthStore } from '../store/userStore';
import { MessagesStore } from '../store/MessagesStrore';
import { useSearchStore } from '../store/useSearchStore';
import { useChatStore } from '../store/chatStore';
import { useCreationGroupStore } from '../store/useCreationGroupStore';

// Глобальный экземпляр сокета
export const socket = io("http://localhost:5000", {
  auth: { 
    token: UserAuthStore.getState().token 
  },
  autoConnect: false,
  reconnectionAttempts: 3,
  reconnectionDelay: 1000
});

const initSocketListeners = () => {
  socket.on("message:get", (message: any) => { console.log("НОВОЕ СООБЩЕНИЕ", message);
    const { setMessages, messages } = MessagesStore.getState();
    console.log(messages);
    setMessages(message, messages);
  });

  socket.on("error:noToken", (error: any) => { 
    console.log(error.error);
    disconnectSocket();
  });

  socket.on("error:degug", (error: any) => { 
    console.error(error.error);
  });

  socket.on("createChat:get", (chat: any) => { 
    console.log("ВОт он новый чат тебе", chat);
    const { chats, setChats, pickChat } = useChatStore.getState();
    const { disableSearchMode } = useSearchStore.getState();
    console.log(chats);
    chats.data = [...chats.data, chat];

    setChats(chats);
    disableSearchMode();
    pickChat(chat);

  });

  socket.on("createGroup:get", (chat: any) => { 
    console.log("ВОт она новая группа тебе", chat);

    const { chats, setChats, pickChat } = useChatStore.getState();
    const { cleanStack, setShowGroupCreateUI } = useCreationGroupStore.getState();

    cleanStack();
    setShowGroupCreateUI(false);

    chats.data = [...chats.data, chat];
    setChats(chats);
    pickChat(chat);

  });
  socket.on('group:get-delete', (chat: any) => {
   console.log("ВОт удаляю", chat);
    const { chats, setChats, pickChat, deletePickedChat } = useChatStore.getState();
    console.log("ВОт чаты до удаление", chats);
    const updatedChats = chats.data.filter(existingChat => existingChat.chatId !== chat.chatId);
    console.log("АПДЭЙТ ЧАТОВ", chat);
    console.log("АПДЭЙТ ЧАТОВ", updatedChats);
     setChats({
        ...chats,  // сохраняем остальные поля состояния
        data: updatedChats  // обновляем массив чатов
    });console.log("АПДЭЙТ ЧАТОВ3", chats);

  })

};

// Функция для ручного подключения
export const connectSocket = () => {
  if(!socket.auth.token)
  {
    socket.auth.token = UserAuthStore.getState().token;
  }

  if (!socket.connected) {
    socket.connect();
    initSocketListeners();
  }
};

const disconnectSocket = () => {
  socket.disconnect();

}

// Функция для обновления токена
export const updateSocketAuth = () => {
  if(!socket.connected)
  {
    socket.disconnect();
    connectSocket();
  }
  else{
    console.log("Нахуя? Ты уже подключен");
  }
};