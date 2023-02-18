import { beforeAll, describe, expect, it } from "vitest";
import request from 'supertest';
import { app } from '../../app';

import { UserController } from "./User.controller";
import { UserUseCase } from "./User.UseCase";
import { CreateUser } from "../../repositories/implementations/CreateUser.implementation";
import { MailService } from "../../providers/implementations/mail.implementation";
import { ISendMail } from "../../providers/Imail.provider";
import { IUserRepositorie } from "../../repositories/IUserRepositorie";

describe('Deve Criar usuário', ()=>{

    let implenmentationDB: IUserRepositorie;
    let serviceMail: ISendMail;

    beforeAll(()=>{
        implenmentationDB = new CreateUser();
        serviceMail = new MailService();
    });

    it('Deve criar cadastro de usuário', async ()=>{
        const caseUser = new UserUseCase(
            implenmentationDB,
            serviceMail,
        );
        const controller = new UserController(caseUser);

        const TestController = caseUser.excute;
        
        const response = await request(app) 
                         .post('/register')
                         .send({
                            name: 'ryan',
                            email: 'ryan@gmail.com',
                            age: 23,
                            password: '2334234234',
                            urlPhoto: 'http://example.com',
                            username: 'rys',
                        });
        console.log(response)
        expect(response.status).toEqual(201);
    });


    it('Deve impedir de criar usuários com o mesmo email', async ()=>{
        const caseUser = new UserUseCase(
            implenmentationDB,
            serviceMail,
        );
        const controller = new UserController(caseUser);

        const respose = await request(app)
                        .post('/register')
                        .send({
                            name: 'ryan',
                            email: 'ryandias135@gmail.com',
                            age: 23,
                            password: '2334234234',
                            UrlPhoto: 'http://example.com',
                            username: 'rydias77',
                        }).send({
                            name: 'ryan',
                            email: 'ryandias135@gmail.com',
                            age: 23,
                            password: '2334234234',
                            UrlPhoto: 'http://example.com',
                            username: 'rydias77',
                        });
                       
       await expect(respose.status).toEqual(500);
    })
});
