import { IRepository } from "../IRepository";
import { Team } from "../../entities/Team";

export interface ITeamRepository extends IRepository {
    findByName(name: string): Promise<Team>;
}