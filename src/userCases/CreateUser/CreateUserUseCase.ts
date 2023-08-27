import { UserModel } from "../../entities/User";
import { IAUserRepository } from "../../repositories/IAUserRepository";
import { CreateUserDTO } from "./CreateUserDTO";

export class CreateUserUseCase {
    constructor(
        private readonly userRepository: IAUserRepository,
    ) { }

    async execute(data: CreateUserDTO) {

        const userAlreadyExists = await this.userRepository.findByIndividualRegistration(data.individualRegistration);
        if (userAlreadyExists) {
            throw new Error('User already exists');
        }
        const user = new UserModel(Object.assign(data));
        await this.userRepository.save(user);
    }
}