import { Request, Response } from "express";
import { CreateTeamUseCase } from "./CreateTeamUseCase";

export class CreateTeamController {

    constructor(private createTeamUseCase:  CreateTeamUseCase) {

    }

    async execute(request: Request, response: Response): Promise<Response> {
        const { name, players } = request.body;

        try {
            await this.createTeamUseCase.execute({
                name,
                players
            });

            return response.status(200).send();
        } catch (error) {
            return response.status(400).json({
                message: error.message || 'An unexpected error occured.'
            })
        }
    }
}