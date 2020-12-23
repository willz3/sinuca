import { Player } from "../../../entities/Player";

export interface IUpdateTeamRequestDTO {
    id: string;
    name: string;
    award: string;
    rules: string;
    players: Array<Player>;

}