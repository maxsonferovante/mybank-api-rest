import { AccountModel } from "../../entities/Account";
import { IAccountRepository } from "../../repositories/IAccountRepository";
import { GetAccountDTO } from "./GetAccountDTO";

export class GetAccountUseCase {
    constructor(
        private readonly accountRepository: IAccountRepository,
    ) { }

    async execute(data: GetAccountDTO) {
        const account = await this.accountRepository.findById(data.id);
        if (!account) {
            throw new Error('Account not found');
        }
        return new AccountModel(account);
    }
}