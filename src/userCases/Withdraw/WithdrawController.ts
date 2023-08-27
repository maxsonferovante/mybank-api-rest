import { Request, Response } from "express";

import { WithdrawService } from "./WithdrawService";

export class WithdrawController {
    constructor(
        private withdrawService: WithdrawService,
    ) { }

    async handle(request: Request, response: Response): Promise<Response> {
        const { id, amount } = request.body;

        try {
            await this.withdrawService.execute({
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