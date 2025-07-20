import { createServer, Server as HttpServer } from 'http';
import { Application as ExpressApp } from 'express';
import { verifyJwtToken } from '../utils/TokenGeneration'
import { Socket } from './Socket'


export class Server{
	private httpServer: HttpServer;

	private socket: Socket;

	constructor(private expressApp: ExpressApp){
		this.httpServer = createServer(this.expressApp);
		this.socket = new Socket(this.httpServer);
	}

	public start(port: number)
	{
		this.httpServer.listen(port, () => {
			console.log(`SERVER STARTED ON PORT ${port}`);
			this.socket.initSocket();
		});
	}


}