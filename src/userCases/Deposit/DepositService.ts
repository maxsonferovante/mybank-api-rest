import { AccountModel } from '../../entities/Account';
import { IAccountRepository } from '../../repositories/IAccountRepository';
import { DepositDTO } from './DepositDTO';


export class DepositService {
    constructor(
        private readonly accountRepository: IAccountRepository,
    ) { }
    async execute(data: DepositDTO) {
        const accountAlreadyExists = await this.accountRepository.findById(data.id);
        if (!accountAlreadyExists) {
            throw new Error('Account not exists');
        }
        const account = new AccountModel(Object.assign(data));
        await this.accountRepository.deposit(account.id, data.amount);
    }
}