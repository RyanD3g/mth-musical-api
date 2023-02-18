import { Router } from "express";
import { userControllerIndex } from './src/useCases/User/index'
import { UserController } from "./src/useCases/User/User.controller";

const routes = Router();

routes.post('/register', (req, res) =>{
    userControllerIndex.excute(req, res);
});

export { routes };
