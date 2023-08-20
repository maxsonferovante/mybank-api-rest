import { Account } from "../entities/Account";

export interface IAccountRepository {
    findById(id: string): Promise<Account>;
    save(account: Account): Promise<void>;
    delete(id: string): Promise<void>;
    update(account: Account): Promise<void>;
    list(): Promise<Account[]>;
}