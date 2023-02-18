import { Users } from '@prisma/client';
import { UserEntitie } from '../entities/User.entitie';
import { IUser } from '../useCases/User/User.DTO';

export interface IUserRepositorie{
    findByEmail(email: string): Promise<Users | null>;
    findByNameUser(username: string): Promise<Users | null>;
    save(data: IUser): Promise<IUser>;
};