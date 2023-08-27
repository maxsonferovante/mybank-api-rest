import { PostgresAccountRepository } from "../../repositories/implementations/PostgresAccountRepository";

import { DeleteAccountUseCase } from "./DeleteAccountUseCase";
import { DeleteAccountController } from "./DeleteAccountController";

const postgresAccountRepository = new PostgresAccountRepository();
const deleteAccountUseCase = new DeleteAccountUseCase(postgresAccountRepository);
const deleteAccountController = new DeleteAccountController(deleteAccountUseCase);

export { deleteAccountUseCase, deleteAccountController };