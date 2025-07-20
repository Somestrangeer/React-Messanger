import { RawMessageData } from '../types/Messages';
import { Error } from '../types/Error';
import { Container } from 'inversify';
import { PrismaClient } from '../generated/prisma/client';

export class ChatMembers
{

	private prisma: PrismaClient;

	constructor()
	{
		this.prisma = new PrismaClient();
	}

	public async startProcess(chatId: number) : Promise<number[] | Error>
	{
		const validationResult = this.validation(chatId);

		if(!validationResult)
		{
			return {errorMessage: "Invalid Data!", success: false};
		}

		const allMembers = await this.prisma.chat_members.findMany({
			where:{
				chat_id: chatId
			},
			select:{
				user_id: true
			}
		});
		const bakedUsers = this.structData(allMembers);
		console.log("Все челы из чата", bakedUsers);
		return bakedUsers;


	}

	private structData(data: any): number[] 
	{
		let members: number[] = [];
		data.forEach((user: any) => {
			members.push(Number(user.user_id));
		})
	    console.log("Вот хопа", members);
	    return members;
	}

	private validation(chatId: number) : boolean
	{
		if(!chatId)
		{
			return false;
		}

		return true;
	}
}