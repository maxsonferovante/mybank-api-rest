import { Request, Response } from "express";
import { CreateAccountUseCase } from "./CreateAccountUseCase";
import { error } from "console";

export class CreateAccountController {
    constructor(
        private createAccountUseCase: CreateAccountUseCase,
    ) { }

    async handle(request: Request, response: Response): Promise<Response> {
        const { id, userId, accountNumber, balance, accountType, agency, bankNumber, openingDate, withdrawalLimit } = request.body;

        try {
            await this.createAccountUseCase.execute({
                id,
                userId,
                accountNumber,
                balance,
                accountType,
                agency,
                bankNumber,
                openingDate,
                withdrawalLimit,
            });

            return response.status(201).send();
        } catch (error) {
            return response.status(400).json({
                message: error || 'Unexpected error.'
            })
        }
    }
}