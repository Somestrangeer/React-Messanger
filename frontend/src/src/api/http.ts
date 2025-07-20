import axios from 'axios';
import { UserAuthStore } from '../store/userStore';


export const http = axios.create({
	baseURL: "http://localhost:5000/api"
});

http.interceptors.request.use((config) =>{

	const token = UserAuthStore.getState().token;
	if(token){
		config.headers.authorization = `Bearer ${token}`;
	}
	return config;
});