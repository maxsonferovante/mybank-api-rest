import { AccountModel } from "../../entities/Account";

import { IAccountRepository } from "../../repositories/IAccountRepository";

import { TransferDTO } from "./TransferDTO";


export class TransferService {
    constructor(
        private readonly accountRepository: IAccountRepository,
    ) { }
    async execute(data: TransferDTO) {
        const accountOrigenAlreadyExists = await this.accountRepository.findById(data.idOrigen);
        const accountDestinationAlreadyExists = await this.accountRepository.findById(data.idDestinationAccount);

        if (!accountOrigenAlreadyExists || !accountDestinationAlreadyExists) {
            throw new Error('Account not exists');
        }
        const account = new AccountModel(Object.assign(data));
        await this.accountRepository.transfer(account.id, data.amount, data.idDestinationAccount);
    }
}