import { Request, Response } from "express";

import { AddTeamToGameUseCase } from "./AddTeamToGameUseCase";

export class AddTeamToGameController {

    constructor(private addTeamToGameTableUseCase: AddTeamToGameUseCase) {
    }

    async execute(request: Request, response: Response): Promise<Response> {
        const { pointsTableId, team } = request.body;

        try {
            await this.addTeamToGameTableUseCase.execute({
                pointsTableId,
                team,
            });

            return response.status(200).send();
        } catch (error) {
            return response.status(400).json({
                message: error.message || 'An unexpected error occured.'
            })
        }
    }
}