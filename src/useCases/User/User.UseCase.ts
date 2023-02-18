import { UserEntitie } from "../../entities/User.entitie";
import { ISendMail } from "../../providers/Imail.provider";
import { IUserRepositorie } from "../../repositories/IUserRepositorie";
import { IUser } from "./User.DTO";

export class UserUseCase{
    constructor(
        
        private IUserRequests: IUserRepositorie,
        private MailImplementation: ISendMail,
        
        ){};

    async excute(data: IUser | any): Promise<void>{

           const isEmail = await this.IUserRequests.findByEmail(data.email);

           if(isEmail){
            throw new Error('Email existe!');
           };

           const isNameUser = await this.IUserRequests.findByNameUser(data.username);

           if(isNameUser){
            throw new Error('Nome de usuário já cadastrado!');
           };


           const User = new UserEntitie(data);
           const userCreated = await this.IUserRequests.save(data);

           await this.MailImplementation.sendMail({
            to:{
                name: data.name,
                address: data.email, 
            },
            from:{
                name: 'Seja bem-vindo(a) a plataforma!',
                address: 'matchmusical@match.com',
            },
            subject: 'Token para autenticação',
            body: '<p>Aqui está o token: { Token }</p>',
           });
    }
}