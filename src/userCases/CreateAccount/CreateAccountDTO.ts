export interface CreateAccountDTO {
    userId: string;
    accountNumber: string;
    balance: number;
    accountType: string;
    agency: string;
    bankNumber: string;
    openingDate: Date;
    withdrawalLimit: number;

}