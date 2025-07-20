import { Controller } from "../controllers/Controller";
import { LoginController } from "../controllers/LoginController";
import { NotFoundController } from "../controllers/NotFoundController";
enum Routes{
	Login = "/api/login",
	Auth = "/api/auth",
	Reg = "/api/reg"
}

export class ControllersFactory
{
	static getController(path: string) : Controller
	{
		switch(path)
		{
			case Routes.Login:
				return new LoginController();
			default:
				return new LoginController();
		}
	}
}