import { RestController } from './RestController';
import { Request, Response } from 'express';
import { MessagesRequest } from '../types/Messages';
import { Error } from '../types/Error';
import { GetChats } from '../services/GetChatsModel';
import { GetMessages } from '../services/GetMessagesModel';
import { ValidateAuthToken } from '../midleware/CheckAuth';


export class MessageController extends RestController 
{
    async handleRequest(req: Request, res: Response): Promise<void> 
    {
        try 
        {   

            const userData = this.getParams(req);

            if (!this.validation(userData)) 
            {   
                this.jsonResponse(res, 401, { message: "No token either chatId were given", success: false });
                return;
            }

            const midlewareModeration = ValidateAuthToken(userData.token);

            if (midlewareModeration.userId === -1) 
            {
                this.jsonResponse(res, 401, { message: "Invalid token", success: false });
                return;
            }

            const messages = await new GetMessages().startProcess(Number(userData.chatId));
            
            this.jsonResponse(res, 200, messages);
        } 
        catch (error) 
        {
            console.error('ChatController error:', error);
            this.jsonResponse(res, 500, { message: "Internal server error", success: false });
        }
    }

    validation(params: MessagesRequest): boolean 
    {
        if(!params.token || !params.chatId)
        {
            return false;
        }

        return true;
    }

    getParams(req: Request): MessagesRequest 
    {
        const authHeader = req.headers.authorization;
        const token = authHeader?.split(' ')[1];

        return {
            token: token as string,
            chatId: Number(req.params.chatId),
        };
    }
}