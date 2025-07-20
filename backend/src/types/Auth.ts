//The data we give the user, that means he's authed and we can continue the work
export interface AuthData
{
	userId: number;
	userName: string;
	token: string;
	success?: boolean;
}

//1st level: when we've just got the data
export interface LoginData
{
	phone: string;
	password: string;
}

export interface RegData
{
	phone: string;
	password: string;
	name: sring;
}
