import { UserModel } from "../../entities/User";
import { IAUserRepository } from "../../repositories/IAUserRepository";
import { DeleteUserDTO } from "./DeleteUserDTO";

export class DeleteUserUseCase {
    constructor(
        private readonly userRepository: IAUserRepository,
    ) { }

    async execute(data: DeleteUserDTO) {

        const userAlreadyExists = await this.userRepository.findById(data.id);
        if (!userAlreadyExists) {
            throw new Error('User not exists');
        }
        const user = new UserModel(Object.assign(data));
        await this.userRepository.delete(user.id);
    }
}