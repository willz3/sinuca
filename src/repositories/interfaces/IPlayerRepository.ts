import { IRepository } from "../IRepository";
import { Player } from "../../entities/Player";

export interface IPlayerRepository extends IRepository {
    findByName(name: string): Promise<Player>;
}