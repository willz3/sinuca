import { Request, Response } from "express";

import { FindPlayerUseCase } from "./FindPlayerUseCase";

export class FindPlayerController {

    constructor(private findPlayerUseCase: FindPlayerUseCase) {
    }

    async findAll(request: Request, response: Response): Promise<Response> {
        try {
            const players = await this.findPlayerUseCase.findAll();
            console.log(players);
            return response.status(200).json(players);
        } catch (error) {
            return response.status(400).json({
                message: error.message || 'An unexpected error occured.'
            })
        }
    }

    async show(request: Request, response: Response): Promise<Response> {
        try {
            const { uuid } = request.params;
            const player = await this.findPlayerUseCase.show(uuid);
            console.log(player);
            return response.status(200).json(player);
        } catch (error) {
            return response.status(400).json({
                message: error.message || 'An unexpected error occured.'
            })
        }
    }
}