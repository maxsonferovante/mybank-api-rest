import { Request, Response } from "express";
import { DepositService } from "./DepositService";

export class DepositController {
    constructor(
        private depositService: DepositService,
    ) { }

    async handle(request: Request, response: Response): Promise<Response> {
        const { id, amount } = request.body;

        try {
            await this.depositService.execute({
                id,
                amount
            });
            return response.status(201).send();
        } catch (error) {
            return response.status(400).json({
                message: error || 'Unexpected error.'
            })
        }
    }
}