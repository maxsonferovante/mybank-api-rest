import { AccountModel } from "../../entities/Account";
import { IAUserRepository } from "../../repositories/IAUserRepository";
import { IAccountRepository } from "../../repositories/IAccountRepository";
import { CreateAccountDTO } from "./CreateAccountDTO";

export class CreateAccountUseCase {
    constructor(

        private readonly accountRepository: IAccountRepository,
        private readonly userRepository: IAUserRepository

    ) { }

    async execute(data: CreateAccountDTO) {

        try {
            const account = new AccountModel(Object.assign(data));

            await this.accountRepository.save(account);

        } catch (error) {
            throw new Error("Fail to create account.");
        }
    }
}