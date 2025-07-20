import {create} from "zustand";
import { persist } from 'zustand/middleware';

interface User{
	id: number;
}

interface CreationGroupStore{
	groupName: string | null;
	showGroupCreateUI: boolean;
	setShowGroupCreateUI: (show: boolean) => void;
	cleanStack: () => void;
	users: User[];
	setUsers: (users: User[]) => void;
}

export const useCreationGroupStore = create<CreationGroupStore>()(
	(set) => (
		{
			groupName: null,
			showGroupCreateUI: false,
			setShowGroupCreateUI: (show: boolean) => set({showGroupCreateUI: show}),
			cleanStack: () => set({users: []}),
			users: [],
			setUsers: (users: User[]) => set({users: users})
		})

	);