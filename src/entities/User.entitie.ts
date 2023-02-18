import { IUser } from "../useCases/User/User.DTO";

export class UserEntitie{
    constructor(
        
        private data: IUser,

        ){};
    
    get getDataUser(): IUser{
        return this.data;
    };
};