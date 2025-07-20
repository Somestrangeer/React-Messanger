import { Request, Response } from 'express';
import { Error } from '../types/Error';

export abstract class RestController
{
	abstract handleRequest(req: Request, res: Response) : Promise<void> | void;

	protected jsonResponse(res: Response, code: number, data: any) : void
	{
		res.status(code).json(data);
	}

	abstract validation(params: any) : boolean;

	abstract getParams(req: Request) : any;
}
