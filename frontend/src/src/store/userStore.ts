import {create} from "zustand";
import { persist } from 'zustand/middleware';

interface UserAuth{
	token: string;
	userId: string;
	isAuthenticated: boolean;
	login: (token, userId) => void;
}

export const UserAuthStore = create<UserAuth>()(
	persist(
		(set) => ({
			token: null,
			userId: null,
			isAuthenticated: false,
			login: (token, userId) => set({token, userId, isAuthenticated: true})
		}),
		{name: "auth-storage"}
		)

	);