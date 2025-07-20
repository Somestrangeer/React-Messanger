import { Request, Response } from 'express';
import { Error } from '../types/Error';

export abstract class WebSocketController
{
	abstract handle(data: any, userId: number) : Promise<void | any>;

	abstract validation(params: any, userId: number) : boolean;

	// abstract getParams(req: Request) : any;
}
