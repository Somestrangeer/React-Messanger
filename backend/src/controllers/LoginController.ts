import { RestController } from './RestController';
import { Request, Response } from 'express';
import { AuthData,  LoginData} from '../types/Auth';
import { Error } from '../types/Error';
import { Container } from 'inversify';
import { LoginModel } from '../services/LoginModel'

export class LoginController extends RestController
{
	async handleRequest(req: Request, res: Response) : Promise<void>
	{
		const loginData: LoginData = this.getParams(req);

		if(!this.validation(loginData))
		{
			this.jsonResponse(res, 200, {message: "No valid data was given!", success: false});
			return;
		}
		
		const userData = await new LoginModel().startProcess(loginData);

		if(!this.moderation(userData))
		{
			console.log("User was not found!");
			this.jsonResponse(res, 200, {message: "User was not found!", success: false});

			return;
		}
		console.log("User was found!");
		this.jsonResponse(res, 200, userData);
	}

	validation(params: LoginData) : boolean
	{
		if(!params.phone || !params.password){
			return false;
		}

		return true;
	}

	private moderation(data: any): boolean
	{
		if('errorMessage' in data)
		{
			return false;
		}

		return true;
	}

	getParams(req: Request)
	{
		const loginData: LoginData = {
			phone: req.body.phone as string,
			password: req.body.password as string
		}
		return loginData;

	}
}
