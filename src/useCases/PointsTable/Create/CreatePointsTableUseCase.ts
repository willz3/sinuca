import { PointsTable } from "../../../entities/PointsTable";
import { IPointsTableRepository } from "../../../repositories/interfaces/IPointsTableRepository";
import { ICreatePointsTableRequestDTO } from "./ICreatePointsTableRequestDTO";

import "../../../config/env";

export class CreatePointsTableUseCase {

    constructor(private pointsTableRepository: IPointsTableRepository) {
        
    }

    async execute(data: ICreatePointsTableRequestDTO) {
        const pointsTableAlreadyExists = await this.pointsTableRepository.findByName(data.name);

        //Caberia uma classe de validators
        if(pointsTableAlreadyExists) {
            throw new Error('The points table already exists.');
        }

        if(data.teams.length > Number(process.env.MAX_TEAMS_IN_EACH_TABLE)) {
            throw new Error('The points table already have ten teams.');
        }

        const pointsTable = new PointsTable(data);

        await this.pointsTableRepository.save(pointsTable);
    }
}