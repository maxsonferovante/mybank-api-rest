export interface CreateAccountDTO {
    id: string;
    userId: string;
    accountNumber: string;
    balance: number;
    accountType: string;
    agency: string;
    bankNumber: string;
    openingDate: Date;
    withdrawalLimit: number;

}