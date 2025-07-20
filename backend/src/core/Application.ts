import express, { Express } from 'express';
import { PrismaClient } from '../generated/prisma/client';
//import { PrismaClient } from '@prisma/client';
import { Container } from 'inversify';
import { Server } from './Server';
import { Router } from './Router';
import cors from 'cors'; // Импортируем пакет

export class Application{
	private expressApp: Express;
	private diContainer: Container;

	constructor(){
		this.expressApp = express();
		this.expressApp.use(cors());
		this.expressApp.use(express.json());
		this.diContainer = new Container();

		//this.configureDependencies();
		this.setupRouter();

	}

	private configureDependencies(){
		this.diContainer.bind(PrismaClient).toConstantValue(new PrismaClient());
	}

	private setupRouter(){
		Router.route(this.expressApp);
	}


	public start(port: number){
		new Server(this.expressApp).start(port);
	}
}