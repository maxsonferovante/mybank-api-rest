import { v4 as uuid } from 'uuid';

export interface Account {
    id: string;
    userId: string; // Referência ao usuário dono da conta
    accountNumber: string;
    balance: number;
    accountType: string;
    agency: string;
    bankNumber: string;
    openingDate: Date;
    withdrawalLimit: number;
}

export interface CreateAccountData {
    userId: string; // Referência ao usuário dono da conta
    accountNumber: string;
    balance: number;
    accountType: string;
    agency: string;
    bankNumber: string;
    openingDate: Date;
    withdrawalLimit: number;
}

export interface UpdateAccountBalanceDate {
    accountId: string;
    newBalance: number;
}

export class AccountModel implements Account {
    public readonly id!: string;
    public accountNumber!: string;
    public balance!: number;
    public accountType!: string;
    public agency!: string;
    public bankNumber!: string;
    public openingDate!: Date;
    public withdrawalLimit!: number;
    public userId!: string;

    constructor(props: Omit<Account, 'id' | 'openingDate'>, id?: string, openingDate?: Date) {
        Object.assign(this, props);

        if (!id) {
            this.id = uuid();

        }

        if (!openingDate) {
            this.openingDate = new Date();
        }
    }
}

/*
A interface Account define a estrutura fundamental de uma conta bancária, compreendendo campos cruciais como id, accountNumber, balance, accountType, agency, bankNumber, openingDate e withdrawalLimit.

A interface CreateAccountData especifica a composição dos dados indispensáveis para criar uma nova conta bancária, incorporando propriedades como accountNumber, balance, accountType, agency, bankNumber, openingDate e withdrawalLimit.

A interface UpdateAccountBalanceData delinea a estrutura dos dados requeridos para atualizar o saldo de uma conta já existente, englobando propriedades como accountId e newBalance.

A classe AccountModel concretiza a interface Account, permitindo a instanciação de objetos de conta usando os dados fornecidos, abarcando as propriedades correspondentes.
*/