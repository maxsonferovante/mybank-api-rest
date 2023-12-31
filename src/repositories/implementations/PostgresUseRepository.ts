import { IAUserRepository } from "../IAUserRepository";
import { UserModel, User } from "../../entities/User";
import { PrismaClient } from "@prisma/client";
import { log } from "console";
import { GetUserDTO } from "../../userCases/GetUser/GetUserDTO";



const prisma = new PrismaClient();


export class PostgresUserRepository implements IAUserRepository {

    private users: User[] = [];

    async save(user: UserModel): Promise<void> {
        await prisma.user.create({
            data: {
                id: user.id,
                name: user.name,
                individualRegistration: user.individualRegistration
            }
        });
    }
    async delete(id: string): Promise<void> {
        await prisma.user.delete({
            where: {
                id: id
            }
        });
    }
    async update(user: UserModel): Promise<void> {
        await prisma.user.update({
            where: {
                id: user.id
            },
            data: user
        });
    }
    async list(): Promise<User[]> {
        const users = await prisma.user.findMany();
        return users.map(
            user => new UserModel(user)
        );
    }
    async findById(data: GetUserDTO): Promise<User> {
        try {
            const user = await prisma.user.findUnique({
                where: {
                    id: data.id
                }
            });
            if (!user) {
                throw new Error('User not found.');
            }
            return new UserModel(user);
        } catch (err) {
            throw new Error("User not found.");
        }
    }

    async findByIndividualRegistration(individualRegistration: string): Promise<User> {
        console.log(individualRegistration);
        try {
            const user = await prisma.user.findFirstOrThrow({
                where: {
                    individualRegistration: individualRegistration
                }
            });
            if (!user) {
                throw new Error('User not found.');
            }
            return new UserModel(user);
        } catch (err) {
            throw new Error("User not found.");
        }
    }
    async exists(id: string): Promise<boolean> {
        console.log(id);
        const user = await prisma.user.findFirst({
            where: {
                id: id
            }
        });
        console.log(user);
        if (!user) {
            return false;
        }
        return true;
    }
}