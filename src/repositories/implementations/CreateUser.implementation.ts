import { Users } from "@prisma/client";
import { prisma } from "../../configs/db/index";
import { UserEntitie } from "../../entities/User.entitie";
import { IUser } from "../../useCases/User/User.DTO";
import { IUserRepositorie } from "../IUserRepositorie";

export class CreateUser implements IUserRepositorie{

    private User: UserEntitie[] = [];

    async findByEmail(email: string): Promise<Users | null> {
        const searchMail = await prisma.users.findUnique({
            where:{
                email,
            }
        });
        return searchMail;
    };
   async findByNameUser(username: string): Promise<Users | null> {
        const searchNameUser = await prisma.users.findUnique({
            where:{
                username,
            }
        });
        console.log('AQUI: ', searchNameUser);
        return searchNameUser;
    };
   async save(data: IUser): Promise<IUser> {
        await prisma.users.create({
            data:{
                name: data.name,
                age: data.age,
                email: data.email,
                password: data.password,
                urlPhoto: data.urlPhoto,
                username: data.username,
                tags: data.tags,
            },
        });
        return data;
    };  
};