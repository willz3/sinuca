import { Request, Response } from "express";

import { UpdatePlayerUseCase } from "./UpdatePlayerUseCase";

export class UpdatePlayerController {

    constructor(private updatePlayerUseCase: UpdatePlayerUseCase) {
    }

    async execute(request: Request, response: Response): Promise<Response> {
        const { uuid, name } = request.body;

        try {
            await this.updatePlayerUseCase.execute({
                uuid,
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