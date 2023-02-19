import { Request, Response } from "express";
import { UserUseCase } from "./User.UseCase";
import { container } from "tsyringe";

export class UserController{
    async excute(req: Request, res: Response): Promise<Response>{
        const { name, email, password, age, username, urlPhoto, address } = req.body;
        try {
           const useCaseUser = container.resolve(UserUseCase)
           const userCreated = await useCaseUser.excute({
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
