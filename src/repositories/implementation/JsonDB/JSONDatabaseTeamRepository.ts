import { JsonDatabase } from "../../../database/jsonDB/JsonDatabase";
import { Team } from "../../../entities/Team";
import { ITeamRepository } from "../../interfaces/ITeamRepository";

export class JSONDatabaseTeamRepository implements ITeamRepository {

    constructor(private db: JsonDatabase) {
  
    }

    async save(team: Team): Promise<void> {
        await this.db.save('/team', team);
    }

    async update(team: Team): Promise<void> {
        await this.db.update('/team', team);
    }

    async findById(uuid: string): Promise<Team> {
        return await this.db.findById('/team', uuid);
    }

    async findAll(): Promise<Team[]> {
        return await this.db.findAll('/team');
    }

    async findByName(name: string): Promise<Team> {
        return await this.db.findByField('/team', 'name', name);

    }

}