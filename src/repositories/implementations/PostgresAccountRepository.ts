import { IAccountRepository } from "../IAccountRepository";
import { PrismaClient } from "@prisma/client";
import { Account, AccountModel } from "../../entities/Account";
import { cp } from "fs";


const prisma = new PrismaClient();

export class PostgresAccountRepository implements IAccountRepository {

    private accounts: Account[] = [];

    async save(account: AccountModel): Promise<void> {
        console.log(account);
        try {
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

                },
            });
        }
        catch (err) {
            console.log(err);
            throw new Error('An error occurred while fetching the account.');
        }

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

    async deposit(id: string, amount: number): Promise<void> {
        try {
            const account = await prisma.account.findUnique({
                where: {
                    id: id
                }
            });
            if (!account) {
                throw new Error('Account not found.');
            }
            await prisma.account.update({
                where: {
                    id: id
                },
                data: {
                    balance: account.balance + amount
                }
            });
        } catch (err) {
            throw new Error('An error occurred while fetching the account.');
        }
    }

    async withdraw(id: string, amount: number): Promise<void> {
        try {
            const account = await prisma.account.findUnique({
                where: {
                    id: id
                }
            });
            if (!account) {
                throw new Error('Account not found.');
            }
            if (account.balance < amount) {
                throw new Error('Insufficient funds.');
            }
            await prisma.account.update({
                where: {
                    id: id
                },
                data: {
                    balance: account.balance - amount
                }
            });
        } catch (err) {
            throw new Error('An error occurred while fetching the account.');
        }
    }

    async transfer(id: string, amount: number, idDestinationAccount: string): Promise<void> {
        try {
            const account = await prisma.account.findUnique({
                where: {
                    id: id
                }
            });
            if (!account) {
                throw new Error('Account not found.');
            }
            if (account.balance < amount) {
                throw new Error('Insufficient funds.');
            }

            const accountDestination = await prisma.account.findUnique({
                where: {
                    id: idDestinationAccount
                }
            });
            if (!accountDestination) {
                throw new Error('Account not found.');
            }

            await prisma.account.update({
                where: {
                    id: id
                },
                data: {
                    balance: account.balance - amount
                }
            });

            await prisma.account.update({
                where: {
                    id: idDestinationAccount
                },
                data: {
                    balance: accountDestination.balance + amount
                }
            });
        } catch (err) {
            throw new Error('An error occurred while fetching the account.');
        }
    }
}