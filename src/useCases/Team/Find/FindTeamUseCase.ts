import { Team } from "../../../entities/Team";
import { ITeamRepository } from "../../../repositories/interfaces/ITeamRepository";

export class FindTeamUseCase {

    constructor(private teamRepository: ITeamRepository) {
    }

    async show(uuid: string): Promise<Team[]> {
        const player = await this.teamRepository.findById(uuid);
        return player;
    }

    async findAll(): Promise<Team[]> {
        const players = await this.teamRepository.findAll();
        return players;
    }
    
}