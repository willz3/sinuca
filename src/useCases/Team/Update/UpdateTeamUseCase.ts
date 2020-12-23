import { ITeamRepository } from "../../../repositories/interfaces/ITeamRepository";
import { IUpdateTeamRequestDTO } from "./IUpdateTeamRequestDTO";
import { Team } from "../../../entities/Team";

export class UpdateTeamUseCase {
    
    constructor(private teamRepository: ITeamRepository){

    }

    async update(data: IUpdateTeamRequestDTO) {
        const teamAlreadyExists = await this.teamRepository.findByName(data.name);

        if(!teamAlreadyExists) {
            throw new Error(`Team doesn't exists.`);
        }

        const team = new Team(data);

        await this.teamRepository.update(team);
    }
}