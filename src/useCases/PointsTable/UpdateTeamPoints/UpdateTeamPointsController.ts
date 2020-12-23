import { Request, Response } from "express";

import { UpdateTeamPointsUseCase } from "./UpdateTeamPointsUseCase";

export class UpdateTeamPointsController {

    constructor(private updateTeamPointsTableUseCase: UpdateTeamPointsUseCase) {
    }

    async execute(request: Request, response: Response): Promise<Response> {
        const { pointsTableId, teamId, newPoints } = request.body;

        try {
            await this.updateTeamPointsTableUseCase.execute({
                pointsTableId,
                teamId,
                newPoints
            });

            return response.status(200).send();
        } catch (error) {
            return response.status(400).json({
                message: error.message || 'An unexpected error occured.'
            })
        }
    }
}