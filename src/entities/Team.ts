import { Player } from "./Player";

export class Team {

    public id: string;
    public uuid: string;

    public name: string;
    public players: Array<Player> = [];

    constructor(props: Omit<Team, 'id' | 'uuid'>, id?: string, uuid?: string) {
        Object.assign(this, props);
    }
}