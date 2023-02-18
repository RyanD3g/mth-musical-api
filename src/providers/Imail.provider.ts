interface ImailDetails{
    name: string;
    address: string;
};

export interface Imail{
    to: ImailDetails;
    from: ImailDetails;
    subject: string;
    body: string;
};

export interface ISendMail{
    sendMail(message: Imail): Promise<void>;
};