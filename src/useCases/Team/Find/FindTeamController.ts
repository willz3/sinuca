import { Request, Response } from "express";

import { FindTeamUseCase } from "./FindTeamUseCase";

export class FindTeamController {

    constructor(private findTeamUseCase: FindTeamUseCase) {
    }

    async show(request: Request, response: Response): Promise<Response> {
        try {
            const { uuid } = request.params;
            const team = await this.findTeamUseCase.show(uuid);
            console.log(team);
            return response.status(200).json(team);
        } catch (error) {
            return response.status(400).json({
                message: error.message || 'An unexpected error occured.'
            })
        }
    }

    async findAll(request: Request, response: Response): Promise<Response> {
        try {
            const teams = await this.findTeamUseCase.findAll();
            console.log(teams);
            return response.status(200).json(teams);
        } catch (error) {
            return response.status(400).json({
                message: error.message || 'An unexpected error occured.'
            })
        }
    }
}