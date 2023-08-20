import { IAccountRepository } from "../IAccountRepository";
import { PrismaClient } from "@prisma/client";
import { Account, AccountModel } from "../../entities/Account";


const prisma = new PrismaClient();

export class PostgresAccountRepository implements IAccountRepository {

    private accounts: Account[] = [];

    async save(account: AccountModel): Promise<void> {
        await prisma.account.create({
            data: {
                id: account.id,
                accountNumber: account.accountNumber,
                balance: account.balance,
                accountType: account.accountType,
                agency: account.agency,
                bankNumber: account.bankNumber,
                openingDate: account.openingDate,
                withdrawalLimit: account.withdrawalLimit,
                userId: account.userId
            }
        });
    }
    async delete(id: string): Promise<void> {
        await prisma.account.delete({
            where: {
                id: id
            }
        });
    }
    async update(account: AccountModel): Promise<void> {
        await prisma.account.update({
            where: {
                id: account.id
            },
            data: account
        });
    }
    async list(): Promise<Account[]> {
        const accounts = await prisma.account.findMany();
        return accounts.map(
            account => new AccountModel(account)
        );
    }

    async findById(id: string): Promise<Account> {
        try {
            const account = await prisma.account.findUnique({
                where: {
                    id: id
                }
            });
            if (!account) {
                throw new Error('Account not found.');
            }
            return new AccountModel(account);
        } catch (err) {
            throw new Error('An error occurred while fetching the account.');
        }
    }
}