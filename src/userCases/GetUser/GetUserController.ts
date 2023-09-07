import { Request, Response } from "express";
import { GetUserUseCase } from "./GetUserUseCase";
import { error } from "console";


export class GetUserController {
    constructor(
        private getUserUseCase: GetUserUseCase,
    ) { }
    async handle(request: Request, response: Response): Promise<Response> {
        const { id } = request.params;
        try {
            const user = await this.getUserUseCase.execute({ id });
            return response.status(200).json(user);
        } catch (error) {
            return response.status(400).json({
                message: "User not found."
            })
        }
    }
    async handleList(request: Request, response: Response): Promise<Response> {
        try {
            const user = await this.getUserUseCase.executeList();
            return response.status(200).json(user);
        } catch (error) {
            return response.status(400).json({
                message: error || 'Unexpected error.'
            })
        }
    }
}