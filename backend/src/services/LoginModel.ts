import { LoginData, AuthData } from '../types/Auth';
import { Error } from '../types/Error';
import { Container } from 'inversify';
import { PrismaClient } from '../generated/prisma/client';
import { createJwtToken } from '../utils/TokenGeneration';

export class LoginModel
{

	private prisma: PrismaClient;

	constructor()
	{
		this.prisma = new PrismaClient();
	}

	public async startProcess(params: LoginData) : Promise<AuthData | Error>
	{
		const data = await this.prisma.users.findMany({
			where:{
				password: params.password
			}
		});

		if(!this.validation(data))
		{
			const report: Error = {
				errorMessage: "The user wasn't find!",
				success: false
			};
			return report;
		}



		let userData: AuthData = this.structData(data[0]);

		if(!this.moderation(userData))
		{
			console.log("Не нашли юзера!");
			return {errorMessage: "User wasn't found", success: false};
		}

		const token = createJwtToken({userId: userData.userId, userName: userData.userName});

		userData.token = token;
		userData.success = true;

		console.log("user token ", userData.token);

		return userData;
	}

	private structData(data: any) : AuthData
	{
		const userData: AuthData = {
			userId: Number(data.id),
			userName: data.name as string,
			token: ""
		}
		return userData;
	}

	private validation(data: any): boolean
	{
		if(Array.isArray(data))
		{
			if(data.length > 0)
			{
				return true;
			}
		}

		return false;
	}

	private moderation(userData: AuthData) : boolean
	{
		if(!userData.userId)
		{
			return false;
		}
		return true;
	}
}