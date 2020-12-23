import { Request, Response } from "express";
import { UpdateTeamUseCase } from "./UpdateTeamUseCase";

export class UpdateTeamController {

    constructor(private updateTeamUseCase:  UpdateTeamUseCase) {

    }

    async execute(request: Request, response: Response): Promise<Response> {
        const { id, name, award, rules, players } = request.body;

        try {
            await this.updateTeamUseCase.update({
                id,
                name,
                award,
                rules,
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