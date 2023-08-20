// src/entities/Transaction.ts

export interface Transaction {
    id: string;
    accountId: string;
    type: 'deposit' | 'withdrawal' | 'transfer';
    amount: number;
    date: Date;
}

export interface CreateTransactionData {
    accountId: string;
    type: 'deposit' | 'withdrawal' | 'transfer';
    amount: number;
    date: Date;
}

export class TransactionModel implements Transaction {
    public id!: string;
    public accountId!: string;
    public type!: 'deposit' | 'withdrawal' | 'transfer';
    public amount!: number;
    public date!: Date;

    constructor(props: Omit<Transaction, 'id'>, id?: string) {
        Object.assign(this, props);
        if (!id) {
            this.id = Math.random().toString();
        }
    }
}

/*A interface Transaction define a estrutura de uma transação bancária, com os campos id, accountId, type, amount e date.

A interface CreateTransactionData define a estrutura dos dados necessários para criar uma nova transação.

A classe TransactionModel implementa a interface Transaction e permite a criação de objetos de transação a partir dos dados fornecidos.*/