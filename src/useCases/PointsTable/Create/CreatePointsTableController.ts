import { Request, Response } from "express";

import { CreatePointsTableUseCase } from "./CreatePointsTableUseCase";

export class CreatePointsTableController {

    constructor(private createPointsTableUseCase: CreatePointsTableUseCase) {
    }

    async execute(request: Request, response: Response): Promise<Response> {
        const { name, award, rules, teams } = request.body;

        try {
            await this.createPointsTableUseCase.execute({
                name,
                award,
                rules,
                teams
            });

            return response.status(201).send();
        } catch (error) {
            return response.status(400).json({
                message: error.message || 'An unexpected error occured.'
            })
        }
    }
}