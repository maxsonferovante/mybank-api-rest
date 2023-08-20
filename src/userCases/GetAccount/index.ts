import { PostgresAccountRepository } from "../../repositories/implementations/PostgresAccountRepository";

import { GetAccountUseCase } from "./GetAccountUseCase";
import { GetAccountController } from "./GetAccountController";

const postgresAccountRepository = new PostgresAccountRepository();

const getAccountUseCase = new GetAccountUseCase(postgresAccountRepository);

const getAccountController = new GetAccountController(getAccountUseCase);

export { getAccountUseCase, getAccountController };