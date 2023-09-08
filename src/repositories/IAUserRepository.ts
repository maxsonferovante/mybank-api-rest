import { User } from "../entities/User";
import { GetUserDTO } from "../userCases/GetUser/GetUserDTO";


export interface IAUserRepository {
    findById(data: GetUserDTO): Promise<User>;
    findByIndividualRegistration(individualRegistration: string): Promise<User>;
    exists(id: string): Promise<boolean>;
    save(user: User): Promise<void>;
    delete(id: string): Promise<void>;
    update(user: User): Promise<void>;
    list(): Promise<User[]>;

}