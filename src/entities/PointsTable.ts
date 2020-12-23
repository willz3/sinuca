import { Team } from "./Team";

export class PointsTable {

    public id: string;
    public uuid: string;

    public name: string;
    public award: string;
    public rules: string;
    public maxPoints: number;
    public points: Map<string, number>;
    public teams: Array<Team> = [];

    constructor(props: Omit<PointsTable, 'id'|'uuid'|'points'|'teams'>,
     id?: string, 
     uuid?: string, 
     points?: Map<string, number>,
     teams?: Array<Team>) {
        Object.assign(this, props);
    }
}