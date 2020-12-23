import { Request, Response } from "express";

import { CreatePlayerUseCase } from "./CreatePlayerUseCase";

export class CreatePlayerController {

    constructor(private createPlayerUseCase: CreatePlayerUseCase) {
    }

    async execute(request: Request, response: Response): Promise<Response> {
        const { name } = request.body;

        try {
            await this.createPlayerUseCase.execute({
                name
            });

            return response.status(201).send();
        } catch (error) {
            return response.status(400).json({
                message: error.message || 'An unexpected error occured.'
            })
        }
    }

}