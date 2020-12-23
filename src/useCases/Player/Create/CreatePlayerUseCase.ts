import { Player } from "../../../entities/Player";
import { IPlayerRepository } from "../../../repositories/interfaces/IPlayerRepository";
import { ICreatePlayerRequestDTO } from "./ICreatePlayerRequestDTO";

export class CreatePlayerUseCase {

    constructor(private playerRepository: IPlayerRepository) {
        
    }

    async execute(data: ICreatePlayerRequestDTO) {
        const playerAlreadyExists = await this.playerRepository.findByName(data.name);

        if(playerAlreadyExists) {
            throw new Error('Player already exists.');
        }

        const player = new Player(data);

        await this.playerRepository.save(player);
    }
    
}