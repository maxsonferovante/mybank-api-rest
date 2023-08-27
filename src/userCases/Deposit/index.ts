import { PostgresAccountRepository } from "../../repositories/implementations/PostgresAccountRepository";
import { DepositController } from "./DepositController";
import { DepositService } from "./DepositService";


const postgresAccountRepository = new PostgresAccountRepository();

const depositService = new DepositService(
    postgresAccountRepository
);

const depositController = new DepositController(
    depositService
);

export { depositService, depositController }