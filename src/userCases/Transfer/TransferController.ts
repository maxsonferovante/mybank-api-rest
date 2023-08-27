import { Request, Response } from "express";

import { TransferService } from "./TransferService";

export class TransferController {
    constructor(
        private transferService: TransferService,
    ) { }

    async handle(request: Request, response: Response): Promise<Response> {
        const { id, amount, to } = request.body;

        try {
            await this.transferService.execute({
                idOrigen: id,
                amount: amount,
                idDestinationAccount: to
            });
            return response.status(201).send();
        } catch (error) {
            return response.status(400).json({
                message: error || 'Unexpected error.'
            })
        }
    }
}