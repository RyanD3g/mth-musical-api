import { Request, Response } from "express";
import { UserUseCase } from "./User.UseCase";

export class UserController{
    constructor(
        private useCaseUser: UserUseCase,
    ){};

    async excute(req: Request, res: Response): Promise<Response>{
        const { name, email, password, age, username, urlPhoto, address } = req.body;
        try {
           const userCreated = await this.useCaseUser.excute({
                 name,
                 email, 
                 password, 
                 age, 
                 username, 
                 urlPhoto, 
                 address,
                });
            return res.status(201).json({userCreated});
        } catch (error) {
            return res.status(500).json({Erro: `${error}`});
        };
    };
};
