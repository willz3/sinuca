import { PointsTable } from "../../../entities/PointsTable";
import { IPointsTableRepository } from "../../../repositories/interfaces/IPointsTableRepository";
import { IUpdateTeamPointsRequestDTO } from "./IUpdateTeamPointsRequestDTO";


import "../../../config/env";

export class UpdateTeamPointsUseCase {

    constructor(private pointsTableRepository: IPointsTableRepository) {
        
    }

    async execute(data: IUpdateTeamPointsRequestDTO) {
        const { pointsTableId, teamId, newPoints } = data;
        const pointsTable: PointsTable = await this.pointsTableRepository.findById(pointsTableId);

        if(pointsTable.points.has(teamId)) {
            pointsTable.points.delete(teamId)
        }
        
        pointsTable.points.set(teamId, newPoints);

        await this.pointsTableRepository.update(pointsTable);
    }
}