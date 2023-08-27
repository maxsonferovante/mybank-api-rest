import { UserModel } from "../../entities/User";

import { IAUserRepository } from "../../repositories/IAUserRepository";
import { GetUserDTO } from "../GetUser/GetUserDTO";

export class GetUserUseCase {
    constructor(
        private readonly userRepository: IAUserRepository,
    ) { }

    async execute(data: GetUserDTO) {
        const user = await this.userRepository.findById(data.id);
        if (!user) {
            throw new Error('User not found');
        }
        return new UserModel(user);
    }

    async executeList() {
        const user = await this.userRepository.list();
        if (!user) {
            throw new Error('User not found');
        }
        return user;
    }
}