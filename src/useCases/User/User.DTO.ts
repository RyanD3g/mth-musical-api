interface IAddressDetail{
    cep: string;
    number: number;
    street: string;
    complement?: string
};

export interface IUser{
    name: string;
    email: string; 
    password: string; 
    age: number;
    username: string; 
    urlPhoto: string;
    address: IAddressDetail;
    tags: string
};