import { Request, Response, Express  } from 'express';
import { PrismaClient } from '../generated/prisma/client';
import { LoginController } from '../controllers/LoginController';
import { RegController } from '../controllers/RegController';
import { ChatController } from '../controllers/ChatController';
import { MessageController } from '../controllers/MessageController';
import { SearchController } from '../controllers/SearchController';
import { Container } from 'inversify';


export class Router
{
	static route(app: Express)
	{	console.log("AppRouter1");
		app.post('/api/login', async (req: Request, res: Response) => {
			const controller = new LoginController();

			await controller.handleRequest(req, res);
		});

		app.post('/api/reg', async (req: Request, res:  Response) => {
			const controller = new RegController();

			await controller.handleRequest(req, res)
		});

		app.get('/api/chats/:userId', async (req: Request, res: Response) => {

			const controller = new ChatController();

			await controller.handleRequest(req, res);

		});

		app.get('/api/messages/:chatId', async (req: Request, res: Response) => {
			
			const controller = new MessageController();

			await controller.handleRequest(req, res);

		});

		app.get('/api/users', async (req: Request, res: Response) => {

			const controller = new SearchController();

			await controller.handleRequest(req, res);
		});

	}

}