import { IPointsTableRepository } from "../../../repositories/interfaces/IPointsTableRepository";
import { IFindAllTeamTableRequestDTO } from "./IFindAllTeamsTableRequestDTO";

import "../../../config/env";

export class FindAllTeamTableUseCase {

    constructor(private pointsTableRepository: IPointsTableRepository) {
        
    }

    async execute(data: IFindAllTeamTableRequestDTO) {
        const pointsTable = await this.pointsTableRepository.findById(data.pointsTableId);

        return pointsTable.teams;
    }
}