import { ITeamRepository } from "../../../repositories/interfaces/ITeamRepository";
import { ICreateTeamRequestDTO } from "./ICreateTeamRequestDTO";
import { Team } from "../../../entities/Team";

export class CreateTeamUseCase {
    
    constructor(private teamRepository: ITeamRepository){

    }

    async execute(data: ICreateTeamRequestDTO) {
        //const teamAlreadyExists = await this.teamRepository.findByName(data.name);

        if(false) {
            throw new Error('Team already exists.');
        }

        const team = new Team(data);

        await this.teamRepository.save(team);
    }
}