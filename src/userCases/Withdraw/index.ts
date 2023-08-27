import { PostgresAccountRepository } from "../../repositories/implementations/PostgresAccountRepository";

import { WithdrawController } from "./WithdrawController";
import { WithdrawService } from "./WithdrawService";

const postgresAccountRepository = new PostgresAccountRepository();

const withdrawService = new WithdrawService(
    postgresAccountRepository
);

const withdrawController = new WithdrawController(
    withdrawService
);

export { withdrawService, withdrawController }