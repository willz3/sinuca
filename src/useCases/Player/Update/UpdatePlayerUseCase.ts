import { Player } from "../../../entities/Player";
import { IPlayerRepository } from "../../../repositories/interfaces/IPlayerRepository";
import { IUpdatePlayerRequestDTO } from "./IUpdatePlayerRequestDTO";

export class UpdatePlayerUseCase {

    constructor(private playerRepository: IPlayerRepository) {
        
    }

    async execute(data: IUpdatePlayerRequestDTO) {
        const playerAlreadyExists = await this.playerRepository.findById(data.uuid);

        if(!playerAlreadyExists) {
            throw new Error(`Player doesn't exists.`);
        }

        const player = new Player(data);

        await this.playerRepository.update(player);
    }
    
}