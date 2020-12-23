import { PointsTable } from "../../../entities/PointsTable";
import { IPointsTableRepository } from "../../../repositories/interfaces/IPointsTableRepository";
import { IAddTeamToGameRequestDTO } from "./IAddTeamToGameRequestDTO";
import { IValidator } from "../../../validator/IVadalitor";


import "../../../config/env";
import { AddTeamToGameValidator } from "./AddTeamToGameValidator";

export class AddTeamToGameUseCase {

    constructor(private pointsTableRepository: IPointsTableRepository) {

    }

    async execute(data: IAddTeamToGameRequestDTO) {

        const { pointsTableId, team } = data;
        const pointsTable: PointsTable = await this.pointsTableRepository.findById(pointsTableId);

        const validator = new AddTeamToGameValidator(pointsTable);
        await validator.validate();
        await validator.isValid();

        const teamAlreadyExists = pointsTable.teams.find(t => t.uuid === team.id);
            
        if(teamAlreadyExists) {
            throw new Error('The team already exists in points table.');
        }

        pointsTable.teams.push(team);
        pointsTable.points.set(team.id, Number(process.env.STARTING_POINTS_TEAM));

        await this.pointsTableRepository.update(pointsTable);
    }
}