import { RegData , AuthData } from '../types/Auth';
import { Error } from '../types/Error';
import { Container } from 'inversify';
import { PrismaClient } from '../generated/prisma/client';
import { createJwtToken } from '../utils/TokenGeneration';

export class RegService
{

	private prisma: PrismaClient;

	constructor()
	{
		this.prisma = new PrismaClient();
	}

	public async startProcess(params: RegData): Promise<boolean | Error> {
    try {
        // First check if phone number already exists
        const existingContact = await this.prisma.user_contact.findFirst({
            where: {
                phone: params.phone
            }
        });

        if (existingContact) {
            return {
                errorMessage: "This phone number is already registered",
                success: false
            };
        }

        // Create user
        const data = await this.prisma.users.create({
            data: {
                name: params.name,
                password: params.password
            }
        });

        if (!data) {
            return {
                errorMessage: "The user wasn't created!",
                success: false
            };
        }

        // Create user contact
        await this.prisma.user_contact.create({
            data: {
                user_id: data.id,
                phone: params.phone
            }
        });

        return {
            errorMessage: "The user was created successfully!",
            success: true
        };
    } catch (error) {
        console.error("Registration error:", error);
        return {
            errorMessage: "An error occurred during registration",
            success: false
        };
    }
}

	// private structData(data: any) : AuthData
	// {
	// 	const userData: AuthData = {
	// 		userId: Number(data.id),
	// 		userName: data.name as string,
	// 		token: ""
	// 	}
	// 	return userData;
	// }

	// private validation(data: any): boolean
	// {
	// 	if(Array.isArray(data))
	// 	{
	// 		if(data.length > 0)
	// 		{
	// 			return true;
	// 		}
	// 	}

	// 	return false;
	// }

	// private moderation(userData: AuthData) : boolean
	// {
	// 	if(!userData.userId)
	// 	{
	// 		return false;
	// 	}
	// 	return true;
	// }
}