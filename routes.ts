import { Router } from "express";
import { UserController } from "./src/useCases/User/User.controller";

const routes = Router();

const controller = new UserController();

routes.post('/register', controller.excute);

export { routes };
