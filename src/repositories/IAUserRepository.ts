import { User } from "../entities/User";


export interface IAUserRepository {
    findById(id: string): Promise<User>;
    findByIndividualRegistration(individualRegistration: string): Promise<User>;
    save(user: User): Promise<void>;
    delete(id: string): Promise<void>;
    update(user: User): Promise<void>;
    list(): Promise<User[]>;

}