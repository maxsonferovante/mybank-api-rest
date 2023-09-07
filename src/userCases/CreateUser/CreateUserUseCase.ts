import { UserModel } from "../../entities/User";
import { IAUserRepository } from "../../repositories/IAUserRepository";
import { CreateUserDTO } from "./CreateUserDTO";

export class CreateUserUseCase {
    constructor(
        private readonly userRepository: IAUserRepository,
    ) { }

    async execute(data: CreateUserDTO) {
        try {

            const user = new UserModel(Object.assign(data));
            await this.userRepository.save(user);
        }
        catch (error) {
            throw new Error("Failed to create user");
        }

    }
}