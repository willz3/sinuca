import { Player } from "../../../entities/Player";
import { IPlayerRepository } from "../../../repositories/interfaces/IPlayerRepository";

export class FindPlayerUseCase {

    constructor(private playerRepository: IPlayerRepository) {
    }

    async findAll(): Promise<Player[]> {
        const players = await this.playerRepository.findAll();
        return players;
    }

    async show(uuid: string): Promise<Player[]> {
        const player = await this.playerRepository.findById(uuid);
        return player;
    }
    
}