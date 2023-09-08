import { Request, Response } from "express";
import { GetAccountUseCase } from "./GetAccountUseCase";
import { error } from "console";



export class GetAccountController {
    constructor(
        private getAccountUseCase: GetAccountUseCase,
    ) { }
    async handle(request: Request, response: Response): Promise<Response> {
        const { id } = request.params;
        try {
            const account = await this.getAccountUseCase.execute({ id });
            return response.status(200).json(account);
        } catch (error) {
            return response.status(400).json({
                message: error || 'Unexpected error.'
            })
        }
    }
    async handleList(request: Request, response: Response): Promise<Response> {
        try {
            const accounts = await this.getAccountUseCase.executeList();
            return response.status(200).json(accounts);
        } catch (error) {
            return response.status(400).json({
                message: error || 'Unexpected error.'
            })
        }
    }
}