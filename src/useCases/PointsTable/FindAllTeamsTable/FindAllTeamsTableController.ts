import { Request, Response } from "express";

import { FindAllTeamTableUseCase } from "./FindAllTeamTableUseCase";

export class FindAllTeamTableController {

    constructor(private findAllTeamTableUseCase: FindAllTeamTableUseCase) {
    }

    async execute(request: Request, response: Response): Promise<Response> {
        const { pointsTableId } = request.body;

        try {
            const teams = await this.findAllTeamTableUseCase.execute({
                pointsTableId
            });

            return response.status(201).send(teams);
        } catch (error) {
            return response.status(400).json({
                message: error.message || 'An unexpected error occured.'
            })
        }
    }
}