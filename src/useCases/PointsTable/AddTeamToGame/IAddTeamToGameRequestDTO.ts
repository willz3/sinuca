import { Team } from "../../../entities/Team";

export interface IAddTeamToGameRequestDTO {
    pointsTableId: string;
    team: Team;
}