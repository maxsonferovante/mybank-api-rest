import { AccountModel } from "../../entities/Account";

import { IAccountRepository } from "../../repositories/IAccountRepository";

import { DeleteAccountDTO } from "./DeleteAccountDTO";

export class DeleteAccountUseCase {
    constructor(

        private readonly accountRepository: IAccountRepository,

    ) { }

    async execute(data: DeleteAccountDTO) {

        const accountAlreadyExists = await this.accountRepository.findById(data.id);
        if (!accountAlreadyExists) {
            throw new Error('Account not exists');
        }
        const account = new AccountModel(Object.assign(data));
        await this.accountRepository.delete(account.id);
    }
}