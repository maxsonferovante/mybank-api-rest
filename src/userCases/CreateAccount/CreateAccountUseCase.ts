import { AccountModel } from "../../entities/Account";
import { IAccountRepository } from "../../repositories/IAccountRepository";
import { CreateAccountDTO } from "./CreateAccountDTO";

export class CreateAccountUseCase {
    constructor(

        private readonly accountRepository: IAccountRepository,

    ) { }

    async execute(data: CreateAccountDTO) {
        const accountAlreadyExists = await this.accountRepository.findById(data.id);
        if (accountAlreadyExists) {
            throw new Error('Account already exists');
        }
        const account = new AccountModel(Object.assign(data));
        await this.accountRepository.save(account);
    }
}