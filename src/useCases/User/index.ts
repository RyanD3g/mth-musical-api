import { MailService } from "../../providers/implementations/mail.implementation";
import { UserController } from "./User.controller";
import { UserUseCase } from "./User.UseCase";
import { CreateUser } from "../../repositories/implementations/CreateUser.implementation";

const createUser = new CreateUser();
const mailService = new MailService();

const userUseCase = new UserUseCase(
    createUser,
    mailService,
);
const userControllerIndex = new UserController(
    userUseCase,
);

export { userControllerIndex , userUseCase };
 