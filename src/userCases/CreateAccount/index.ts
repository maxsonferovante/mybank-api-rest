import { PostgresAccountRepository } from "../../repositories/implementations/PostgresAccountRepository";

import { CreateAccountUseCase } from "./CreateAccountUseCase";
import { CreateAccountController } from "./CreateAccountController";


const postgresAccountRepository = new PostgresAccountRepository();


const createAccountUseCase = new CreateAccountUseCase(postgresAccountRepository);

const createAccountController = new CreateAccountController(createAccountUseCase);

export { createAccountUseCase, createAccountController };