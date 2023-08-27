import { Request, Response } from "express";
import { DeleteAccountUseCase } from "./DeleteAccountUseCase";


export class DeleteAccountController {
    constructor(
        private deleteAccountUseCase: DeleteAccountUseCase,
    ) { }


    async handle(request: Request, response: Response): Promise<Response> {
        const { id } = request.params;

        try {
            await this.deleteAccountUseCase.execute({
                id
            });
            return response.status(201).send();
        } catch (error) {
            return response.status(400).json({
                message: error || 'Unexpected error.'
            })
        }
    }
}