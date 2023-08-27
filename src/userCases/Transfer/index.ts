import { PostgresAccountRepository } from "../../repositories/implementations/PostgresAccountRepository";

import { TransferController } from "./TransferController";
import { TransferService } from "./TransferService";

const postgresAccountRepository = new PostgresAccountRepository();

const transferService = new TransferService(
    postgresAccountRepository
);

const transferController = new TransferController(
    transferService
);

export { transferService, transferController }