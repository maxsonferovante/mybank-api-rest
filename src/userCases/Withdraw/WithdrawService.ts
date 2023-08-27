import { AccountModel } from '../../entities/Account';

import { IAccountRepository } from '../../repositories/IAccountRepository';

import { WithdrawDTO } from './WithdrawDTO';

export class WithdrawService {

    constructor(
        private readonly accountRepository: IAccountRepository,
    ) { }


    async execute(data: WithdrawDTO) {
        const accountAlreadyExists = await this.accountRepository.findById(data.id);
        if (!accountAlreadyExists) {
            throw new Error('Account not exists');
        }
        const account = new AccountModel(Object.assign(data));
        await this.accountRepository.withdraw(account.id, data.amount);
    }
}

