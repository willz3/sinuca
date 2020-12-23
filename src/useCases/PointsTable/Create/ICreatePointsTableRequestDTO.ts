import { Team } from "../../../entities/Team";

export interface ICreatePointsTableRequestDTO {
    name: string;
    award: string;
    rules: string;
    teams: Array<Team>;
}