import { container } from 'tsyringe';
import { Imail, ISendMail } from '../providers/Imail.provider';
import { MailService } from '../providers/implementations/mail.implementation';
import { CreateUser } from '../repositories/implementations/CreateUser.implementation';
import { IUserRepositorie } from '../repositories/IUserRepositorie';

container.registerSingleton<IUserRepositorie>(
    "CreateUser",
    CreateUser
);

container.registerSingleton<ISendMail>(
    "MailService",
    MailService,
);