import { RestController } from './RestController';
import { Request, Response } from 'express';
import { RegData } from '../types/Auth';
import { Error } from '../types/Error';
import { Container } from 'inversify';
import { RegService } from '../services/RegService'

export class RegController extends RestController
{
	async handleRequest(req: Request, res: Response) : Promise<void>
	{
		const regData: RegData = this.getParams(req);

		if(!this.validation(regData))
		{
			console.log(regData);
			this.jsonResponse(res, 401, {message: "No valid data was given!", success: false});
			return;
		}
		
		const userData = await new RegService().startProcess(regData);

		if(!this.moderation(userData))
		{
			console.log("User was not found!");
			this.jsonResponse(res, 401, {message: "User was not found!", success: false});

			return;
		}
		console.log("User was found!");
		this.jsonResponse(res, 200, userData);
	}

	validation(params: RegData) : boolean
	{
		if(!params.phone || !params.password || !params.name){
			return false;
		}

		return true;
	}

	private moderation(data: any): boolean
	{
		if('errorMessage' in data)
		{

			if("success" in data)
			{
				if(data.success == true)
				{
					return true;
				}
			}
			return false;
		}

		return true;
	}

	getParams(req: Request)
	{
		const loginData: RegData = {
			phone: req.body.phone as string,
			password: req.body.password as string,
			name: req.body.name as string
		}
		return loginData;

	}
}
