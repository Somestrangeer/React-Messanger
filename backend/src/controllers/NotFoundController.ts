import { Request, Response } from 'express';
import { RestController } from './RestController';

export class NotFoundController extends RestController {
    async handleRequest(req: Request, res: Response): Promise<void> {
        this.jsonResponse(res, 404, { error: 'Route not found' });
    }

    validation(params: any)
    {
        return true;
    }

    getParams(req: Request)
    {
        const loginData = "fdfd";
        return loginData;

    }
}