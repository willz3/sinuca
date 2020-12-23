import { JsonDatabase } from '../../../database/jsonDB/JsonDatabase';

import { Player } from "../../../entities/Player";
import { IPlayerRepository } from "../../interfaces/IPlayerRepository";

export class JSONDatabasePlayerRepository implements IPlayerRepository {

    constructor(private db: JsonDatabase) {
  
    }

    async save(player: Player): Promise<void> {
        await this.db.save('/player', player);
    }

    async update(player: Player): Promise<void> {
        await this.db.update('/player', player);
    }

    async findById(uuid: string): Promise<Player> {
        return await this.db.findById('/player', uuid);
    }

    async findAll(): Promise<Player[]> {
        return await this.db.findAll('/player');
    }

    async findByName(name: string): Promise<Player> {
        return await this.db.findByField('/player', 'name', name);
    }
    
}