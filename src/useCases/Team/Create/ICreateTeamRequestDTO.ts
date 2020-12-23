import { Player } from "../../../entities/Player";
export interface ICreateTeamRequestDTO {
    name: string;
    players: Array<Player>;

}