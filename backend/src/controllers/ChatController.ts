import { RestController } from './RestController';
import { Request, Response } from 'express';
import { ChatRequest, ChatModeration } from '../types/Chats';
import { Error } from '../types/Error';
import { GetChats } from '../services/GetChatsModel';
import { GetMessages } from '../services/GetMessagesModel';
import { ValidateAuthToken } from '../midleware/CheckAuth';


export class ChatController extends RestController 
{
    async handleRequest(req: Request, res: Response): Promise<void> 
    {
        try 
        {
            const userData = this.getParams(req);

            if (!this.validation(userData)) 
            {
                this.jsonResponse(res, 401, { message: "No token was given!", success: false });
                return;
            }

            const midlewareModeration = ValidateAuthToken(userData.token);

            if (midlewareModeration.userId === -1) 
            {
                this.jsonResponse(res, 401, { message: "Token is invalid!", success: false });
                return;
            }

            const moderationParams: ChatModeration = {
                userIdFromQuery: userData.userId, 
                userIdFromToken: midlewareModeration.userId
            };

            if(!this.moderation(moderationParams))
            {
                this.jsonResponse(res, 401, { message: "userId from query differ from userId from token", success: false });
            }

            const chats = await new GetChats().startProcess(Number(midlewareModeration.userId));

            this.jsonResponse(res, 200, { data: chats, success: true });
        } 
        catch (error) 
        {
            console.error('ChatController error:', error);
            this.jsonResponse(res, 500, { message: "Internal server error", success: false });
        }
    }

    validation(userData: ChatRequest): boolean 
    {
        if (!userData.token) 
        {
            return false;
        }

        return true;
    }

    private moderation(data: ChatModeration): boolean
    {
        if(data.userIdFromQuery === data.userIdFromToken)
        {
            return true;
        }

        return false;
    }


    getParams(req: Request): ChatRequest 
    {
        const authHeader = req.headers.authorization;
        const token = authHeader?.split(' ')[1];

        return {
            token: token as string,
            userId: Number(req.params.userId),
        };
    }
}