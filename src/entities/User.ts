import { uuid } from "uuidv4";

export interface User {
    id: string;
    name: string;
    individualRegistration: string; // CPF ou CNPJ
}

export interface CreateUserData {
    name: string;
    individualRegistration: string; // CPF ou CNPJ
}

export class UserModel implements User {
    public readonly id!: string;
    public name!: string;
    public individualRegistration!: string; // CPF ou CNPJ

    constructor(props: Omit<User, 'id'>, id?: string) {
        Object.assign(this, props);

        if (!id) {
            this.id = uuid();
        }
    }
}