import { AccountModel } from "../../entities/Account";
import { IAccountRepository } from "../../repositories/IAccountRepository";
import { CreateAccountDTO } from "./CreateAccountDTO";

export class CreateAccountUseCase {
    constructor(

        private readonly accountRepository: IAccountRepository,

    ) { }

    async execute(data: CreateAccountDTO) {
        const account = new AccountModel(Object.assign(data));
        try {
            await this.accountRepository.save(account);
        } catch (error) {
            throw new Error("Fail to create account.");
        }
    }
}